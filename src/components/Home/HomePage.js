import React from "react";
import HomeHero from "./HomeHero";
import BannerLogos from "./BannerLogos";
import Counter from "./Counter";
import Madeby from "./Madeby";
import Expertise from "./Expertise";
import DigitalMarketingServices from "./DigitalMarketingServices";
import AboutUs from "./AboutUs";
import DigitalMarketingWebAgency from "./DigitalMarketingWebAgency";
import DigitalMarketingAgency from "./DigitalMarketingAgency";
import WebsiteDesignServices from "./WebsiteDesignServices";
import Testimonials from "./Testimonials";
// import Faq from "./Faq";
// import Blog from "./Blog";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <BannerLogos />
      <Counter />
      <Madeby />
      <Expertise />
      <DigitalMarketingServices />
      <AboutUs />
      <DigitalMarketingWebAgency />
      <DigitalMarketingAgency />
      <WebsiteDesignServices />
      <Testimonials />
      {/* <Faq /> */}
      {/* <Blog /> */}
    </>
  );
};

export default HomePage;
