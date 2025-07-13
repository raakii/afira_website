'use client'
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLanguage } from '@/context/LanguageContext';

export default function ClientTwo() {
    const { translations, isLoading } = useLanguage();
    
    if (isLoading) return null;

    const clientData = translations.clients?.testimonials || [];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="testimonial-slider"
                    >
                        {clientData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="card client-testi text-center">
                                    <Image 
                                        src={item.image} 
                                        width={65} 
                                        height={65} 
                                        className="avatar avatar-small rounded-pill mx-auto" 
                                        alt=""
                                    />
                                    <div className="card-body pb-0 content">
                                        <p className="h5 fw-normal text-muted fst-italic">&ldquo;{item.desc}&rdquo;</p>
                                        <div className="name mt-4">
                                            <small className="text-uppercase fw-semibold d-block">{item.name}</small>
                                            <small className="text-muted">{item.title}</small>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}