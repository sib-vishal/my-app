import Image from "next/image";
import React from "react";

const DigitalMarketingWebAgency = () => {

  const technicalExpertise = [
    { src: "/assets/images/php.png", alt: "PHP" },
    { src: "/assets/images/wordpress-logo.png", alt: "WordPress" },
    { src: "/assets/images/asp.png", alt: "ASP.net" },
    { src: "/assets/images/mysql.png", alt: "MySQL" },
    { src: "/assets/images/html-5.png", alt: "HTML" },
    { src: "/assets/images/drupal.png", alt: "Drupal" },
    { src: "/assets/images/js.png", alt: "JavaScript" },
    { src: "/assets/images/ci.png", alt: "Codeigniter" },
    { src: "/assets/images/laravel.png", alt: "Laravel" },
    { src: "/assets/images/magento.png", alt: "Magento" },
    { src: "/assets/images/angular.png", alt: "Angular" },
    { src: "/assets/images/css-3.png", alt: "CSS" },
    { src: "/assets/images/photoshop.png", alt: "Photoshop" },
    { src: "/assets/images/illustrator.png", alt: "Illustrator" },
    { src: "/assets/images/figma.png", alt: "Figma" },
    { src: "/assets/images/bootstrap.png", alt: "Bootstrap" },
  ];

  return (
    <section className="marBlock overflowHidden ">
      <div className="marqBlock">
        <h2 className="large_heading  maqrquee fontHeading fw-bold text-uppercase">
          <span className="stroke">DIGITAL MARKETING</span> & WEB AGENCY
        </h2>
        <h2 className="large_heading mt-4  fontHeading maqrqueeReverse fw-bold text-uppercase">
          DIGITAL MARKETING & <span className="stroke">WEB AGENCY</span>
        </h2>
      </div>
      <div className="containerFull">
        <div className="technicalExpertise">
          {technicalExpertise.map((expertise, index) => (
            <div className="itemTechnicalExpertise" key={index}>
              <Image
                width={60}
                height={60}
                quality={100}
                className="object-fit-contain"
                src={expertise.src}
                alt={expertise.alt}
              />
              <h4 className="small_heading fontHeading">{expertise.alt}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingWebAgency;
