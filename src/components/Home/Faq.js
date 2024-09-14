import React from "react";
// import Faqs from "../Faqs";
import Link from "next/link";

const Faq = () => {
  return (
    <>
      <section className="bgAction">
        <div className="containerFull">
          <div className="d-flex align-items-center justify-content-between home_cta">
            <h4 className="sub_heading letterSpacing1 text-white fontWeight700">
              Want to know how you can grow your business,
              <br />
              speak to our expert strategists now.
            </h4>
            <Link href="tel: +91-9222260000" className="btnAction">
              Let's Talk Growth <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      <section className="dots">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftFAQ">
                <h4 className="heading fontWeight700">
                  Frequently Asked <span className="text_red">Questions</span>
                </h4>
                <p className="mt-2 fontWeight700">
                  Our in-house team of recruitment specialists will nurture your
                  leads all the way through to completed application.{" "}
                </p>
                <p className="mt-3 fontWeight700">
                  We as a full service leading digital marketing firm, offers
                  customized story-based digital marketing services to build,
                  promote & scale your brand so it can clearly & easily attract
                  your ideal clients.
                </p>
                <h4 className="small_heading fontWeight700 mt-4">
                  We're ready to help you
                </h4>
                <div>
                  <Link href="tel: +91-9222260000" className="btnTheme mt-4">
                    <i className="fa fa-phone"></i> +91-9222260000
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faqRight ps-lg-4">
                <Faqs />
                <div className="text-end">
                  <Link href="#" className="link mt-2">
                    See All <i className="fa fa-caret-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
