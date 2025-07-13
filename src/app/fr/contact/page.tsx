'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import NavbarTwo from "@/components/navbarTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";

export default function Contact(){
    const { language } = useLanguage();
    
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>

        <section className="bg-half-170 d-table w-100 h-32 position-relative">
            <div className="position-absolute w-100 h-100" style={{zIndex: -1, top: 0, left: 0}}>
                <Image 
                    src="/images/about-us.png"
                    alt="Background"
                    fill
                    sizes="100vw"
                    style={{objectFit: 'cover'}}
                    priority
                />
            </div>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Contactez-nous</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Nous sommes là pour vous aider</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href={`/${language}`}>Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card border-0 rounded shadow">
                            <div className="card-body p-4">
                                <h4 className="card-title">Adresse</h4>
                                <div className="mt-3">
                                    <p className="text-muted mb-0">123 Rue de l&apos;Innovation</p>
                                    <p className="text-muted mb-0">75001 Dakar, Senegal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <div className="card border-0 rounded shadow">
                            <div className="card-body p-4">
                                <h4 className="card-title">Email</h4>
                                <div className="mt-3">
                                    <p className="text-muted mb-0">contact@afira.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <div className="card border-0 rounded shadow">
                            <div className="card-body p-4">
                                <h4 className="card-title">Téléphone</h4>
                                <div className="mt-3">
                                    <p className="text-muted mb-0">+33 1 23 45 67 89</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 rounded shadow">
                            <div className="card-body p-4">
                                <h4 className="card-title mb-4 text-center">Envoyez-nous un message</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Votre nom</label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Votre nom :"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Votre email</label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Votre email :"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Sujet</label>
                                                <input name="subject" id="subject" className="form-control" placeholder="Sujet :"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Message</label>
                                                <textarea name="comments" id="comments" rows={4} className="form-control" placeholder="Votre message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <button type="submit" id="submit" name="send" className="btn btn-primary">Envoyer le message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterFour/>
        <ScrollTop/>
        </>
    )
} 