import React from "react";
import blogImg from "../assets/image/png/blog-hero-img.png";

const BlogHero = () => {
  return (
    <div style={{ background: "#F4F0F8" }} className=" d-flex py-5">
      <div className="container custom_container pt-2 flex-grow-1 d-flex z-1 my-lg-5">
        <div className="d-flex flex-wrap align-items-center">
          <div className="col-12 col-lg-7 pe-lg-5">
            <p className="ff_inter fw-semibold fs_sm text-black text-uppercase letter_spacing_03 ">
              Featured Post
            </p>
            <h2 className="fw-bold fs_3x6l text-black letter_spacing pe-lg-5">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="ff_inter fw-normal fs_xsm text-black mt-3">
              By <span className="text_blue">James West </span>| May 23, 2022{" "}
            </p>
            <p className="ff_inter fw-normal fs_sm text-black mt-3 mb-3 pe-5 ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className=" common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
              Read More {">"}
            </button>
          </div>
          <div className="col-12 col-lg-5 ps-xl-4 mt-4 mt-lg-0">
            <img className="w-100" src={blogImg} alt="blog-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
