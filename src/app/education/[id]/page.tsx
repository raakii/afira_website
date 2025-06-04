// src/app/education/[id]/page.tsx
// Ce fichier est un composant côté serveur par défaut (sans "use client")
import React from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarTwo from "../../../components/navbarTwo.js";
import FooterSeven from "../../../components/footerSeven.js";
import ScrollTop from "../../../components/scrollTop.js";

// Importation directe des wrappers client
import VideoModalWrapper from "./video-modal-wrapper";
import CommentsWrapper from "./comments-wrapper";

// Données d'éducation
const educationData = [
    {
        id: 1,
        image: '/images/about-us.png',
        tag: 'Corporate',
        title: 'Building Your Corporate Identity from Starty',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '13th Sep 2023',
        client: '/images/about-us.png',
        name: 'Cristino Murphy',
    },
    {
        id: 2,
        image: '/images/about-us.png',
        tag: 'Branding',
        title: 'The Dark Side of Overnight Success',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '29th Nov 2023',
        client: '/images/about-us.png',
        name: 'Florine Jackson',
    },
    {
        id: 3,
        image: '/images/about-us.png',
        tag: 'Technology',
        title: 'The Right Hand of Business IT World',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '29th Dec 2023',
        client: '/images/about-us.png',
        name: 'Ida Wild',
    },
    {
        id: 4,
        image: '/images/about-us.png',
        tag: 'Personal',
        title: 'How to Create Your Own Viral Moments',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '13th March 2023',
        client: '/images/about-us.png',
        name: 'Calvin Carlo',
    },
    {
        id: 5,
        image: '/images/about-us.png',
        tag: 'Business',
        title: 'How to Write a Business Plan For Any Business',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '5th May 2023',
        client: '/images/about-us2.png',
        name: 'Cristino Murphy',
    },
    {
        id: 6,
        image: '/images/about-us.png',
        tag: 'Marketing',
        title: 'Seeing the Customer Journey More Clearly',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '19th June 2023',
        client: '/images/about-us2.png',
        name: 'Florine Jackson',
    },
    {
        id: 7,
        image: '/images/about-us.png',
        tag: 'Production',
        title: 'The Signs of a Highly Giftable Product',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '20th June 2023',
        client: '/images/about-us2.png',
        name: 'Ida Wild',
    },
    {
        id: 8,
        image: '/images/about-us.png',
        tag: 'Business',
        title: 'Defining Your Business Target Audience',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '31st Aug 2023',
        client: '/images/about-us2.png',
        name: 'Calvin Carlo',
    },
    {
        id: 9,
        image: '/images/about-us.png',
        tag: 'Corporate',
        title: 'Running Out of Time & Ideas? Visit Our Blog',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
        date: '1st Sep 2023',
        client: '/images/about-us2.png',
        name: 'Cristino Murphy',
    },
];

// Cette fonction s'exécute côté serveur à la compilation
export async function generateStaticParams() {
    return educationData.map((item) => ({
        id: item.id.toString(),
    }));
}

// Le composant principal (server component) est maintenant async
export default async function BlogDetailTwo({ params }: { params: { id: string } }) {
    // Recherche de l'éducation correspondante
    const id = parseInt(params.id);
    const data = educationData.find((blog) => blog.id === id);

    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true} />
            <section className="bg-half-170 bg-light bg-gradient">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="title-heading">
                                <h4 className="heading fw-semibold">{data?.title}</h4>

                                <div className="d-flex mt-4 pb-4 align-items-center justify-content-between">
                                    <div className="d-flex author align-items-center">
                                        <Image src={data?.client || "/images/about-us.png"} width={45} height={45} className="avatar avatar-md-sm rounded-pill" alt="" />
                                        <div className="ms-2">
                                            <h6 className="user d-block mb-0"><Link href="#" className="text-dark">{data?.name}</Link></h6>
                                            <small className="date text-muted mb-0">Content Writer</small>
                                        </div>
                                    </div>

                                    <div>
                                        <Link href="#" className="btn btn-primary">Follow</Link>
                                    </div>
                                </div>

                                <ul className="list-inline d-flex pt-4 mb-0 border-top justify-content-between">
                                    <li className="list-inline-item text-muted h6">{data?.date}</li>
                                    <li className="list-inline-item text-muted h6">10 min read</li>
                                </ul>
                            </div>

                            <div className="mt-5">
                                <Image src={data?.image || "/images/about-us.png"} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow" alt="" />
                            </div>

                            <div className="mt-5">
                                <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                                <p className="text-muted">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                                <p className="text-muted">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence Lorem ipsum.</p>
                                <p className="text-muted">Fortunately, the phrase Lorem Ipsum is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>

                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                            </div>

                            <div className="row align-items-center mt-5">
                                <div className="col-md-5">
                                    <div className="position-relative">
                                        <Image src="/images/about-us.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid rounded shadow" alt="" />
                                        {/* Utilisation du wrapper VideoModal */}
                                        <VideoModalWrapper />
                                    </div>
                                </div>

                                <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div className="ms-lg-4">
                                        <p className="text-muted"><span className="dropcaps display-4 text-primary me-2">T</span>he most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                                        <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card shadow rounded border-0 mt-4">
                                <CommentsWrapper />
                            </div>

                            <div className="card shadow rounded border-0 mt-4">
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Leave A Comment :</h5>

                                    <form className="mt-5">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Comment</label>
                                                    <textarea id="message" placeholder="Your Comment" rows={5} name="message" className="form-control" required></textarea>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Name <span className="text-danger">*</span></label>
                                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input id="email" type="email" placeholder="Email" name="email" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="send d-grid">
                                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="card shadow rounded border-0 mt-4">
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Related News :</h5>

                                    <div className="row">
                                        {educationData.slice(0, 2).map((item, index) => {
                                            return (
                                                <div className="col-md-6 mt-4 pt-2" key={index}>
                                                    <div className="card blog blog-primary shadow rounded overflow-hidden">
                                                        <div className="image position-relative overflow-hidden">
                                                            <Image src={item.image} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="img-fluid" alt="" />

                                                            <div className="blog-tag">
                                                                <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                                            </div>
                                                        </div>

                                                        <div className="card-body content">
                                                            <Link href={`/education/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                            <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                                            <Link href={`/education/${item.id}`} className="link text-dark">Read More </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
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