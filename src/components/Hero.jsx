import React from "react";

const Hero = () => {
  return (
    <div className="hero_bg_img d-flex position-relative">
      <div className="overlay"></div>
      <div className="container custom_container pt-2 flex-grow-1 d-flex z-1">
        <div className="d-flex align-items-center">
          <div className="col-12 col-md-9">
            <p className="ff_inter fw-semibold fs_sm text-white text-uppercase letter_spacing_03">
              Posted on <span className="fw-bolder">startup</span>
            </p>
            <h1 className="fw-bold fs_5x6l text-white letter_spacing">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="ff_inter fw-normal fs_sm text-white mt-3">
              By <span className="text_secondary">James West </span>| May 23,
              2022{" "}
            </p>
            <p className="ff_inter fw-normal fs_sm text-white mt-3 mb-3 pe-5 ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className=" common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
              Read More {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
