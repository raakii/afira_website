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
        title:'Why it matters ?',
        desc:'Bridging the Digital Divide. \nWhile urban centers surge ahead with 5G, apps, and AI, rural communities remain digitally invisible — locked out by high costs, low digital literacy, and a lack of relevant services. \nThis is not just a network issue. It\’s a human issue.'
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
                                            Mobile connectivity drives digital transformation in Sub-Saharan Africa.
                                        </li>
                                        <li>
                                            Inclusion means affordable devices, local content, and digital literacy.
                                        </li>
                                    </ul>
                                    
                                       
                                </div>
                            </div>
                            )
                        })}
                        <div className="card features feature-primary">
                            <Link href="/page-single-service" className="h5 title text-dark">We are changing that</Link>
                            <p className="text-muted mt-2 mb-0">Our platform supports inclusive, affordable, and locally relevant mobile solutions to accelerate digital transformation across Sub-Saharan Africa.</p>
                       </div> 
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