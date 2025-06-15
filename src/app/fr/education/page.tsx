import React from "react";
import Link from "next/link";

import NavbarTwo from "@/components/navbarTwo.js";
import BlogSidebar from "@/components/blogSidebar.js";
import FooterSeven from "@/components/footerSeven.js";
import ScrollTop from "@/components/scrollTop.js";

export default function Education(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>

        <section className="bg-half-170 d-table w-100 h-32" style={{backgroundImage:"url('/images/about-us.png')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Éducation Financière</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Apprenez à gérer vos finances</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Éducation</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="card blog blog-detail border-0 shadow rounded">
                            <div className="card-body p-4">
                                <h4 className="card-title">Les bases de la gestion financière</h4>
                                <p className="text-muted">Publié le 15 Mars 2024</p>
                                <p className="text-muted">La gestion financière est essentielle pour atteindre vos objectifs financiers. Voici quelques conseils pour bien démarrer :</p>
                                <ul className="list-unstyled text-muted">
                                    <li>✓ Créez un budget mensuel</li>
                                    <li>✓ Épargnez régulièrement</li>
                                    <li>✓ Suivez vos dépenses</li>
                                    <li>✓ Évitez les dettes inutiles</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card blog blog-detail border-0 shadow rounded mt-4">
                            <div className="card-body p-4">
                                <h4 className="card-title">Comment épargner efficacement</h4>
                                <p className="text-muted">Publié le 10 Mars 2024</p>
                                <p className="text-muted">L&apos;épargne est la clé de la sécurité financière. Découvrez nos stratégies pour épargner plus efficacement :</p>
                                <ul className="list-unstyled text-muted">
                                    <li>✓ Fixez-vous des objectifs d&apos;épargne</li>
                                    <li>✓ Automatisez vos versements</li>
                                    <li>✓ Réduisez vos dépenses non essentielles</li>
                                    <li>✓ Investissez intelligemment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <BlogSidebar search={true}/>
                    </div>
                </div>
            </div>
        </section>

        <FooterSeven/>
        <ScrollTop/>
        </>
    )
} 