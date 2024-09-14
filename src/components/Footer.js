"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as CONSTANTS from "@/constants/constants";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Footer() {
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitEnquiry = async () => {
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("message", inputs.message);

    const res = await axios
      .post(`${CONSTANTS.API_URL}home/submit_quotes`, formData, {
        headers: headers,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    if (data && !data.error) {
      axios.post(`${CONSTANTS.API_URL}send-email-any`, {
        html: `
          <p>Dear Admin,</p>
          <p>You have received an enquiry from:</p>
             <table style='width: 100%;' border='1' cellspacing='0'>
              <tr>
                  <td style='padding:10px;'>Full Name</td>
                  <td style='padding:10px;'>${inputs.name}</td>
              </tr>
              <tr>
                  <td style='padding:10px;'>Email</td>
                  <td style='padding:10px;'>${inputs.email}</td>
              </tr>
               <tr>
                  <td style='padding:10px;'>Website Location</td>
                  <td style='padding:10px;'>${
                    "https://sibinfotech.com" + window.location.pathname
                  }</td>
              </tr>
             
               <tr>
                    <td colspan="2">
                        <p style='padding:10px; font-weight: 700;' >Message</p>
                        <p style='padding:10px; margin-top: 8px'>${
                          inputs.message
                        }</p>
                    </td>
                  </tr>
             
          </table>`,
        fromWhere: "Enquiry - Footer",
      });
    }
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitEnquiry().then((data) => {
      if (!data.error) {
        toast.success(data.message);
        setInputs({
          name: "",
          email: "",
          message: "",
        });
        window.location.href = "https://sibinfotech.com/thanks";
      } else {
        toast.error(data.message);
      }
    });
  };
  useEffect(() => {
    if (
      window.location.pathname === "/career" ||
      window.location.pathname === "/apply-now" ||
      window.location.pathname === "/contact-us"
    ) {
      console.log("This is ihere");
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  });

  const pathname = usePathname();

  return (
    <div>
      <section
        className="footerForm"
        id="requestQuote"
        style={{ display: showForm ? "block" : "none" }}
      >
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-2">
              <div className="leftFooterForm">
                <h4 className="small_heading">Get a Free Quote</h4>
              </div>
            </div>
            <div className="col-lg-10">
              <form onSubmit={handleSubmit} method="post" action="#">
                <div className="formRightFooter">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={inputs.name}
                    pattern="^[( )a-zA-Z]+$"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                    value={inputs.email}
                    pattern="^[( )a-zA-Z]+$"
                    required
                  />
                  <div className="form_fax" style={{ display: "none" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter fax"
                      name="fax"
                      title="Please enter fax"
                    />
                  </div>
                  <textarea
                    required=""
                    name="message"
                    placeholder="Message"
                    onChange={handleInputChange}
                    value={inputs.message}
                    pattern="^[( )a-zA-Z]+$"
                  ></textarea>
                  <button type="submit" name="submit" className="btnThemeRed">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footerNew">
        <div className="container-fluid ps-0">
          <div className="row">
            <div className="col-lg-3 px-0 px-lg-2">
              <div className="firstColumn position-relative text-center">
                <h4 className="sub_heading text_white fontHeading">
                  <i className="fa fa-mobile-alt pe-3 text_red"></i> Let's Talk
                </h4>
                <Link
                  href="tel:+91-92222-60000"
                  className="sub_heading2 text-white my-3 d-inline-block"
                >
                  +91-92222-60000
                </Link>
                <h4 className="sub_heading fontWeight300 text_white_light fontHeading">
                  Need some
                  <br /> great marketing?
                  <br /> We deliver.
                </h4>
                <div>
                  <Link href="/contact-us" className="footerLeft ">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-11">
                  <div className="rightFooterColumn">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="footerColumn">
                          <h4 className="fontHeading">Internet Marketing</h4>
                          <ul>
                            <li>
                              <Link href="/social-media-optimization-services">
                                Social Media Optimization
                              </Link>
                            </li>
                            <li>
                              <Link href="/pay-per-click-ppc-management-services">
                                PPC Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/search-engine-marketing-companies-mumbai-india">
                                Search Engine Marketing
                              </Link>
                            </li>
                            <li>
                              <Link href="/online-reputation-management-services">
                                Reputation Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/paid-inclusion-services-mumbai-india">
                                Paid Search Engine Inclusion
                              </Link>
                            </li>
                            <li>
                              <Link href="/email-marketing-services-companies-mumbai-india">
                                Email Marketing
                              </Link>
                            </li>
                            <li>
                              <Link href="/press-release-submission-services">
                                PR Submission
                              </Link>
                            </li>
                            <li>
                              <Link href="/regional-local-seo-services">
                                Google Local Listing
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="footerColumn">
                          <h4 className="fontHeading">Website Development</h4>
                          <ul>
                            <li>
                              <Link href="/erp-crm-software-development-solutions">
                                ERP & CRM Solutions
                              </Link>
                            </li>
                            <li>
                              <Link href="/custom-website-development-companies-mumbai-india">
                                Custom Web Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/cms-development-companies-mumbai-india">
                                CMS Development Services
                              </Link>
                            </li>
                            <li>
                              <Link href="/magento-development-services-mumbai-india">
                                Magento Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/drupal-cms-framework-development-services">
                                Drupal Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/wordpress-cms-website-development-companies-mumbai-india">
                                WordPress Experts
                              </Link>
                            </li>
                            <li>
                              <Link href="/joomla-cms-framework-development-services">
                                Joomla Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/webportal-development-companies-mumbai-india">
                                Web Portal Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/ecommerce-solutions-company-mumbai-india">
                                E-Commerce Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="footerColumn">
                          <h4 className="fontHeading">Website Designing</h4>
                          <ul>
                            <li>
                              <Link href="/cms-website-design-development-services">
                                CMS Based Website
                              </Link>
                            </li>
                            <li>
                              <Link href="/dynamic-website-designing-services">
                                Dynamic Website Designing
                              </Link>
                            </li>
                            <li>
                              <Link href="/website-maintenance-services">
                                Website Maintenance
                              </Link>
                            </li>
                            <li>
                              <Link href="/website-redesigning-services">
                                Website Redesigning
                              </Link>
                            </li>
                            <li>
                              <Link href="/mobile-website-designing-services">
                                Mobile Website Designing
                              </Link>
                            </li>
                            <li>
                              <Link href="/corporate-website-designing-services">
                                Corporate Web Designing
                              </Link>
                            </li>
                            <li>
                              <Link href="/website-audit-services-mumbai-india">
                                Website Audit Report
                              </Link>
                            </li>
                            <li>
                              <Link href="/xhtml-conversion-services">
                                XHTML Conversion
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="footerColumn">
                          <h4 className="fontHeading">PPC Management</h4>
                          <ul>
                            <li>
                              <Link href="/google-ads-management-services">
                                Google Ads Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/linkedin-ads-management-services">
                                Linkedin Ads Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/instagram-ads-management-services">
                                Instagram Ads Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/facebook-ads-management-services">
                                Facebook Ads Management
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="socialColumn">
                    <ul>
                      <li>
                        <Link
                          href="https://www.facebook.com/sibinfotech/"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.twitter.com/sibinfotech"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/sib-infotech/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/user/sibinfotech"
                          target="_blank"
                        >
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className={`mapBlock py-5   ${
            pathname == "/contact-us" ? "d-none" : ""
          }
            `}
        >
          {/* <div className="containerFull">
            <div className="row">
              <div className="col-lg-6">
                <div className="mapItem ">
                  <div className="leftImgMap ">
                    <Image
                      width={500}
                      height={500}
                      className="w-100 h-99 "
                      src={`/assets/images/mumbai-office.webp`}
                      alt=""
                    />
                    <div className="officeAddress">
                      <h4 className="small_heading fontWeight600">
                        Mumbai Office
                      </h4>
                      <p>
                        107, Orbit Premises, Mindspace Near Inorbit Mall, Malad
                        West, Mumbai, Maharashtra 400064
                      </p>
                      <Link href="tel:+91-92222-60000">
                        <i className="fa fa-phone"></i>&nbsp; +91-92222-60000
                      </Link>
                    </div>
                  </div>
                  <div className="rightMapItem ">
                    <iframe
                      className="img-taken"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      title="Mumbai Office Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mapItem">
                  <div className="leftImgMap">
                    <Image
                      width={500}
                      height={500}
                      className="w-100 h-99 "
                      src={`/assets/images/delhi-office.webp`}
                      alt=""
                    />
                    <div className="officeAddress">
                      <h4 className="small_heading fontWeight600">
                        Delhi Office
                      </h4>
                      <p>
                        2nd Floor, Office No 205, DDA-2 Building, Janakpuri
                        District Center, Janakpuri, New Delhi, Delhi 110058
                      </p>
                      <Link href="tel:+91-92222-60000">
                        <i className="fa fa-phone"></i>&nbsp; +91-92222-60000
                      </Link>
                    </div>
                  </div>
                  <div className="rightMapItem">
                    <iframe
                      title="Delhi Office Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9866641582603!2d77.0791146745727!3d28.630161784190033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1709614692297!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className={`containerFull   `}>
            <div className="row">
              <div className=" col-lg-6  ">
                <h4 className="small_heading2 fontWeight700 text-white fontHeading">
                  Mumbai Office
                </h4>
                <iframe
                  className=" w-100 rounded mt-1"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                  allowFullScreen=""
                  height="350"
                  loading="lazy"
                  title="Mumbai Office Map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-lg-6 mt-3 mt-lg-0">
                <h4 className="small_heading2 fontWeight700 text-white fontHeading">
                  New Delhi Office
                </h4>
                <iframe
                  className="w-100 rounded mt-1"
                  title="Delhi Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9866641582603!2d77.0791146745727!3d28.630161784190033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1709614692297!5m2!1sen!2sin"
                  // width="600"
                  height="350"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <div className="footerBottom">
          <div className="containerFull">
            <div className="footerLogos">
              <div className="itemFooterLogo">
                <Link
                  href="https://www.google.com/partners/agency?id=4328223643"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                    alt="Google Partner"
                  />
                </Link>
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Meta Partner Company"
                  src="/assets/images/meta-partner.jpg"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="clutch Partner Company"
                  src="/assets/images/clutch.png"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Shopify Partner Company"
                  src="/assets/images/shopify-partner.png"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Trustpilot Partner Company"
                  src="/assets/images/trustpilot.jpg"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Google Analytics Partner Company"
                  src="/assets/images/google-analytics.jpg"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Bing Partner Company"
                  src="/assets/images/bing.png"
                />
              </div>
            </div>
            <div className="text-center mt-2 countryCenter">
              <p>
                Serving Clients from : USA, UK, Australia, Canada, Europe,
                Germany, Singapore, Portugal, Belgium, Netherlands, Turkey, New
                Zealand, Japan & more
              </p>
            </div>
            <div className="footer_copyright d-flex mb-2 align-items-center justify-content-between">
              <div className="rightFooterBottom">
                <ul>
                  {/* <li>
                    <Link href="#">Clients</Link>
                  </li> */}
                  <li>
                    <Link href="/career">Career</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy">Cookies Policy</Link>
                  </li>
                  {/* <li>
                    <Link href="#">SEO Tools</Link>
                  </li> */}
                  <li>
                    <Link href="/resource">Resources</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="copyRightFooter ">
                <p>
                  SIB Infotech © {new Date().getFullYear()}. All Rights
                  Reserved.
                </p>
              </div>
            </div>
            {/* <div className="footer_social_main">
              <ul className="footer_social">
                <li>
                  <Link
                    href="https://www.facebook.com/sibinfotech/"
                    target="_blank"
                  >
                    <i className=" fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.twitter.com/sibinfotech"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/sib-infotech/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/user/sibinfotech"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
