import React from "react";
import outTeamImg from "../assets/image/png/our-team.png";

const OurTeam = () => {
  return (
    <div className="py-5 mb-lg-5">
      <div className="container custom_container pt-2">
        <div className="d-flex flex-wrap align-items-center">
          <div className="col-12 col-lg-6">
            <div className="pe-lg-5">
              <h2 className="fw-bold fs_3x6l text_primary letter_spacing ">
                Our team of creatives
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
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className="ps-lg-5 position-relative">
              <span className="yellow_shape d-none d-lg-inline-block top-50 start-0 translate-middle-y"></span>
              <img className="w-100" src={outTeamImg} alt="team-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
