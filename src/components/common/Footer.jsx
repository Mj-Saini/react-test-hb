import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/svg/logo.svg";
import { FooterLinks } from "./Helper";
import { FbIcon, InstaIcon, LinkdinIcon, TwitterIcon } from "./Icon";

const Footer = () => {
  return (
    <div id="footer" className="bg_primary py-4 py-md-5 ">
      <div className="container custom_container pt-2">
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center">
          <span>
            <Link to="/" className="inline-block">
              <img src={logo} alt="logo" />
            </Link>
          </span>
          <div
            className={`d-flex gap-3 lg:gap-4 align-items-center transition_03 flex-wrap`}
          >
            {FooterLinks.map((obj, index) => (
              <Link
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                key={index}
                to={obj.path}
                className="ff_inter fw-normal fs_sm text-white header_tabs transition_03"
              >
                {obj.tabs}
              </Link>
            ))}
          </div>
        </div>
        <div className="input_parant d-flex flex-column flex-lg-row mt-4 mt-sm-5">
          <h2 className="fw-bold text-white fs_3x6l w-100 pe-xl-4">
            Subscribe to our news letter to get latest updates and news
          </h2>
          <div className="d-flex flex-column flex-xl-row gap-4 w-100 ps-lg-5 mt-4 mt-lg-0 custom_input_height">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-100"
            />
            <button className=" common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-5 d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <div className="z-0 position-relative">
            <p className="ff_inter fw-normal fs_sm text-white m-0 opacity-75 text-center text-sm-start">
              Finstreet 118 2561 Fintown
            </p>
            <p className="ff_inter fw-normal fs_sm text-white m-0 opacity-75 text-center text-sm-start">
              Hello@finsweet.com 020 7993 2905
            </p>
          </div>
          <div className="d-flex gap-2 gap-lg-4 mt-2 mt-sm-0">
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
    </div>
  );
};

export default Footer;
