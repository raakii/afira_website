'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext';
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';

export default function NavbarTwo({navClass,manuClass,navDark}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    let [manu , setManu] = useState('');
    let pathname = usePathname();
    const { language, setLanguage } = useLanguage();
    const translations = language === 'en' ? enTranslations : frTranslations;

    useEffect(() => {
        setManu(pathname)
        function scrollHandler() {
            setScroll(window.scrollY > 50)
          }
          if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
            window.scrollTo(0, 0);
          }
          return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
      }, [pathname]);

    // Fix mobile scrolling issue
    useEffect(() => {
        if (typeof window !== "undefined") {
            const navbar = document.getElementById("topnav");
            if (navbar) {
                // Add touch-action to allow scrolling through the navbar
                navbar.style.touchAction = "pan-y";
                navbar.style.pointerEvents = "auto";
                
                // Ensure the navbar doesn't block scroll events
                navbar.addEventListener('touchstart', (e) => {
                    // Allow touch events to pass through to content below
                    e.stopPropagation();
                }, { passive: true });
            }
        }
    }, []);

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };

    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`} style={{ 
            touchAction: "pan-y",
            pointerEvents: "auto"
         }}>
            <div className="container">
                {navDark === true ?  
                <Link className="logo" href="/">
                    <Image src='/images/logo-light.png' width={110} height={30} className="logo-light-mode" alt=""/>
                    <Image src='/images/logo-light.png' width={110} height={30} className="logo-dark-mode" alt=""/>
                </Link> :
                <Link className="logo" href="/">
                    <span className="logo-light-mode">
                        <Image src='/images/logo-light.png' width={110} height={110} className="l-dark" alt=""/>
                        <Image src='/images/logo-light.png' width={110} height={110} className="l-light" alt=""/>
                    </span>
                    <Image src='/images/logo-light.png' width={110} height={30} className="logo-dark-mode" alt=""/>
                </Link>
                }
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={manuClass}>
                        <li className="/index-business">
                            <Link href="/about">{translations.nav.about}</Link><span className="menu-arrow"></span>
                        </li>

                        <li className={` has-submenu parent-menu-item`}>
                            <Link href="/services">{translations.nav.services}</Link><span className="menu-arrow"></span>
                        </li>
        
                        <li className="/page-services">
                            <Link href="/education">{translations.nav.education}</Link><span className="menu-arrow"></span>
                        </li>

                        <li className={manu === "/page-contact" || "" ? "active" : ""}>
                            <Link href="/contact" className="sub-menu-item">{translations.nav.contact}</Link>
                        </li>

                        <li>
                            <button 
                                onClick={() => {
                                    const scrollY = window.scrollY;
                                    setLanguage(language === 'en' ? 'fr' : 'en');
                                    setTimeout(() => {
                                        window.scrollTo(0, scrollY);
                                    }, 0);
                                }}
                                className="btn btn-primary"
                                style={{ marginLeft: '10px', marginTop: '15px' }}
                            >
                                {language === 'en' ? 'FR' : 'EN'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}