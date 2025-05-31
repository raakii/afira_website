'use client'
import React from "react"

import CountUp from 'react-countup';

export default function Counter(){

    const counterData = [
        {
            start:'0',
            end:'5458',
            title:'Investment Projects'
        },
        {
            start:'0',
            end:'15',
            title:'Years of Experience'
        },
        {
            start:'0',
            end:'54',
            title:'Offices in the World'
        },
        {
            start:'0',
            end:'214',
            title:'Successful Cases'
        },
    ]

    return(
    <div className="container mt-100 mt-60">
        <div className="row">
            {counterData.map((item,index)=>{
                return(
                <div className="col-md-3 col-6" key={index}>
                    <div className="counter-box position-relative text-center">
                        <h2 className="mb-0 display-1 fw-bold title-dark mt-2 opacity-05"><CountUp start={item.start} end={item.end}/></h2>
                        <span className="counter-head fw-semibold title-dark position-absolute top-50 start-50 translate-middle">{item.title}</span>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
    )
}