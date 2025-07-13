'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ScrollTop(){
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
    }; 

    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', toggleVisible);
            
            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener('scroll', toggleVisible);
            };
        }
    }, []); // Empty dependency array means this effect runs once on mount
  
    return(
        <>
        <Link href="#" id="back-to-top" className="back-to-top rounded-pill fs-5" onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}></Link>
        </>
    )
}