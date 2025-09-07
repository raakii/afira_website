'use client'
import React from "react"

import CountUp from 'react-countup';

export default function Counter(){

    const counterData = [
        {
            start:'0',
            end:' 40',
            title:'% d\'adultes africains possédent un compte de mobile money en 2024'
        },
        {
            start:'0',
            end:'32',
            title:'% des adultes ont emprunté via un opérateur mobile'
        },
        {
            start:'0',
            end:'90',
            title:'abonnements mobiles par 100 personnes'
        },
        {
            start:'0',
            end:'26',
            title:'% Progression de l\'encours de monnaie électronique'
        },
    ]

    return(
    <div className="container mt-100 mt-60">
        <div className="row">
            {counterData.map((item,index)=>{
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