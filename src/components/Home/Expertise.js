
import React from "react";
import Link from "next/link";

const Expertise = () => {
  const services = [
    {
      title: "Website Designing",
      imageUrl: "/assets/images/bg/web-design.jpg",
      description:
        "Your website is your home on the internet (web). The Website Design is the first and the foremost area which must be concentrated as it is the virtual face of a company.",
      link: "/website-designing-services",
    },
    {
      title: "Search Engine Optimization",
      imageUrl: "/assets/images/bg/seo.jpg",
      description:
        "Search Engine Optimization is the most efficient and effective method to increase your search engine visibility and drive traffic to your website. With our SEO services in India.",
      link: "/search-engine-optimization-seo-services",
    },
    {
      title: "Offshore Outsourcing",
      imageUrl: "/assets/images/bg/offshore.jpg",
      description:
        "Sit back and relax! Hire top-notch thinkers, web developers, web designers, and search engineers and quickly scale your delivery capacity. We are a global offshore outsourcing...",
      link: "/search-engine-optimization-outsourcing-seo-services",
    },
    {
      title: "Website Development",
      imageUrl: "/assets/images/bg/web-development.jpg",
      description:
        "We offer customized web development services using the latest frameworks and platforms to build bespoke web applications for websites or Mobile Apps, E-commerce Portals, API links, and much more.",
      link: "/website-development-services",
    },
    {
      title: "Mobile App Development",
      imageUrl: "/assets/images/bg/mobile-app.jpg",
      description:
        "In a quest for staying ahead of the technology, it is a necessity for any business looking to leverage the power of smartphones to develop mobile apps. Being experienced...",
      link: "/mobile-application-development-services",
    },
    {
      title: "Software Development",
      imageUrl: "/assets/images/bg/software-development.jpg",
      description:
        "We build custom software solutions that will help your business optimize operations, unlock a new level of efficiency and transform your ideas into an innovative service or an engaging...",
      link: "/software-development-services",
    },
  ];

  return (
    <section>
      <div className="containerFull ">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h4 className="heading text-center fontHeading fontWeight600">
              Areas of Expertise
            </h4>
            <h5 className="small_heading mt-3 text-center fontWeight500">
              #1 Affordable{" "}
              <span className="text_red">
                Digital Marketing Agency In India
              </span>{" "}
              - An Extended Team
            </h5>
            <p className="text-center mt-3">
              SIB Infotech is a professionally managed full service web design
              &amp; development company in Mumbai, India. Since 2005, we have
              been helping businesses in India, UK, Canada, Australia, and all
              over the world to adapt and grow in an ever-changing online world
              by offering fully functional mobile-friendly responsive, cheap
              Website Designing, Web Development.
            </p>
          </div>
        </div>
        <div className="space"></div>
        <div className="servicesWeb">
          <div className="inlineService">
            {services.map((service, index) => (
              <div
                className="itemServiceLine"
                key={index}
                data-background={`url(${service.imageUrl})`}
              >
                <h4 className="medium_heading fontHeading fontWeight600">{service.title}</h4>
                <div className="serviceText">
                  <p>{service.description}</p>
                </div>
                <Link href={service.link} className="linkService">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
