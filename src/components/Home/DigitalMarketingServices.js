import Link from "next/link";
import React from "react";
// import DigitalMarketingTab from "../DigitalMarketingTab";

const DigitalMarketingServices = () => {
  return (
    <section className="contentTab">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="titleLeft">
              <h5 className="heading fontHeading fontWeight700">
                <span className="titleHighlight">Digital Marketing</span>{" "}
                Services
              </h5>
              <p className="mt-4">
                We understand that no two businesses can be the same and so is
                there website usage and therefore they will need a different CMS
                solution. We do Your business in your way.
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-end">
            <div className="buttonRight">
              <Link href="/contact-us" className="btnThemeRed">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="space"></div>
        {/* <DigitalMarketingTab /> */}
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
