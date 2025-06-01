import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../../../components/navbarTwo";
import Counter from "../../../components/counter";
import ClientTwo from "../../../components/ClientTwo";
import BlogOne from "../../../components/blogTwo";
import FooterFour from "../../../components/FooterFour";
import ScrollTop from "../../../components/ScrollTop";
import Tab from "../../../components/tab";

export default function Services(){

    const aboutData =[
        {
            id:1,
            icon : "",
            title:'1. Enregistrement & Onboarding',
            desc:'🎯 Créez votre compte et découvrez nos services\nRemplissez votre profil en quelques étapes simples. Accédez à une initiation interactive à la gestion financière et aux fonctionnalités de la plateforme' 
        },
        {
            id:2,
            icon :"",
            title:'2. Demande de Crédit',
            desc:'💸 Un microcrédit qui s’adapte à vous\nChoisissez le montant dont vous avez besoin, répondez à quelques questions, et recevez une réponse rapide grâce à notre système d’évaluation alternatif.' 
        },
        {
            id:3,
            icon :"",
            title:'3. Remboursement Flexible',
            desc:'📅 Gérez vos échéances à votre rythme\nSuivez votre échéancier, recevez des rappels et ajustez votre remboursement selon votre situation. Vous gardez le contrôle.' 
        },
        {
            id:4,
            icon :"",
            title:'4. Suivi & Support Client',
            desc:'🤝 Vous n’êtes jamais seul·e\nAccédez à nos mini-vidéos d’éducation financière, posez vos questions via chat ou appel, et bénéficiez d’un accompagnement humain et bienveillant.' 
        }
    ]

    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>

        <section className="bg-half-170 d-table w-100 h-32" style={{backgroundImage:"url('/images/about-us.png')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Nos Produits</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">La nanofinance 100 % mobile, 100 % pour vous.</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Produits</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    {aboutData.map((item)=>{
                        let Icon = item.icon
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-4" key={item.id}>
                            <div className="card border-0 p-4 text-center rounded features features-classic feature-primary">
                                <Icon/>
                                <div className="content">
                                    <Link href={`/services/${item.id}`} className="title text-dark h5">{item.title}</Link>

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
            <div className="py-5 position-relative" style={{backgroundImage:"url('/images/busi04.jpg')", backgroundPosition:'center'}}>
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