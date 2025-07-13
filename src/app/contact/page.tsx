'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import NavbarTwo from "@/components/navbarTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";

export default function Contact(){
    const { t } = useLanguage() as any;
    
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/about-us.png')"}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">{t('contact.header.subtitle')}</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">{t('contact.header.title')}</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{t('contact.header.breadcrumb')}</li>
                        </ul>
                    </nav>
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
                                <Link href="mailto:contact@example.com" className="text-foot">{t('contact.info.email.address')}</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 text-center features feature-clean bg-transparent">
                            <div className="icons text-primary text-center mx-auto">
                            </div>
                            <div className="content mt-3">
                                <h5 className="footer-head">{t('contact.info.location.title')}</h5>
                                <p className="text-muted">{t('contact.info.location.description')}</p>
                                <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                    data-type="iframe" className="video-play-icon text-foot lightbox">{t('contact.info.location.mapLink')}</Link>
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
                            <form >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.name.label')} <span className="text-danger">{t('contact.form.required')}</span></label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder={t('contact.form.fields.name.placeholder')}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.email.label')} <span className="text-danger">{t('contact.form.required')}</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder={t('contact.form.fields.email.placeholder')}/>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.subject.label')}</label>
                                                <input name="subject" id="subject" className="form-control" placeholder={t('contact.form.fields.subject.placeholder')}/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">{t('contact.form.fields.message.label')} <span className="text-danger">{t('contact.form.required')}</span></label>
                                                <textarea name="comments" id="comments" rows={4} className="form-control" placeholder={t('contact.form.fields.message.placeholder')}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">{t('contact.form.submit')}</button>
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