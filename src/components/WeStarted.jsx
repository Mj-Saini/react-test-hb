import React from "react";
import weStarted from "../assets/image/png/we-started-img.png";

const WeStarted = () => {
  return (
    <div className="py-5 my-4">
      <div className="container custom_container  position-relative">
        <div className="d-flex flex-column justify-content-center">
          <div className="col-12 col-sm-8 mx-auto">
            <img className="w-100" src={weStarted} alt="started-img" />
          </div>

          <div className="col-12 col-lg-7 we_started_card">
            {" "}
            <div className="d-flex flex-column bg-white p-lg-5 mt-4 mt-sm-5 mt-lg-0">
              <p className="ff_inter fw-semibold fs_sm  text_primary mb-2 mb-lg-4 letter_spacing_03 text-uppercase">
                Why we started{" "}
              </p>
              <h2 className="fw-bold fs_4x8l text_primary letter_spacing">
                It started out as a simple idea and evolved into our passion
              </h2>
              <p className="ff_inter fw-normal fs_sm text_gray pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <span>
                <button className=" common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
                  Discover our story {">"}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeStarted;
