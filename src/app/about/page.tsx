'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import NavbarTwo from "@/components/navbarTwo.js";
import ClientTwo from "@/components/clientTwo.js";
import Counter from "@/components/counter.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";

export default function PageAboutUs(){
    const { t, tWithLineBreaks, isLoading } = useLanguage();
    if (isLoading) return null;

    const aboutData = [
        {
            title: t('about.sdgs.sdg4.title'),
            desc: t('about.sdgs.sdg4.description')
        },
        {
            title: t('about.sdgs.sdg5.title'),
            desc: t('about.sdgs.sdg5.description')
        },
        {
            title: t('about.sdgs.sdg8.title'),
            desc: t('about.sdgs.sdg8.description')
        },
        {
            title: t('about.sdgs.sdg10.title'),
            desc: t('about.sdgs.sdg10.description')
        }
    ]

    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(/images/about-us.png)`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">{t('about.header.subtitle')}</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">{t('about.header.title')}</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">{t('about.breadcrumb.home')}</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{t('about.breadcrumb.current')}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src="/images/about-us2.png" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto' }} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3">{t('about.title')}</h4>
                            <p className="text-muted" style={{whiteSpace: 'pre-line'}}>{t('about.intro')}</p>
                            <ul className="list-unstyled text-muted mb-0">
                                <li className="mb-0">
                                    <span className="text-dark h5 me-2">{t('about.vision.title')}</span>
                                    {t('about.vision.description')}
                                </li>
                                <li className="mb-0">
                                    <span className="text-dark h5 me-2">{t('about.mission.title')}</span>
                                    {t('about.mission.description')}
                                </li>
                                <li className="mb-0">
                                    <span className="text-dark h5 me-2">{t('about.whyAfira.title')}</span>
                                    {t('about.whyAfira.description')}
                                </li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <h1 className="mb-16 text-center">{t('about.impact.title')}</h1>
                <div className="row justify-content-center mt-8">
                    {aboutData.map((item, index) =>{
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                            <div className="card shadow p-4 rounded features features-classic feature-primary">
                                <div className="content my-3 border-bottom">
                                    <Link href="/services" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                                <Link href="/services" className="d-flex align-items-center justify-content-between">
                                    <span className="fw-medium text-dark">{t('about.impact.readMore')}</span>
                                </Link>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className=" mt-100 mt-60">
                <ClientTwo/>
            </div>

            <Counter/>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
} 