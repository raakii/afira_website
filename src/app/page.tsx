import Image from "next/image";
import HeroSlider from "../../components/HeroSlider"; 
import NavbarTwo from "../../components/navbarTwo";  
import Cta from "../../components/Cta";
import ClientTwo from "../../components/ClientTwo";
import BlogTwo from "../../components/blogTwo";
import FooterFour from "../../components/FooterFour";
import ScrollTop from "../../components/ScrollTop";

import Link from "next/link";

export default function Home() {

  const aboutData = [
    {
        icon: (props: React.HTMLAttributes<HTMLElement>) => <i className="bi bi-credit-card" {...props}></i>,
        title:'Nanocrédit – Le coup de pouce pour démarrer',
        desc:'Un petit montant, un grand potentiel.\nLe Nanocrédit d’Afira est conçu pour celles et ceux qui ont une idée, un besoin urgent ou un projet à lancer — mais qui ne trouvent pas de solution dans les circuits financiers traditionnels.'
    }
]
  return(
    <>
    <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" navDark={false}/>
    <HeroSlider/>
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-6 order-1 order-md-2">
                    <div className="features-absoluteTwo">
                        <div className="position-relative">
                            <Image src='/images/busi01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded shadow" alt=""/>
                           
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 col-md-6 order-2 order-md-1">
                    <div className="row">
                        {aboutData.map((item,index)=>{
                            let Icon = item.icon
                            return(
                            <div className="col-lg-10 col-12 mb-4 pt-2" key={index}>
                                <div className="card features feature-primary">
                                    <Icon className="icon h1 d-block mb-3"/>
                                    <Link href="/page-single-service" className="h5 title text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    <ul>    
                                        <li>
                                            Montants accessibles dès 5 000 FCFA
                                        </li>
                                        <li>
                                            Remboursements flexibles, adaptés à votre rythme
                                        </li>
                                        <li>
                                            Accessible en quelques clics, sans paperasse inutile
                                        </li>
                                    </ul>
                                    <p className="text-muted mt-2 mb-0">Parce qu’un petit crédit peut changer toute une vie.

</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
        
        </div>
    </section>
    <Cta/>
        <section className="section">
           <ClientTwo/>
            <div className="container mt-100 mt-60">
               <BlogTwo/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}