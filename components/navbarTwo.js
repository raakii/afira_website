'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import {LuSearch, BiBriefcaseAlt2,HiOutlinePresentationChartLine,AiOutlinePieChart,SiSimpleanalytics, BsPhone,FiAirplay,CgClapperBoard,ImLoop2,GiStamper,TbCoinBitcoin,RiCupLine,FiUser,ImImage,PiBracketsCurly,FiThumbsUp,TfiLayoutListThumb,AiOutlineShopping,LuBookMinus} from "../public/assets/icons/vander"


export default function NavbarTwo({navClass,manuClass,navDark}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    let [manu , setManu] = useState('');
    let pathname = usePathname();

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
      }, [setManu]);

     
        // Toggle menu
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
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`}>
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
                            <Link href="/about">A propos</Link><span className="menu-arrow"></span>
                        </li>

                        <li className={` has-submenu parent-menu-item`}>
                            <Link href="/services">Services</Link><span className="menu-arrow"></span>
                            {/* <ul className="submenu">
                                <li className={`${["/blog-grid","/blog-masonry", "/blog-list","/blog-grid-sidebar","/blog-masonry-sidebar","/blog-list-sidebar"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Service 1</Link>
                                    
                                </li>
                                <li className={`${["/blog-image-grid","/blog-image-masonry", "/blog-image-grid-sidebar","/blog-image-masonry-sidebar"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Service 2</Link>
                                
                                </li>
                                <li className={`${["/blog-detail-one","/blog-detail-two", "/blog-detail-three","/blog-detail-four","/blog-detail-five"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="#">Service 3</Link>
                                    
                                </li>
                            </ul> */}
                        </li>
        
                        <li className="/page-services">
                            <Link href="/education">education Financière</Link><span className="menu-arrow"></span>
                            {/* <ul className="submenu">
                                <li className={`${["/page-services","/page-services-two", "/page-single-service"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}><Link href="/asademy">Mini academy</Link><span className="submenu-arrow"></span> </li>
                            </ul> */}
                        </li>



                        <li className={manu === "/page-contact" || "" ? "active" : ""}><Link href="/contact" className="sub-menu-item">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}