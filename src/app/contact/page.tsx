'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import NavbarTwo from "@/components/navbarTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";

export default function Contact(){
    const { t, isLoading } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Formspree endpoint - replace with your actual Formspree form ID
            const formspreeEndpoint = 'https://formspree.io/f/mgvnnbzb';
            
            // Prepare form data
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('subject', formData.subject || 'Contact Form Submission');
            formDataToSend.append('message', formData.message);
            formDataToSend.append('_replyto', formData.email);

            // Send email using Formspree
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                let errorMessage = 'Failed to send message';
                try {
                    const data = await response.json();
                    if (data.errors && Array.isArray(data.errors)) {
                        errorMessage = data.errors.map((error: { message?: string }) => error.message || String(error)).join(', ');
                    } else if (data.error) {
                        errorMessage = data.error;
                    }
                } catch {
                    // If we can't parse the response, use a generic error message
                    errorMessage = `Server error (${response.status}): ${response.statusText}`;
                }
                throw new Error(errorMessage);
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitMessage('There was an error sending your message. Please try again or contact us directly at workwithafira@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (isLoading) return null;

    const teamData = [
        {
            image:'/images/femme5.jpg',
            name:'Aissata BA',
            title:'C.E.O'
        },
        {
            image:'/images/Raki.png',
            name:'Raki DIALLO',
            title:'Manager'
        },
    ]
    
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/femme8.jpg')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">{t('contact.header.subtitle') || 'Get In Touch'}</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">{t('contact.header.title') || 'Contact Us'}</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{t('contact.header.breadcrumb') || 'Contact'}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-5 col-md-6">
                        <Image src="/images/femme5.jpg" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto' }} className="img-fluid rounded shadow" alt=""/>
                        
                        {/* Ambition paragraph under the photo */}
                        <div className="mt-4">
                            <div className="card border-0 shadow-sm rounded-3 p-4 h-100 position-relative overflow-hidden">
                                <div className="position-absolute top-0 end-0 w-100 h-100" style={{background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.05) 0%, rgba(25, 135, 84, 0.1) 100%)'}}></div>
                                <div className="d-flex align-items-start position-relative">
                                    <div className="flex-shrink-0">
                                        <div className="avatar-sm bg-success bg-gradient rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '3rem', height: '3rem'}}>
                                            <i className="mdi mdi-rocket text-white fs-5"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="text-dark mb-2 fw-semibold">{t('contact.mission.title')}</h5>
                                        <p className="text-muted mb-0 lh-lg" style={{ whiteSpace: 'pre-line' }}>{t('contact.mission.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3">{t('about.title')}</h4>
                            <div className="text-muted" style={{ whiteSpace: 'pre-line' }}>{t('contact.intro')}</div>
                            
                            {/* Mission card on the right */}
                            <div className="mt-4">
                                <div className="card border-0 shadow-sm rounded-3 p-4 h-100 position-relative overflow-hidden">
                                    <div className="position-absolute top-0 end-0 w-100 h-100" style={{background: 'linear-gradient(135deg, rgba(13, 110, 253, 0.05) 0%, rgba(13, 110, 253, 0.1) 100%)'}}></div>
                                    <div className="d-flex align-items-start position-relative">
                                        <div className="flex-shrink-0">
                                            <div className="avatar-sm bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '3rem', height: '3rem'}}>
                                                <i className="mdi mdi-target text-white fs-5"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-dark mb-2 fw-semibold">{t('contact.vision.title')}</h5>
                                            <p className="text-muted mb-0 lh-lg" style={{ whiteSpace: 'pre-line' }}>{t('contact.vision.description')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 pb-2">
                        <div className="section-title text-center">
                            <h4 className="title fw-semibold mb-3">{t('team.title')}</h4>
                            <p className="text-muted para-desc mx-auto mb-0">{t('team.subtitle')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {teamData.map((item,index)=>{
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card team team-primary rounded-0 team-two overflow-hidden shadow">
                                <div className="team-image">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="overlay"></div>
                                </div>
                                <ul className="list-unstyled social-icon team-social mb-0">
                                    <li><Link href="https://www.facebook.com/share/1Abeu9Y2KL/?mibextid=wwXIfr" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                            </Link></li>
                                    <li className="mt-1"><Link href="https://www.instagram.com/afira_nanofinance?igsh=Z21ka3ZkemZycGZ2&utm_source=qr" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                </svg>
                                            </Link></li>
                                    <li className="mt-1"><Link href="https://www.tiktok.com/@afira1055?_t=ZM-90V0OdluPV2&_r=1" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                                </svg>
                                            </Link></li>
                                    <li className="mt-1"><Link href="https://www.linkedin.com/company/afira-empowering-financial-freedom/" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </Link></li>
                                </ul>
                                <div className="team-content">
                                    <Link href="#" className="h6 text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                    <small className="text-white title-dark">{item.title}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section pb-0">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-0 text-center features feature-clean bg-transparent">
                            <div className="icons text-primary text-center mx-auto">
                            </div>
                            <div className="content mt-3">
                                <h5 className="footer-head">{t('contact.info.phone.title')}</h5>
                                <p className="text-muted">{t('contact.info.phone.description')}</p>
                                <Link href="tel:+152534-468-854" className="text-foot">{t('contact.info.phone.number')}</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 text-center features feature-clean bg-transparent">
                            <div className="icons text-primary text-center mx-auto">
                            </div>
                            <div className="content mt-3">
                                <h5 className="footer-head">{t('contact.info.email.title')}</h5>
                                <p className="text-muted">{t('contact.info.email.description')}</p>
                                <Link href="mailto:workwithafira@gmail.com" className="text-foot">{t('contact.info.email.address')}</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 text-center features feature-clean bg-transparent">
                            <div className="icons text-primary text-center mx-auto">
                            </div>
                            <div className="content mt-3">
                                <h5 className="footer-head">{t('contact.info.location.title')}</h5>
                                <div className="text-muted" style={{ whiteSpace: 'pre-line' }}>{t('contact.info.location.description')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title mb-5 pb-2 text-center">
                            <h4 className="title mb-3">{t('contact.form.title')}</h4>
                            <p className="text-muted para-desc mx-auto mb-0">{t('contact.form.subtitle')}</p>
                        </div>
                        <div className="custom-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.name.label')} <span className="text-danger">*</span></label>
                                            <input 
                                                name="name" 
                                                id="name" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder={t('contact.form.fields.name.placeholder')}
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.email.label')} <span className="text-danger">*</span></label>
                                            <input 
                                                name="email" 
                                                id="email" 
                                                type="email" 
                                                className="form-control" 
                                                placeholder={t('contact.form.fields.email.placeholder')}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.subject.label')}</label>
                                            <input 
                                                name="subject" 
                                                id="subject" 
                                                className="form-control" 
                                                placeholder={t('contact.form.fields.subject.placeholder')}
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.message.label')} <span className="text-danger">*</span></label>
                                            <textarea 
                                                name="message" 
                                                id="message" 
                                                rows={4} 
                                                className="form-control" 
                                                placeholder={t('contact.form.fields.message.placeholder')}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                {submitMessage && (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className={`alert ${submitMessage.includes('error') ? 'alert-danger' : 'alert-success'} mb-3`}>
                                                {submitMessage}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button 
                                                type="submit" 
                                                id="submit" 
                                                name="send" 
                                                className="btn btn-primary"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
                
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
} 