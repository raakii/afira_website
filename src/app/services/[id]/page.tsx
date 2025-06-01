// src/app/services/[id]/page.tsx
// Ce fichier est un composant côté serveur par défaut (sans "use client")
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarTwo from "../../../../components/navbarTwo";
import FooterSeven from "../../../../components/footerSeven";
import ScrollTop from "../../../../components/ScrollTop";
// Import du VideoModalWrapper directement ici
import VideoModalWrapper from "./video-modal-wrapper";

// Définition des données de services
const services = [
    {
        id: 1,
        title: '1. Enregistrement & Onboarding',
        desc: '🎯 Créez votre compte et découvrez nos services\nRemplissez votre profil en quelques étapes simples. Accédez à une initiation interactive à la gestion financière et aux fonctionnalités de la plateforme'
    },
    {
        id: 2,
        title: '2. Demande de Crédit',
        desc: '💸 Un microcrédit qui s\'adapte à vous\nChoisissez le montant dont vous avez besoin, répondez à quelques questions, et recevez une réponse rapide grâce à notre système d\'évaluation alternatif.'
    },
    {
        id: 3,
        title: '3. Remboursement Flexible',
        desc: '📅 Gérez vos échéances à votre rythme\nSuivez votre échéancier, recevez des rappels et ajustez votre remboursement selon votre situation. Vous gardez le contrôle.'
    },
    {
        id: 4,
        title: '4. Suivi & Support Client',
        desc: '🤝 Vous n\'êtes jamais seul·e\nAccédez à nos mini-vidéos d\'éducation financière, posez vos questions via chat ou appel, et bénéficiez d\'un accompagnement humain et bienveillant.'
    }
];

// Cette fonction s'exécute côté serveur à la compilation
export async function generateStaticParams() {
    return services.map(service => ({
        id: service.id.toString(),
    }));
}

// Définition des données de progression
const progressData = [
    {
        title: 'Research',
        progress: '84%'
    },
    {
        title: 'Sales & Trading',
        progress: '75%'
    },
    {
        title: 'Investment',
        progress: '79%'
    },
    {
        title: 'Finance',
        progress: '95%'
    },
];

// Le composant principal (server component) est maintenant async
export default async function SingleService({ params }: { params: { id: string } }) {
    // Attendre les paramètres (même si ce n'est pas une vraie attente, c'est nécessaire pour satisfaire Next.js)
    const id = parseInt(params.id);
    const data = services.find((service) => service.id === id);

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
                                    <h5 className="heading fw-semibold page-heading text-white title-dark">{data.title}</h5>
                                ) : (
                                    <h5 className="heading fw-semibold page-heading text-white title-dark">Service Not Found</h5>
                                )}
                                <p className="text-white-50 mb-0">Walking is the best possible exercise</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                            <div className="text-md-end text-center">
                                <nav aria-label="breadcrumb" className="d-inline-block">
                                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                        <li className="breadcrumb-item"><Link href="/">Starty</Link></li>
                                        <li className="breadcrumb-item"><Link href="#">Services</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Web Development</li>
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

                                <h4 className="mt-4">Preparing for your success with web development</h4>

                                <p className="text-muted mt-4">Web development is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>

                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>

                                <h5 className="mt-4">Features: </h5>

                                <ul className="list-unstyled text-muted mb-0">
                                    <li className="mb-0"><span className="text-primary h5 me-2"></span>Beautiful and easy to understand animations</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"></span>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-0"><span className="text-primary h5 me-2"></span>Theme advantages are pixel perfect design</li>
                                </ul>

                                <h5 className="mt-4">Ability: </h5>

                                {progressData.map((item, index) => {
                                    return(
                                        <div className="progress-box mt-4" key={index}>
                                            <h6 className="text-muted fw-normal">{item.title}</h6>
                                            <div className="progress position-relative">
                                                <div className="progress-bar position-relative bg-primary" style={{ width: item.progress }}></div>
                                                <div className="progress-value d-block text-muted h6 fw-normal">{item.progress}</div>
                                            </div>
                                        </div>
                                    )
                                })}

                                <h5 className="mt-4">Reviews: </h5>


                                <div className="bg-primary bg-gradient rounded shadow-lg px-4 py-5 mt-4">
                                    <div className="card text-center">
                                        <Image src='/images/about-us.png' width={110} height={110} className="avatar avatar-medium rounded-pill mx-auto" alt="" />

                                        <div className="card-body pb-0 content">
                                            <p className="h5 fw-normal text-white-50 fst-italic">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>

                                            <div className="name mt-4">
                                                <small className="text-uppercase text-light title-dark fw-semibold d-block">Johnny Rosario</small>
                                                <small className="text-white-50">C.E.O</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="sidebar sticky-bar">
                                <div className="widget text-center position-relative">
                                    <div className="rounded shadow bg-white">
                                        <div className="position-relative">
                                            <Image src='/images/about-us.png' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow" alt="" />
                                            <VideoModalWrapper />
                                        </div>
                                    </div>
                                </div>
                                <div className="widget mt-4 pt-2">
                                    <div className="rounded p-4 shadow bg-white">
                                        <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded text-center">Subscribe</h6>
                                        <form className="mt-4">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="foot-subscribe mb-3">
                                                        <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                        <input type="email" name="email" id="emailsubscribe" className="form-control rounded" placeholder="Your email : " required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary w-100" value="Subscribe" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterSeven />
            <ScrollTop />
        </>
    )
}