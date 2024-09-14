
import React from "react";
// import CountUp from "react-countup";
import Link from "next/link";

const Counter = () => {
  const counters = [
    { label: "Years in Business", value: 18 },
    { label: "Projects delivered", value: 1350 },
    { label: "Active clients/users", value: 750 },
    { label: "Team Members", value: 30 },
  ];

  const links = [
    { href: "/digital-marketing-services", label: "Digital Marketing" },
    { href: "/pay-per-click-ppc-management-services", label: "PPC Management" },
    {
      href: "/search-engine-optimization-seo-services",
      label: "Search Engine Optimization",
    },
    {
      href: "/social-media-marketing-services",
      label: "Social Media Marketing",
    },
    {
      href: "/social-media-optimization-services",
      label: "Social Media Optimization",
    },
    { href: "/influencer-marketing-services", label: "Influencer Marketing" },
  ];

  return (
    <section className="counter">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7 pe-lg-4">
            <div className="drivenLeft">
              <h5 className="title">
                DIGITAL MARKETING & WEB AGENCY MUMBAI, DELHI
              </h5>
              <h4 className="sub_heading fontHeading fontWeight700 mt-3">
                We are as <span className="titleHighlight">STRONG</span> as YOU{" "}
                <br />
                Make us
              </h4>
              <p className="mt-3 title">
                Among Best Website Designing, Web Development & Digital
                marketing Company in India Since 2005
              </p>
              <div className="row mt-4">
                {counters.map((counter, index) => (
                  <div className="col-lg-3 col-6 px-2" key={index}>
                    <div className="itemCounter shadow">
                      <h4 className="fontNumber">
                        <span className="counter-value">
                          {/* <CountUp end={counter.value} /> */}
                        </span>
                        +
                      </h4>
                      <p className="title fontWeight500 mt-2">
                        {counter.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="">
                {links.map((link, index) => {
            
                  return (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="rightServices">
              <h4 className="sub_heading text-center fontHeading fontWeight700">
                Website design and development getting real results
              </h4>
              <p className="title mt-4 text-center">
                If you’re serious about business and want to see real returns
                from your website and digital marketing initiatives, talk to us.
                All digital marketing is 100% measurable, we know we get
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
