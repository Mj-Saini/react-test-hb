import React from "react";

const Contents = ({ hide, spacing }) => {
  return (
    <div className={`${spacing}`}>
      <div className="container custom_container">
        <div className={`d-flex justify-content-end ${hide}`}>
          <div className="col-7 bg_secondary"></div>
          <div style={{ padding: "12.5px 0" }} className="col-3 bg_blue"></div>
        </div>
        <div className="d-flex flex-wrap bg_light_white p-3 p-sm-4 p-lg-5">
          <div className="col-12 col-lg-6">
            {" "}
            <div className="d-flex flex-column p-lg-5 mt-4 mt-sm-5 mt-lg-0">
              <p className="ff_inter fw-semibold fs_sm  text_primary mb-2 mb-lg-4 letter_spacing_03 text-uppercase">
                ABOUT US
              </p>
              <h2 className="fw-bold fs_3x6l text_primary letter_spacing">
                We are a community of content writers who share their learnings
              </h2>
              <p className="ff_inter fw-normal fs_sm text_gray pb-lg-3 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <span>
                <button className="read_more_btn btn bg-transparent p-0 text_primary fs_lg rounded-0 fw-bold transition_03">
                  Read More
                </button>
              </span>
            </div>
          </div>{" "}
          <div className="col-12 col-lg-6">
            {" "}
            <div className="d-flex flex-column p-lg-5 mt-4 mt-sm-5 mt-lg-0">
              <p className="ff_inter fw-semibold fs_sm  text_primary mb-2 mb-lg-4 letter_spacing_03 text-uppercase">
                Our mision
              </p>
              <h2 className="fw-bold fs_2x8l text_primary letter_spacing">
                Creating valuable content for creatives all around the world
              </h2>
              <p className="ff_inter fw-normal fs_sm text_gray pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
