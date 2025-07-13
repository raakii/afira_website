'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import NavbarTwo from "@/components/navbarTwo.js";
import BlogSidebar from "@/components/blogSidebar.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";
import type { BlogDataItem } from '@/types/translations';

export default function EducationArticle() {
    const params = useParams();
    const { t, isLoading, translations } = useLanguage();
    
    if (isLoading) return null;

    const articleId = parseInt(params.id as string);
    const blogData: BlogDataItem[] = translations.education?.blogData || [];
    const currentArticle = blogData.find((article) => article.id === articleId);

    // If article not found, show 404 or redirect
    if (!currentArticle) {
        return (
            <>
                <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right" navDark={false}/>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h4>{t('education.article.notFound.title')}</h4>
                                <p className="text-muted">{t('education.article.notFound.description')}</p>
                                <Link href="/education" className="btn btn-primary">{t('education.article.notFound.backButton')}</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterFour/>
                <ScrollTop/>
            </>
        );
    }

    // Get related articles (exclude current article)
    const relatedArticles: BlogDataItem[] = blogData
        .filter((article) => article.id !== articleId)
        .slice(0, 3);

    // Find the matching article in articles by title
    const articleDetails = translations.education?.articles?.find(
        (a) => a.title === currentArticle.title
    );

    return (
        <>
            <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right" navDark={false}/>
            
            {/* Hero Section */}
            <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/about-us.png')", backgroundPosition:'center'}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">{currentArticle.tag}</small>
                                <h5 className="heading fw-semibold page-heading text-white title-dark">{currentArticle.title}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Afira</Link></li>
                                <li className="breadcrumb-item"><Link href="/education">{t('education.header.breadcrumb')}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{currentArticle.title}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="card blog blog-detail border-0 shadow rounded">
                                <div className="image position-relative overflow-hidden">
                                    <Image 
                                        src={currentArticle.image} 
                                        width={0} 
                                        height={0} 
                                        sizes="100vw" 
                                        style={{width:'100%', height:'auto'}} 
                                        className="img-fluid" 
                                        alt={currentArticle.title}
                                    />
                                    <div className="blog-tag">
                                        <span className="badge text-bg-light">{currentArticle.tag}</span>
                                    </div>
                                </div>

                                <div className="card-body content p-4">
                                    <h4 className="card-title mb-3">{currentArticle.title}</h4>
                                    <p className="text-muted mb-4">{currentArticle.desc}</p>
                                    
                                    {/* Article Content - You can expand this with more detailed content */}
                                    <div className="article-content">
                                        <p className="text-muted">
                                            {currentArticle.desc} This comprehensive guide will help you understand the fundamentals and practical applications of this important financial concept.
                                        </p>
                                        
                                        <h5 className="mt-4 mb-3">{t('education.article.keyPoints')}:</h5>
                                        <ul className="list-unstyled text-muted">
                                            {articleDetails?.tips?.map((point, index) => (
                                                <li key={index} className="mb-2">• {point}</li>
                                            ))}
                                        </ul>
                                        
                                        <p className="text-muted mt-4">
                                            {t('education.article.conclusion')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Articles */}
                            {relatedArticles.length > 0 && (
                                <div className="mt-5">
                                    <h4 className="mb-4">{t('education.article.relatedArticles')}</h4>
                                    <div className="row">
                                        {relatedArticles.map((article, index) => (
                                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                                    <div className="image position-relative overflow-hidden">
                                                        <Image 
                                                            src={article.image} 
                                                            width={0} 
                                                            height={0} 
                                                            sizes="100vw" 
                                                            style={{width:'100%', height:'auto'}} 
                                                            className="img-fluid" 
                                                            alt={article.title}
                                                        />
                                                        <div className="blog-tag">
                                                            <Link href={`/education/${article.id}`} className="badge text-bg-light">{article.tag}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="card-body content">
                                                        <Link href={`/education/${article.id}`} className="h5 title text-dark d-block mb-0">{article.title}</Link>
                                                        <p className="text-muted mt-2 mb-2">{article.desc}</p>
                                                        <Link href={`/education/${article.id}`} className="link text-dark">{t('education.blog.readMore')}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <BlogSidebar search={true}/>
                        </div>
                    </div>
                </div>
            </section>

            <FooterFour/>
            <ScrollTop/>
        </>
    );
} 