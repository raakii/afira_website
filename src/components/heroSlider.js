'use client'

import React from 'react';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useLanguage } from '../context/LanguageContext';
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

export default function HeroSlider() {
    const { language } = useLanguage();
    const translations = language === 'en' ? enTranslations : frTranslations;

    return (
        <section className="home-slider position-relative" style={{ 
            touchAction: "pan-y",
            pointerEvents: "auto"
        }}>
            <Carousel 
                showArrows={false} 
                selectedItem={0} 
                infiniteLoop={true} 
                autoPlay={true} 
                interval={3000} 
                showStatus={false} 
                showThumbs={false}
                swipeable={false}
                emulateTouch={false}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
                style={{
                    touchAction: "pan-y",
                    pointerEvents: "auto"
                }}
            >
                <div style={{ touchAction: "pan-y" }}>
                    <div className="bg-home d-flex align-items-center" style={{ 
                        backgroundImage: "url('/images/busi01.jpg')",
                        touchAction: "pan-y"
                    }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">
                                            {translations.hero.slide1.title}
                                        </h1>
                        
                                        <p className="para-desc mx-auto text-white-50">
                                            {translations.hero.slide1.description}
                                        </p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/services" className="btn btn-primary">
                                                {translations.hero.slide1.button}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ touchAction: "pan-y" }}>
                    <div className="bg-home d-flex align-items-center" style={{ 
                        backgroundImage: "url('/images/busi02.jpg')",
                        touchAction: "pan-y"
                    }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">
                                            {translations.hero.slide2.title}
                                        </h1>
                                        <p className="para-desc mx-auto text-white-50">
                                            {translations.hero.slide2.description}
                                        </p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/services" className="btn btn-primary">
                                                {translations.hero.slide2.button}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ touchAction: "pan-y" }}>
                    <div className="bg-home d-flex align-items-center" style={{ 
                        backgroundImage: "url('/images/busi03.jpg')",
                        touchAction: "pan-y"
                    }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">
                                            {translations.hero.slide3.title}
                                        </h1>
                                        <p className="para-desc mx-auto text-white-50">
                                            {translations.hero.slide3.description}
                                        </p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/about" className="btn btn-primary">
                                                {translations.hero.slide3.button}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}
