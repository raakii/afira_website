'use client';

import Image from "next/image";
import HeroSlider from "@/components/heroSlider.js"; 
import NavbarTwo from "@/components/navbarTwo.js";  
import Cta from "@/components/cta.js";
import BlogTwo from "@/components/blogTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";
import { useLanguage } from '@/context/LanguageContext';
import Link from "next/link";

export default function Home() {
  const { t, isLoading } = useLanguage();
  if (isLoading) return null;

  const aboutData = [
    {
        icon: (props: React.HTMLAttributes<HTMLElement>) => <i className="bi bi-credit-card" {...props}></i>,
        title: t('home.whyItMatters'),
        desc: t('home.digitalDivideDesc'),
        descUl1: t('home.digitalDivideDescUl1'),
        descUl2: t('home.digitalDivideDescUl2'),
        descUl3: t('home.digitalDivideDescUl3'),
        objectif: t('home.objectif'),
        changingDesc: t('home.changingDesc'),
    }
  ]

  return(
    <>
    <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>
    <HeroSlider/>
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 order-1 order-md-2">
                    <div className="">
                        <div className="position-relative">
                            <Image src='/images/femme2.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 order-2 order-md-1">
                    <div className="row">
                        {aboutData.map((item,index)=>{
                            const Icon = item.icon
                            return(
                            <div className="col-lg-10 col-12 mb-4 pt-2" key={index}>
                                <div className="card features feature-primary">
                                    <Icon className="icon h1 d-block mb-3"/>
                                    <Link href="/services" className="h5 title text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    <ul className="list-unstyled text-muted mb-0">
                                        <ol className="mb-0 bullet">{item.descUl1}</ol>
                                        <ol className="mb-0">{item.descUl2}</ol>
                                        <ol className="mb-0">{item.descUl3}</ol>
                                    </ul>
                                    <p className="text-muted mt-2 mb-0">{item.objectif}</p>
                                    <p className="text-muted mt-2 mb-0">{item.changingDesc}</p>
                                   
                                </div>
                            </div>
                            )
                        })}
                        <div className="card features feature-primary">
                       </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
        
        </div>
    </section>
    <Cta/>
        <section className="section">
           {/* <ClientTwo/> */}
            <div className="container mt-100 mt-60">
               <BlogTwo/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
} 