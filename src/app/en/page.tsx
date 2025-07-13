'use client';

import Image from "next/image";
import HeroSlider from "@/components/heroSlider.js"; 
import NavbarTwo from "@/components/navbarTwo.js";  
import Cta from "@/components/cta.js";
import ClientTwo from "@/components/clientTwo.js";
import BlogTwo from "@/components/blogTwo.js";
import FooterFour from "@/components/footerFour.js";
import ScrollTop from "@/components/scrollTop.js";
import { useLanguage } from '@/context/LanguageContext';
import enTranslations from '@/translations/en.json';
import frTranslations from '@/translations/fr.json';
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : frTranslations;

  const aboutData = [
    {
        icon: (props: React.HTMLAttributes<HTMLElement>) => <i className="bi bi-credit-card" {...props}></i>,
        title: translations.home.whyItMatters,
        desc: translations.home.digitalDivideDesc
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
                            <Image src='/images/busi01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
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
                                    <Link href={`/${language}/services`} className="h5 title text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                   
                                </div>
                            </div>
                            )
                        })}
                        <div className="card features feature-primary">
                            <Link href={`/${language}/services`} className="h5 title text-dark">{translations.home.weAreChanging}</Link>
                            <p className="text-muted mt-2 mb-0">{translations.home.changingDesc}</p>
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
           <ClientTwo/>
            <div className="container mt-100 mt-60">
               <BlogTwo/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}