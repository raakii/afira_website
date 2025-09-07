'use client'
import React from "react"
import CountUp from 'react-countup';
import { useLanguage } from '../context/LanguageContext';

export default function Counter(){
    const { translations, isLoading, t, language } = useLanguage();
    
    if (isLoading) return null;
    
    const counterData = translations.counter?.stats || [];
    
    // Fallback: if no data from translations object, try using t() function
    const fallbackData = [
        {
            start: "0",
            end: "40",
            title: t('counter.stats.0.title') || "% of African adults own a mobile money account in 2024"
        },
        {
            start: "0", 
            end: "32",
            title: t('counter.stats.1.title') || "% of adults have borrowed via a mobile operator"
        },
        {
            start: "0",
            end: "90", 
            title: t('counter.stats.2.title') || "mobile subscriptions per 100 people"
        },
        {
            start: "0",
            end: "26",
            title: t('counter.stats.3.title') || "% Growth in electronic money outstanding"
        }
    ];
    
    const finalData = counterData.length > 0 ? counterData : fallbackData;

    return(
    <div className="container mt-100 mt-60">
        {/* Debug: Show current language */}
        <div style={{textAlign: 'center', marginBottom: '20px', fontSize: '12px', color: '#666'}}>
            Current language: {language} | Data loaded: {counterData.length > 0 ? 'Yes' : 'No'}
        </div>
        <div className="row">
            {finalData.map((item,index)=>{
                return(
                <div className="col-md-3 col-3" key={index}>
                    <div className="counter-box position-relative text-center">
                        <h2 className="mb-0 display-1 fw-bold title-dark mt-2 opacity-05"><CountUp start={item.start} end={item.end}/></h2>
                        <span className="counter-head fw-semibold title-dark position-absolute top-70 start-50 translate-middle">{item.title}</span>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
    )
}