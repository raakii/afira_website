'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '../context/LanguageContext';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

export default function BlogTwo() {
    const { language } = useLanguage();
    const translations = language === 'en' ? enTranslations : frTranslations;

    return (
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h6 className="text-primary">{translations.blog.title}</h6>
                    <h4 className="title fw-semibold mt-2 mb-3">{translations.blog.subtitle}</h4>
                    <p className="text-muted para-desc mx-auto mb-0">{translations.blog.description}</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card blog blog-primary shadow rounded overflow-hidden">
                    <div className="image position-relative overflow-hidden">
                        <Image src='/images/busi02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                        <div className="blog-tag">
                            <Link href="#" className="badge text-bg-light">{translations.blog.posts.post3.category}</Link>
                        </div>
                    </div>

                    <div className="card-body content">
                        <Link href="/#" className="h5 title text-dark d-block mb-0">{translations.blog.posts.post3.title}</Link>
                        <p className="text-muted mt-2 mb-2">{translations.blog.posts.post3.description}</p>
                        <Link href="#" className="link text-dark">{translations.blog.posts.post3.readMore}</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card blog blog-primary shadow rounded overflow-hidden">
                    <div className="image position-relative overflow-hidden">
                        <Image src='/images/home.png' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                        <div className="blog-tag">
                            <Link href="#" className="badge text-bg-light">{translations.blog.posts.post2.category}</Link>
                        </div>
                    </div>

                    <div className="card-body content">
                        <Link href={`/${language}/education`} className="h5 title text-dark d-block mb-0">{translations.blog.posts.post2.title}</Link>
                        <p className="text-muted mt-3">{translations.blog.posts.post2.excerpt}</p>
                        <Link href={`/${language}/education`} className="link text-dark">{translations.blog.posts.post2.readMore}</Link>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card blog blog-primary shadow rounded overflow-hidden">
                    <div className="image position-relative overflow-hidden">
                        <Image src='/images/busi02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>

                        <div className="blog-tag">
                            <Link href="#" className="badge text-bg-light">{translations.blog.posts.post3.category}</Link>
                        </div>
                    </div>

                    <div className="card-body content">
                        <Link href="/#" className="h5 title text-dark d-block mb-0">{translations.blog.posts.post3.title}</Link>
                        <p className="text-muted mt-2 mb-2">{translations.blog.posts.post3.description}</p>
                        <Link href="#" className="link text-dark">{translations.blog.posts.post3.readMore}</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}