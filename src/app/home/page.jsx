import React from "react";

export async function generateMetadata({ params, searchParams }) {
  return {
    title: "...",
    metadataBase: new URL("https://www.sibinfotech.com"),
    alternates: {
      canonical: `${""}`,
      // languages: {
      //   'en-US': '/en-US',
      //   'de-DE': '/de-DE',
    },
  };
}

const page = () => {
 
  
  return <div>page</div>;
};

export default page;
