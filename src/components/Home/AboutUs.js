import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const services = [
    {
      iconDefault: "/assets/images/icons/seo.png",
      iconBlue: "/assets/images/icons/seo-blue.png",
      title: "Digital Marketing Services",
      description:
        "We build custom software solutions that will help your business optimise operations.",
    },
    {
      iconDefault: "/assets/images/icons/web-programming.png",
      iconBlue: "/assets/images/icons/web-programming-blue.png",
      title: "Web Designing Services",
      description:
        "We build custom software solutions that will help your business optimise operations.",
    },
    {
      iconDefault: "/assets/images/icons/coding.png",
      iconBlue: "/assets/images/icons/coding-blue.png",
      title: "Web Development Services",
      description:
        "We build custom software solutions that will help your business optimise operations.",
    },
  ];

  return (
    <section className="bg1">
      <div className="containerFull">
        <div className="aboutCenter">
          <h3 className="heading fontHeading fontWeight600 text-center">
            About Us
          </h3>
          <h4 className="bgTitle">ABOUT Us</h4>
        </div>
        <div className="space"></div>
        <div className="row">
          <div className="col-lg-6">
            <div className="aboutLeftHome">
              <h3 className="sub_heading fontHeading fontWeight600 text_light_blue">
                What We Do Is
              </h3>
              <p className="mt-3">
                SIB Infotech is a professionally managed full service web design
                & development company in Mumbai, India. Since 2005 we have been
                helping business in India, UK, Canada, Australia and worldwide.
              </p>

              {services.map((service, index) => (
                <div className="leftAboutHomeItem mt-lg-4 mt-3" key={index}>
                  <div className="iconLeft">
                    <Image
                      className="w-100 h-auto default"
                      width={100}
                      height={100}
                      quality={100}
                      //   className="default"
                      src={service.iconDefault}
                      alt="icon"
                    />
                    <Image
                      className="blue w-100 h-auto"
                      width={100}
                      height={100}
                      quality={100}
                      src={service.iconBlue}
                      alt="icon"
                    />
                  </div>
                  <div className="iconRightAbout">
                    <h3 className="small_heading  fontHeading fontWeight600">
                      {service.title}
                    </h3>
                    <p className="mt-2">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            {/* <div className="aboutHomeRight b">
              <picture>
                <source srcSet="assets/images/about2.webp" type="image/webp" />
                <img
                  src="assets/images/about2.png"
                  alt="SIB Infotech about us"
                />
              </picture>
            </div> */}
            <Image
              width={450}
              height={450}
              className="w-100 h-auto"
              quality={100}
              src={"/assets/images/about2.webp"}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
