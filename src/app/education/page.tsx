import React from "react";
import Image from "next/image";
import Link from "next/link";

import NavbarTwo from "../../components/navbarTwo.js";
import BlogSidebar from "../../components/blogSidebar.js";
import FooterSeven from "../../components/footerSeven.js";
import ScrollTop from "../../components/scrollTop.js";

export default function GridSidebar(){

    const blogData =[
        {
            id:1,
            image:'/images/about-us.png',
            tag:'Corporate',
            title:'Building Your Corporate Identity from Starty',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'13th Sep 2023',
            client:'/images/about-us.png',
            name:'Cristino Murphy',
        },
        {
            id:2,
            image:'/images/about-us.png',
            tag:'Branding',
            title:'The Dark Side of Overnight Success',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'29th Nov 2023',
            client:'/images/about-us.png',
            name:'Florine Jackson',
        },
        {
            id:3,
            image:'/images/about-us.png',
            tag:'Technology',
            title:'The Right Hand of Business IT World',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'29th Dec 2023',
            client:'/images/about-us.png',
            name:'Ida Wild',
        },
        {
            id:4,
            image:'/images/about-us.png',
            tag:'Personal',
            title:'How to Create Your Own Viral Moments',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'13th March 2023',
            client:'/images/about-us.png',
            name:'Calvin Carlo',
        },
        {
            id:5,
            image:'/images/about-us.png',
            tag:'Business',
            title:'How to Write a Business Plan For Any Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'5th May 2023',
            client:'/images/about-us2.png',
            name:'Cristino Murphy',
        },
        {
            id:6,
            image:'/images/about-us.png',
            tag:'Marketing',
            title:'Seeing the Customer Journey More Clearly',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'19th June 2023',
            client:'/images/about-us2.png',
            name:'Florine Jackson',
        },
        {
            id:7,
            image:'/images/about-us.png',
            tag:'Production',
            title:'The Signs of a Highly Giftable Product',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'20th June 2023',
            client:'/images/about-us2.png',
            name:'Ida Wild',
        },
        {
            id:8,
            image:'/images/about-us.png',
            tag:'Business',
            title:'Defining Your Business Target Audience',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'31st Aug 2023',
            client:'/images/about-us2.png',
            name:'Calvin Carlo',
        },
        {
            id:9,
            image:'/images/about-us.png',
            tag:'Corporate',
            title:'Running Out of Time & Ideas? Visit Our Blog',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.",
            date:'1st Sep 2023',
            client:'/images/about-us2.png',
            name:'Cristino Murphy',
        },
        
    ]

    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right" navDark={false}/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:"url('/images/about-us.png')", backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Blog & News</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Grid Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            {blogData.slice(0,8).map((item,index)=>{
                                return(
                                    <div className="col-lg-6 mb-4 pb-2" key={index}>
                                        <div className="card blog blog-primary shadow rounded overflow-hidden">
                                            <div className="image position-relative overflow-hidden">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link href={`/education/${item.id}`} className="badge text-bg-light">{item.tag}</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link href={`/education/${item.id}`} className="h5 title text-dark d-block mb-0">The Right Hand of Business IT World</Link>
                                                <p className="text-muted mt-2 mb-2">The most well-known dummy text is the Lorem Ipsum, in the 16th century.</p>
                                                <Link href={`/education/${item.id}`} className="link text-dark">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
        
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <BlogSidebar search={true}/>
                    </div>
                </div>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}