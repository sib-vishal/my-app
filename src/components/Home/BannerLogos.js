
import Image from "next/image";
import React from "react";

const BannerLogos = () => {
  // Array of image data
  const images = [
    {
      src: "/assets/images/best-website-deigning-ana-development-company-in-india.svg",
      alt: "Best website desining and development company in India",
    },
    {
      src: "/assets/images/best-design-comapnies-in-india.svg",
      alt: "Best Designing Company in India",
    },
    {
      src: "/assets/images/facebook-reviews.svg",
      alt: "Facebook Reviews",
    },
    {
      src: "/assets/images/search-engine-optimization-firm-in-delhi.svg",
      alt: "Search engine optimization firm in delhi",
    },
    {
      src: "/assets/images/top-advertising-and-marketing-company.png",
      alt: "Top adverstising and marketing company",
    },
  ];

  return (
    <div className="bannerBottomLogo ">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="inlineClutch">
              {/* Using map to render Image components */}
              {images.map((image, index) => (
                <div className="itemReviews" key={index}>
                  <Image
                    width={100}
                    height={100}
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="tagLine">
              <h4 className="small_heading  fontWeight500">
                An Award Winning{" "}
                <span className="text_red">
                  Best Website Design &amp; Digital Growth Agency
                </span>{" "}
                in India that Designs, Develops &amp; Delivers
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerLogos;
