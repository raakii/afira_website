'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import enTranslations from '@/translations/en.json';
import frTranslations from '@/translations/fr.json';
import NavbarTwo from "@/components/navbarTwo.js";
import ClientTwo from "@/components/clientTwo.js";
import BlogOne from "@/components/blogTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";
import Tab from "@/components/tab.js";

export default function Services(){
    const { language } = useLanguage();
    const translations = language === 'en' ? enTranslations : frTranslations;
    const steps = translations.services.steps || [];

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
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">{translations.services.subtitle}</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">{translations.services.title}</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href={`/${language}`}>Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{translations.services.breadcrumb}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    {steps.map((item)=>{
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-4" key={item.id}>
                            <div className="card border-0 p-4 text-center rounded features features-classic feature-primary">
                                <div className="content">
                                    <Link href={`/${language}/services/${item.id}`} className="title text-dark h5">{item.title}</Link>
                                    <p className="text-muted mb-0 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60 w-60 ">
                <Tab/>
            </div>
        </section>

        <section className="section">
            <ClientTwo/>

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>
        <div className="container-fluid px-0">
            <div className="py-5 position-relative">
                <div className="position-absolute w-100 h-100" style={{zIndex: -1}}>
                    <Image 
                        src="/images/busi04.jpg"
                        alt="Background"
                        fill
                        sizes="100vw"
                        style={{objectFit: 'cover'}}
                    />
                </div>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7">
                            <h4 className="display-6 h4 mb-0 text-white title-dark fw-medium">Catalyst for Growth<br/> Join the Afira community.</h4>
                        </div>

                        <div className="col-lg-4 col-md-5 text-md-end mt-4 mt-sm-0">
                            <Link href="#" className="btn btn-light">Join us Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
} 