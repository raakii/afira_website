import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../../../components/navbarTwo";
import ClientTwo from "../../../components/ClientTwo";
import Partners from "../../../components/partners";

import Counter from "../../../components/counter";
import FooterFour from "../../../components/FooterFour";
import ScrollTop from "../../../components/ScrollTop";
import { AiOutlineCheckCircle, FiArrowRight, FiAirplay, LiaReact, FiUsers} from '../../../public/assets/icons/vander'
import aboutus1 from "../../../public/images/about-us.png";
import aboutus2 from "../../../public/images/about-us2.png";

export default function PageAboutUs(){

    const aboutData = [
        {
            title:'🛍️ Petits commerçants et vendeurs de rue',
            desc:'Des étals de marché aux rues animées, ces commerçants sont le moteur de l’économie locale.\nLeur besoin ? Un fonds de roulement pour acheter du stock.\nAfira apporte : Un microcrédit rapide, accessible même avec un téléphone basique.'
        },
        {
            title:'🛵 Chauffeurs de taxis et moto-taxis',
            desc:'Ils sillonnent les villes chaque jour pour gagner leur vie.\nLeur besoin ? Entretenir leur véhicule, payer du carburant, ou acheter une nouvelle moto.\nAfira apporte : Un soutien ciblé, en lien avec leurs revenus journaliers et leurs réalités de terrain.'
        },
        {
            title:'🌱 Petits agriculteurs & agripreneurs',
            desc:'En zones rurales ou périurbaines, ils nourrissent nos communautés.\nLeur besoin ? Acheter des semences, du matériel ou de l’engrais.\nAfira apporte : Une solution adaptée, accessible même sans smartphone, via USSD ou SMS.'
        },
         {
            title:'👩🏽‍🧺 Femmes commerçantes et groupes d’épargne',
            desc:'Elles gèrent un commerce, une boutique, ou font partie d’une tontine.\nLeur besoin ? Un petit coup de pouce pour avancer sans dépendre des banques.\nAfira apporte : Une solution fiable et humaine, avec des conditions justes et transparentes.'
        },
         {
            title:'📲 Jeunes entrepreneurs du digital',
            desc:'Ils vendent sur WhatsApp, Instagram ou Jumia, et font bouger l’économie informelle.\nLeur besoin ? Gérer les commandes, payer un fournisseur, acheter du stock.\nAfira apporte : Une expérience 100 % mobile, fluide et pensée pour leur quotidien connecté.'
        },
         {
            title:'🧱 Travailleurs journaliers ou saisonniers',
            desc:'Maçons, aides, domestiques… Ils vivent au jour le jour.\nLeur besoin ? Répondre à une urgence : santé, transport, outils.\nAfira apporte : Un appui immédiat, pour surmonter les imprévus sans s’endetter lourdement.'
        },
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
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Qui sommes nous?</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">About Our Company</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link href="/">Afira</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src={aboutus2} width={0} height={0} sizes="100vw" style={{width:'100%',height:'auto' }} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-3">Nous vous accompagnons dans la réalisation de vos projets!</h4>
                            <p className="text-muted">Chez Afira, nous croyons que l’inclusion financière est un levier puissant pour transformer des vies. Notre mission est de démocratiser l’accès aux services financiers et à l’éducation économique pour les populations souvent oubliées par les systèmes traditionnels : jeunes femmes, étudiants, travailleurs informels, et entrepreneurs en devenir.

Nous combinons technologie mobile, microcrédit flexible et contenu éducatif accessible pour offrir à chacun.e les outils nécessaires pour bâtir une autonomie financière durable.</p>
                            <ul className="list-unstyled text-muted mb-0">
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Notre vision : Un monde où chaque jeune femme, chaque étudiant ou travailleur informel peut accéder aux ressources pour concrétiser ses idées et sortir de la précarité.</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Nos valeurs : Inclusion – Confiance – Autonomie – Innovation</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    {aboutData.map((item, index) =>{
                        //let Icon = item.icon 
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                            <div className="card shadow p-4 rounded features features-classic feature-primary">
                                {/* <Icon className="h1 mb-0 text-primary"/> */}

                                <div className="content my-3 border-bottom">
                                    <Link href="/page-single-service" className="title h5 text-dark">{item.title}</Link>

                                    <p className="text-muted mt-3">{item.desc}</p>
                                </div>

                                <Link href="/page-single-service" className="d-flex align-items-center justify-content-between">
                                    <span className="fw-medium text-dark">Read More</span>
                                   <FiArrowRight/>
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

            {/* <div className="container mt-5">
                <Partners/>
            </div> */}

            <Counter/>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}