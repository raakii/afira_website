'use client'
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Tab(){

    const tabData = [
        {
            id:1,
            image:'/images/about-us2.png',
            tag:'Finance',
            title:'Developing strategy for startup business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id:2,
            image:'/images/about-us2.png',
            tag:'Technologie',
            title:'How to Get a Successful Ad for Your Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id:3,
            image:'/images/about-us2.png',
            tag:'Education',
            title:'How to Get a Successful Ad for Your Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
    ]

    let [activeIndex, setActiveIndex] = useState(1);
    return(
        <div className="row align-items-center w-[50%] mx-auto">
            <div className="col-lg-4">
                <ul className="nav nav-pills nav-justified flex-column bg-transparent mb-0" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded shadow`} href="#" scroll={false} onClick={() => setActiveIndex(1)}>
                            <div className="text-start p-4">
                                <h5>Inclusion financière ciblée</h5>
                                <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-4 pt-2">
                        <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded shadow`} href="#" scroll={false} onClick={() => setActiveIndex(2)}>
                            <div className="text-start p-4">
                                <h5>Technologie mobile accessible</h5>
                                <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item mt-4 pt-2">
                        <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded shadow`} href="#" scroll={false} onClick={() => setActiveIndex(3)}>
                            <div className="text-start p-4">
                                <h5>Éducation économique intégrée</h5>
                                <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-lg-8 mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="tab-content">
                    {tabData.map((item, index)=>{
                        return(
                        <div className={`${item.id === activeIndex ? 'show active' :''} tab-pane fade`} key={index}>
                            <div className="card blog blog-image blog-primary shadow rounded overflow-hidden">
                                <div className="card-img">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:"auto"}} className="img-fluid" alt=""/>
                                    <div className="card-overlay"></div>

                                    <div className="position-absolute top-0 start-0 mt-3 ms-4">
                                        <Link href="#" className="badge text-bg-light">{item.tag}</Link>
                                    </div>
                                </div>
                                <div className="content px-4">
                                    <Link href="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">{item.title}</Link>

                                    <div className="d-flex author align-items-center mt-3">
                                        <p className="para-desc text-white-50 mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}