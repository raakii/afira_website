import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FooterSeven(){
    return(
        <footer className="footer bg-primary">            
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <Link href="#" className="logo-footer">
                                    <Image src='/images/logo-light.png' width={95} height={95} alt=""/>
                                </Link>
                                <p className="mt-4">Start working with Starty that can provide everything you.</p>
                                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                    <li className="list-inline-item"><Link href="https://1.envato.market/starty-next" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="https://dribbble.com/shreethemes" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="https://www.behance.net/shreethemes" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="https://twitter.com/shreethemes" target="_blank" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="mailto:support@shreethemes.in" className="rounded"></Link></li>
                                    <li className="list-inline-item"><Link href="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-8 col-12">
                                <div className="row">
                                    <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <h6 className="footer-head">Company</h6>
                                        <ul className="list-unstyled footer-list mt-4">
                                            <li><Link href="/page-aboutus" className="text-foot d-flex align-items-center"> About us</Link></li>
                                            <li><Link href="/page-services-two" className="text-foot d-flex align-items-center"> Services</Link></li>
                                            <li><Link href="/page-team" className="text-foot d-flex align-items-center"> Team</Link></li>
                                            <li><Link href="/page-pricing" className="text-foot d-flex align-items-center"> Pricing</Link></li>
                                            <li><Link href="/portfolio-detail-four" className="text-foot d-flex align-items-center"> Project</Link></li>
                                            <li><Link href="/#" className="text-foot d-flex align-items-center"> Blog</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <h6 className="footer-head">Usefull Links</h6>
                                        <ul className="list-unstyled footer-list mt-4">
                                            <li><Link href="/" className="text-foot d-flex align-items-center"> Terms of Services</Link></li>
                                            <li><Link href="/" className="text-foot d-flex align-items-center"> Privacy Policy</Link></li>
                                            <li><Link href="/page-contact" className="text-foot d-flex align-items-center"> Contact Us</Link></li>
                                            <li><Link href="/" className="text-foot d-flex align-items-center"> Changelog</Link></li>
                                            <li><Link href="/components" className="text-foot d-flex align-items-center">Components</Link></li>
                                        </ul>
                                    </div>
    
                                    <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <h6 className="footer-head">Resources</h6>
                                        <ul className="list-unstyled footer-list mt-4">
                                            <li><Link href="/page-faqs" className="text-foot d-flex align-items-center"> Theme guide</Link></li>
                                            <li><Link href="/page-faqs" className="text-foot d-flex align-items-center"> Support desk</Link></li>
                                            <li><Link href="/page-services" className="text-foot d-flex align-items-center"> What we offer</Link></li>
                                            <li><Link href="/page-aboutus" className="text-foot d-flex align-items-center"> Company history</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-py-30 footer-bar bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <p className="mb-0 text-muted">{new Date().getFullYear()} © Copyright Afira <i className="mdi mdi-heart text-danger"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}