import React from "react";
import Reviews from "../components/Reviews";
import JoinUs from "../components/common/JoinUs";
import OurTeam from "../components/OurTeam";
import Contents from "../components/Contents";
import WhyBlog from "../components/WhyBlog";
import Author from "../components/Author";
import AboutHero from "../components/AboutHero";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <Contents hide="d-none"/>
      <OurTeam />
      <WhyBlog />
      <Author />
      <Reviews />
      <JoinUs />
    </>
  );
};

export default AboutUs;
