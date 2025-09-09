'use client'
import React from "react"
import CountUp from 'react-countup';
import { useLanguage } from '../context/LanguageContext';

export default function Counter(){
    const { translations, isLoading, t} = useLanguage();
    
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
        <div className="row">
            {finalData.map((item,index)=>{
                return(
                <div className="col-md-3 col-6 mb-4" key={index}>
                    <div className="counter-box text-center p-4">
                        <h2 className="mb-3 display-1 fw-bold title-dark opacity-05"><CountUp start={item.start} end={item.end}/></h2>
                        <p className="counter-head fw-semibold title-dark mb-0" style={{lineHeight: '1.4', fontSize: '14px'}}>{item.title}</p>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
    )
}