'use client'

import React from 'react';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HeroSlider() {
    return (
        <section className="home-slider position-relative">
            <Carousel 
                showArrows={false} 
                selectedItem={0} 
                infiniteLoop={true} 
                autoPlay={true} 
                interval={3000} 
                showStatus={false} 
                showThumbs={false}
            >
                <div>
                    <div className="bg-home d-flex align-items-center" style={{ backgroundImage: "url('/images/busi01.jpg')" }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">
                                            L’argent pour entreprendre, partout, pour tous
                                            
                                        </h1>
                        
                                        <p className="para-desc mx-auto text-white-50">
                                            Afira soutient les femmes, les jeunes et les travailleurs informels grâce à une microfinance inclusive et une éducation financière accessible.
                                            Nous contribuons à construire une génération autonome, responsable et prête à transformer sa réalité — une histoire à la fois.
                                        </p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/page-services" className="btn btn-primary">
                                                Voir Nos Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-home d-flex align-items-center" style={{ backgroundImage: "url('/images/busi02.jpg')" }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">
                                            La première plateforme nanocrédit 100% numérique en Afrique de l'Ouest.
                                        </h1>
                                        <p className="para-desc mx-auto text-white-50">
                                            Une solution simple d'accès au financement en un clic !
                                        </p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/page-services" className="btn btn-primary">
                                                Voir Nos Services
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-home d-flex align-items-center" style={{ backgroundImage: "url('/images/busi03.jpg')" }}>
                        <div className="bg-overlay bg-linear-gradient"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h1 className="fw-semibold display-3 text-white title-dark mb-4">
                                            Petit crédit. Grand impact. Zéro papier
                                        </h1>
                                        <p className="para-desc mx-auto text-white-50">
                                            Chaque projet est une histoire. Afira vous aide à l’écrire.
                                        </p>
                                        <div className="mt-4 pt-2">
                                            <Link href="/page-aboutus" className="btn btn-primary">
                                                Bénéficier
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
