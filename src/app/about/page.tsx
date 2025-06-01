import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../../../components/navbarTwo";
import ClientTwo from "../../../components/ClientTwo";
import Partners from "../../../components/partners";

import Counter from "../../../components/counter";
import FooterFour from "../../../components/FooterFour";
import ScrollTop from "../../../components/ScrollTop";
import { FiArrowRight, FiAirplay, LiaReact, FiUsers} from '../../../public/assets/icons/vander'
import aboutus1 from "../../../public/images/about-us.png";
import aboutus2 from "../../../public/images/about-us2.png";

export default function PageAboutUs(){

    const aboutData = [
        {
            title:'📚 ODD 4 – Éducation de qualité',
            desc:'Assurer l\'accès de tous à une éducation financière, inclusive et de qualité, et promouvoir des opportunités d\'apprentissage.'
        },
        {
            title:'👩🏽‍🤝‍👨🏾 ODD 5 – Égalité entre les sexes',
            desc:'Autonomiserles femmes et les filles en mettant un accent particulier sur l’autonomisation économique des jeunes femmes.'
        },
         {
            title:'💼 ODD 8 – Travail décent et croissance économique',
            desc:'Promouvoir une croissance économique soutenue, inclusive et durable, le plein emploi productif et un travail décent pour tous.'
        },
        {
            title:'🏘️ ODD 10 – Réduction des inégalités',
            desc:'Réduire les inégalités et les barrières d’accès aux services financiers pour les populations exclues.'
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
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Qui sommes nous?</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Catalyseur de croissance</h5>
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
                            <p className="text-muted">Chez Afira, nous croyons que l’inclusion financière est un levier puissant pour transformer des vies et bâtir un avenir durable.
Notre mission est de démocratiser l’accès aux services financiers et à l’éducation économique, en particulier pour celles et ceux que les systèmes traditionnels laissent souvent de côté : jeunes femmes, étudiants, travailleurs informels et entrepreneurs en devenir.

Nous combinons technologie mobile, microcrédit flexible et contenu éducatif accessible pour offrir à chacun·e les outils concrets vers l’autonomie financière.</p>
                            <ul className="list-unstyled text-muted mb-0">
                                <li className="mb-0"><span className="text-dark h5 me-2"></span>Notre vision : Un monde où chaque jeune femme, chaque étudiant, chaque travailleur informel peut accéder aux ressources nécessaires pour concrétiser ses idées, sortir de la précarité et devenir acteur de son avenir.</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"></span> Our Mission :
                                    L'accès ne suffit pas.
L'inclusion véritable signifie créer des solutions pour celles et ceux qui sont systématiquement oubliés :

les utilisateurs en zone rurale,

les femmes,

les communautés à faibles revenus.

Nous développons des services numériques inclusifs, qui sont :

Abordables,

Faciles à utiliser, même en cas de faible littératie numérique,

Disponibles dans les langues locales,

Pertinents pour les besoins quotidiens.

Ce n’est pas un problème de réseau.
C’est un enjeu humain.</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"></span>Pourquoi Afira :
La connectivité mobile est aujourd’hui un moteur essentiel de la transformation numérique et de la croissance socio-économique en Afrique subsaharienne.

Selon le rapport GSMA Mobile Economy 2024 :

« La technologie mobile contribue à l’ODD 4, qui vise à garantir une éducation de qualité, inclusive et équitable, et à promouvoir des possibilités d’apprentissage tout au long de la vie. »

« La transformation numérique rend les ressources éducatives plus accessibles, améliore les résultats scolaires et soutient l’apprentissage continu. »

Nous nous appuyons sur ces constats pour concevoir une plateforme qui renforce les capacités des communautés et génère un impact durable.
                                </li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <h1 className="mb-16 text-center">Our Impact</h1>
                <div className="row justify-content-center mt-8">
                    {aboutData.map((item, index) =>{
                        //let Icon = item.icon 
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
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