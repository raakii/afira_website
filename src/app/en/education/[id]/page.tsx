'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import enTranslations from '@/translations/en.json';
import frTranslations from '@/translations/fr.json';
import NavbarTwo from "@/components/navbarTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";

const educationData = [
    {
        id: 1,
        title: {
            en: 'Budgeting Basics',
            fr: 'Les bases du budget'
        },
        desc: {
            en: 'Learn how to create and manage a personal budget.',
            fr: 'Apprenez à créer et gérer un budget personnel.'
        }
    },
    {
        id: 2,
        title: {
            en: 'Saving Strategies',
            fr: 'Stratégies d’épargne'
        },
        desc: {
            en: 'Discover effective ways to save money for your goals.',
            fr: 'Découvrez des moyens efficaces d’épargner pour vos objectifs.'
        }
    }
];

export default function EducationDetail({ params }: { params: { id: string } }) {
    const { language } = useLanguage();
    const lang = language === 'fr' ? 'fr' : 'en';
    const translations = lang === 'en' ? enTranslations : frTranslations;
    const id = parseInt(params.id);
    const data = educationData.find((item) => item.id === id);

    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false} />
            <section className="bg-half-80 d-table bg-primary bg-gradient w-100" style={{ backgroundImage: "url('/images/about-us.png')", backgroundPosition: 'center' }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row g-0 align-items-center mt-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="title-heading text-md-start text-center">
                                {data ? (
                                    <h5 className="heading fw-semibold page-heading text-white title-dark">{data.title[lang]}</h5>
                                ) : (
                                    <h5 className="heading fw-semibold page-heading text-white title-dark">Education Not Found</h5>
                                )}
                                <p className="text-white-50 mb-0">Financial Education</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                            <div className="text-md-end text-center">
                                <nav aria-label="breadcrumb" className="d-inline-block">
                                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                        <li className="breadcrumb-item"><Link href={`/${language}`}>Afira</Link></li>
                                        <li className="breadcrumb-item"><Link href={`/${language}/education`}>{translations.nav?.education || 'Education'}</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{data?.title[lang] || 'Education'}</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="section-title">
                                <Image src='/images/about-us.png' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded" alt="" />
                                <h4 className="mt-4">{data?.title[lang]}</h4>
                                <p className="text-muted mt-4">{data?.desc[lang]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterFour />
            <ScrollTop />
        </>
    )
}