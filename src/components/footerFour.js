'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '../context/LanguageContext';

export default function FooterFour(){
    const { t } = useLanguage();
    
    return(
        <>
        <footer className="footer bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href="/" className="logo-footer">
                                        <Image src='/images/logo-light.png' width={102} height={102} alt=""/>
                                    </Link>
                                    <p className="mt-4">{t('footer.description')}</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4 d-flex align-items-center" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                        <li style={{display: 'flex', alignItems: 'center', margin: 0, padding: 0}}>
                                            <Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li style={{display: 'flex', alignItems: 'center', margin: 0, padding: 0}}>
                                            <Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li style={{display: 'flex', alignItems: 'center', margin: 0, padding: 0}}>
                                            <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded d-inline-flex align-items-center justify-content-center" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0}}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h6 className="footer-head">{t('footer.company.title')}</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/about" className="text-foot d-flex align-items-center"> {t('footer.company.about')}</Link></li>
                                        <li><Link href="/services" className="text-foot d-flex align-items-center"> {t('footer.company.services')}</Link></li>
                                        <li><Link href="/team" className="text-foot d-flex align-items-center"> {t('footer.company.team')}</Link></li>
                                        <li><Link href="#" className="text-foot d-flex align-items-center"> {t('footer.company.miniAcademy')}</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h6 className="footer-head">{t('footer.usefulLinks.title')}</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href="/" className="text-foot d-flex align-items-center"> {t('footer.usefulLinks.termsOfServices')}</Link></li>
                                        <li><Link href="/" className="text-foot d-flex align-items-center"> {t('footer.usefulLinks.privacyPolicy')}</Link></li>
                                        <li><Link href="/contact" className="text-foot d-flex align-items-center"> {t('footer.usefulLinks.contactUs')}</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h6 className="footer-head">{t('footer.newsletter.title')}</h6>
                                    <p className="mt-4">{t('footer.newsletter.description')}</p>
                                    
                                    <div className="subcribe-form footer-subscribe">
                                        <form>
                                            <input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder={t('footer.newsletter.emailPlaceholder')} required/>
                                            <button type="submit" className="btn btn-pills btn-icon btn-primary"></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="text-center">
                                <p className="mb-0 text-muted">{new Date().getFullYear()} {t('footer.copyright')} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}