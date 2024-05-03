import React from "react";
import aboutHeroImg from "../assets/image/png/about-hero.png";

const AboutHero = () => {
  return (
    <div style={{ minHeight: "80vh" }} className=" d-flex">
      <div className="container custom_container flex-grow-1 d-flex align-items-center align-items-xl-end position-relative">
        <div className="d-flex flex-wrap align-items-xl-end justify-content-end">
          <div className="col-xl-5 col-lg-7 about_hero_box top-0 px-lg-3">
            <span>ABOUT US</span>
            <h2 className="fw-bold text_primary fs_4x8l letter_spacing">
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div className="col-lg-5 my-xl-5 py-4  px-lg-3">
            <p
              style={{ color: " #4C4C4C" }}
              className="ff_inter fw-normal fs_sm mt-xl-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img className="w-100" src={aboutHeroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
