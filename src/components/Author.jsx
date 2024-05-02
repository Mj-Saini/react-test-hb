import React from "react";
import { FbIcon, InstaIcon, LinkdinIcon, TwitterIcon } from "./common/Icon";
import { authorData } from "./common/Helper";

const Author = () => {
  return (
    <div id="author" className="my-5">
      <div className="container custom_container">
        <h2 className="fw-bold fs_3x6l text_primary letter_spacing text-center">
          List of Authors
        </h2>
        <div className="mt-sm-5 mt-2 d-flex flex-wrap">
          {authorData.map((obj, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 px-sm-2 mt-3">
              <div className="bg_white_gray d-flex flex-column justify-content-center align-items-center px-3 py-4 transition_03 h-100">
                <img className="profile" src={obj.img} alt="profileimg" />
                <h2 className="fw-bold text_primary fs_2x8l text-center mt-3 pt-1 mb-0 letter_spacing">
                  {obj.name}
                </h2>
                <p className="fw-normal ff_inter fs_xsm text_gray text-center mb-0 mt-1">
                  {obj.roll}
                </p>
                <div className="d-flex gap-3 mt-3 pt-1">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com"
                    className="social_icon transition_03"
                  >
                    <FbIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/"
                    className="social_icon transition_03"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com"
                    className="social_icon transition_03"
                  >
                    <InstaIcon />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://in.linkedin.com/"
                    className="social_icon transition_03"
                  >
                    <LinkdinIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
