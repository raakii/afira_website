'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '../context/LanguageContext';

export default function FooterFour(){
    const { language } = useLanguage();
    
    return(
        <>
        <footer className="footer bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <Link href={`/${language}`} className="logo-footer">
                                        <Image src='/images/logo-light.png' width={102} height={102} alt=""/>
                                    </Link>
                                    <p className="mt-4">Our solution is here to help make your projects come true</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
 
                                        <li className="list-inline-item"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"></Link></li>
                                        <li className="list-inline-item"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"></Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h6 className="footer-head">Company</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href={`/${language}/about`} className="text-foot d-flex align-items-center"> About us</Link></li>
                                        <li><Link href={`/${language}/services`} className="text-foot d-flex align-items-center"> Services</Link></li>
                                        <li><Link href={`/${language}/team`} className="text-foot d-flex align-items-center"> Team</Link></li>
                                        <li><Link href="#" className="text-foot d-flex align-items-center"> Mini academy</Link></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h6 className="footer-head">Usefull Links</h6>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><Link href={`/${language}`} className="text-foot d-flex align-items-center"> Terms of Services</Link></li>
                                        <li><Link href={`/${language}`} className="text-foot d-flex align-items-center"> Privacy Policy</Link></li>
                                        <li><Link href={`/${language}/contact`} className="text-foot d-flex align-items-center"> Contact Us</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h6 className="footer-head">Newsletter</h6>
                                    <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                    
                                    <div className="subcribe-form footer-subscribe">
                                        <form>
                                            <input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder="Email :" required/>
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
                                <p className="mb-0 text-muted">{new Date().getFullYear()} © Copyright Afira 2025 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}