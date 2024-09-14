import React from "react";
// import BannerForm from "../BannerForm";
// import BannerTextSlider from "../BannerTextSlider";

const HomeHero = () => {
  return (
    <div>
      <div className="bannerBlock ">
        <video loop playsInline autoPlay muted>
          <source
            src="assets/images/banner/banner-video2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="videoText">
          <div className="containerFull">
            <div className="row">
              <div className="col-lg-7">
                <div className="videoLeft">
                  <h1 className="large_heading fontHeading  fontWeight800 text-white">
                    TOP RATED
                  </h1>
                  <h2 className="heading fontWeight700 my-2 fontHeading">
                    WEB DESIGN AND <span>DIGITAL MARKETING AGENCY</span>
                  </h2>
                  <h3 className="sub_heading text-white">We Help you get</h3>
                  <div className="centerVideo">
                    {/* <BannerTextSlider /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none d-md-block">
                <div className="bannerForm">
                  <h4 className="small_heading fontHeading  fontWeight700">
                    Accelerate Your Business Growth
                  </h4>
                  <p className="">
                    with{" "}
                    <strong className="fontWeight600 text_red">
                      Best <span className=" textChange">Digital Marketing</span>{" "}
                      Company in India
                    </strong>
                  </p>
                  {/* <BannerForm /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-md-none">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Digital Marketing</span> Company
              in India
            </strong>
          </p>
          {/* <BannerForm /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;