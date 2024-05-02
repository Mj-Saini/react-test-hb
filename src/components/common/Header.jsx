import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/svg/logo.svg";
import { headerTabs } from "./Helper";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  if (navbar) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="bg_primary py-3">
      <div className="container custom_container">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <Link to="/" className="inline-block">
              <img src={logo} alt="logo" />
            </Link>
          </span>
          <div
            className={`d-flex gap-3 lg:gap-4 align-items-center transition_03 ${
              !navbar ? "close_nav" : "nav_bar"
            }`}
          >
            {headerTabs.map((obj, index) => (
              <Link
                onClick={() => setNavbar(false)}
                key={index}
                to={obj.path}
                className="ff_inter fw-normal fs_sm text-white header_tabs transition_03"
              >
                {obj.tabs}
              </Link>
            ))}
            <button className="header_btn btn bg-white px-4 lg:px-5 py-2 lg:py-3 text_primary fs_lg rounded-0 fw-bold ms-2 transition_03">
              Subscribe
            </button>
          </div>
          <div
            onClick={() => setNavbar(!navbar)}
            className="d-flex flex-column justify-content-between menu_btn d-md-none z-3 transition_03 cursor_pointer "
          >
            <span
              className={`humburger_line transition_03 bg-white ${
                !navbar ? "" : "humburger_line1"
              }`}
            ></span>
            <span
              className={`humburger_line transition_03 bg-white ${
                !navbar ? "" : "humburger_line2"
              }`}
            ></span>
            <span
              className={`humburger_line transition_03 bg-white ${
                !navbar ? "" : "opacity-0"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
