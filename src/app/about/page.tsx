'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import NavbarTwo from "@/components/navbarTwo.js";
import Counter from "@/components/counter.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";

export default function PageAboutUs(){
    const { t, isLoading } = useLanguage();
    if (isLoading) return null;

    // Collect about values in a more maintainable way
    const valueKeys = [1, 2, 3, 4];
    const aboutData = valueKeys.map(i => ({
        title: t(`about.values.value${i}.title`),
        desc: t(`about.values.value${i}.description`)
    }));

    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(/images/femme5.jpg)`, backgroundPosition:'center'}}>
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
                        <Image src="/images/femme6.jpg" width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto' }} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3">{t('about.title')}</h4>
                            <div className="text-muted" style={{ whiteSpace: 'pre-line' }}>{t('about.intro')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row g-4">
                    {/* Vision - Right aligned */}
                    <div className="col-lg-8 col-md-10 offset-lg-4 offset-md-2">
                        <div className="card border-0 shadow-sm rounded-3 p-4 h-100 position-relative overflow-hidden">
                            <div className="position-absolute top-0 end-0 w-100 h-100" style={{background: 'linear-gradient(135deg, rgba(13, 110, 253, 0.05) 0%, rgba(13, 110, 253, 0.1) 100%)'}}></div>
                            <div className="d-flex align-items-start position-relative">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '3rem', height: '3rem'}}>
                                        <i className="mdi mdi-eye text-white fs-5"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="text-dark mb-2 fw-semibold">{t('about.vision.title')}</h5>
                                    <p className="text-muted mb-0 lh-lg">{t('about.vision.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mission - Left aligned */}
                    <div className="col-lg-8 col-md-10">
                        <div className="card border-0 shadow-sm rounded-3 p-4 h-100 position-relative overflow-hidden">
                            <div className="position-absolute top-0 end-0 w-100 h-100" style={{background: 'linear-gradient(135deg, rgba(25, 135, 84, 0.05) 0%, rgba(25, 135, 84, 0.1) 100%)'}}></div>
                            <div className="d-flex align-items-start position-relative">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm bg-success bg-gradient rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '3rem', height: '3rem'}}>
                                        <i className="mdi mdi-target text-white fs-5"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="text-dark mb-2 fw-semibold">{t('about.mission.title')}</h5>
                                    <p className="text-muted mb-0 lh-lg">{t('about.mission.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Why Afira - Right aligned */}
                    <div className="col-lg-8 col-md-10 offset-lg-4 offset-md-2">
                        <div className="card border-0 shadow-sm rounded-3 p-4 h-100 position-relative overflow-hidden">
                            <div className="position-absolute top-0 end-0 w-100 h-100" style={{background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.05) 0%, rgba(255, 193, 7, 0.1) 100%)'}}></div>
                            <div className="d-flex align-items-start position-relative">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm bg-warning bg-gradient rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{width: '3rem', height: '3rem'}}>
                                        <i className="mdi mdi-heart text-white fs-5"></i>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="text-dark mb-2 fw-semibold">{t('about.whyAfira.title')}</h5>
                                    <p className="text-muted mb-0 lh-lg">{t('about.whyAfira.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <h1 className="mb-16 text-center">{t('about.impact.title')}</h1>
                <div className="row justify-content-center mt-8 align-items-stretch">
                    {aboutData.map((item, index) =>{
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                            <div className="card shadow p-4 rounded features features-classic feature-primary h-100 d-flex flex-column">
                                <div className="content my-3 border-bottom flex-grow-1">
                                    <Link href="/services" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                                
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <Counter/>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
} 