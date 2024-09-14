import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebsiteDesignServices = () => {

  const serviceItems = [
    {
      iconSrc: "/assets/images/icons/web-design.png",
      title: "Website Designing",
      description:
        "Your website is your home on the internet (web). The Website Design is the first...",
    },
    {
      iconSrc: "/assets/images/icons/settings.png",
      title: "Custom Website Designing",
      description:
        "Using this one can start from just one simple page with an Email link, building...",
    },
    {
      iconSrc: "/assets/images/icons/responsive-website.png",
      title: "Responsive Website Designing",
      description:
        "Our web design uses the latest technology to look great on any screen sizes...",
    },
    {
      iconSrc: "/assets/images/icons/ecommerce-website.png",
      title: "E-commerce Website",
      description:
        "We develop affordable e-commerce website design for businesses in India, UK, USA, Australia ..",
    },
  ];

 
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
         
              {serviceItems.map((item, index) => (
                <div className="col-lg-6 WebsiteDesignServices" key={index}>
                  <Link href="#">
                    <div className="webDesignItem">
                      <div className="iconWe">
                        <Image
                          width={100}
                          height={100}
                          className="w-100 h-auto "
                          src={item.iconSrc}
                          alt={item.title}
                        />
                      </div>
                      <h4 className="fontHeading small_heading fontWeight600">
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                      <button>
                        <i className="fa fa-chevron-right"></i>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 ps-lg-4">
            <div className="rightServicesWeb">
        
              <Image
                width={350}
                height={350}
                quality={100}
                className=""

                src={"/assets/images/programming-amico.png"}
                alt="Writing Programme"
              />
              <h5 className="small_head  text_red mt-4">We're offering</h5>
              <h4 className="regular_heading fontWeight700 mt-2 fontHeading">
                Website Design Services
              </h4>
              <p className="mt-3">
                We use the latest technology and design innovations to develop
                creative, smart & user-friendly websites to successfully connect
                users with brands. Empower yourself with the best website design
                company in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesignServices;
