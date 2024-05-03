import React from "react";
import whyBlogImg from "../assets/image/png/why-we-started.png";

const WhyBlog = () => {
  return (
    <div className="py-5 mb-lg-5">
      <div className="container custom_container pt-2">
        <div className="d-flex flex-wrap flex-column-reverse flex-lg-row align-items-center">
          <div className="col-12 col-lg-6">
            <div className=" position-relative">
              <span className="voilet_circle d-none d-lg-inline-block start-50 translate-middle-x"></span>
              <img className="w-100" src={whyBlogImg} alt="team-img" />
            </div>
          </div>
          <div className="col-12 col-lg-6  mt-4 mt-lg-0">
            <div className="ps-lg-5">
              <h2 className="fw-bold fs_3x6l text_primary letter_spacing ">
                Why we started this Blog
              </h2>
              <h4 className="fw-bold fs_2xl text_primary ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <p className="ff_inter fw-normal text_gray fs_sm pe-lg-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBlog;
