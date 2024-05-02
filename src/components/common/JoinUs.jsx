import React from "react";

const JoinUs = () => {
  return (
    <div className="my-lg-5 py-5">
      <div className="container custom_container py-sm-4">
        <div className="d-flex">
          <div className="col-12 col-lg-5 mx-auto">
            <div className="px-4 d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-center fw-bold text_primary fs_3x6l letter_spacing">
                Join our team to be a part of our story
              </h2>
              <p className="ff_inter fw-normal fs_sm text_gray text-center pb-sm-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <button className=" common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
