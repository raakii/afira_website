'use client'
import { Parallax } from 'react-parallax';
import { useLanguage } from '../context/LanguageContext';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

export default function Cta() {
    const { language } = useLanguage();
    const translations = language === 'en' ? enTranslations : frTranslations;

    return (
        <section className="position-relative overflow-hidden w-100">
            <Parallax
                blur={{ min: 0, max: 0 }}
                bgImage='/images/busi04.jpg'
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{ with: "auto", height: "100%" }}
                style={{ position: "absolute", width: "100%", height: "100%" }}
            />
            <div className="bg-half-170">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2 text-white">
                                {translations.cta.mainText}
                            </div>
                            {/* <div className="play-icon">
                                <Link href="#" scroll={false} onClick={() => setOpen(true)} className="play-btn lightbox">
                                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                                </Link>
                            </div> */}
                           {/*  <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="yba7hPeTSjk"
                                onClose={() => setOpen(false)} 
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}