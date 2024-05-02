import React, { useRef, useState } from "react";
import profileImg from "../assets/image/svg/Profile.svg";
import { LeftArrowIcon, RightArrowIcon } from "./common/Icon";
import Slider from "react-slick";

const Reviews = () => {
  const [activeArrow, setActiveArrow] = useState("right");
  const sliderArrow = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="reviews">
      <div className="container custom_container bg_white_fade py-4 p-lg-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between p-sm-4 p-md-5">
          <div className="col-lg-5 col-12">
            <div className="pe-xl-5 border_r h-100">
              <span className="ff_inter fw-semibold fs_sm text_primary text-uppercase letter_spacing_03">
                TESTIMONIALs
              </span>
              <h2 className="fw_bold text_primary fs_3x6l letter_spacing pe-lg-5">
                What people say about our blog
              </h2>
              <p className="fw-normal pe-lg-5 text_primary fs_sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-4 mt-lg-0">
            <Slider ref={sliderArrow} {...settings}>
              <div>
                <div className="pe-lg-5">
                  <p className="fw-bold text_primary fs_2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="d-flex justify-content-between mt-4 mt-md-5">
                    <div className="d-flex gap-2 align-items-center ">
                      <img w={48} h={48} src={profileImg} alt="profile" />
                      <div>
                        <h2 className="fw-bold fs_2xl text_primary mb-2">
                          Jonathan Vallem
                        </h2>
                        <p className="ff_inter fw-normal fs_sm text_gray mb-0">
                          New york, USA
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span
                        onClick={() => {
                          setActiveArrow("left");
                          sliderArrow.current.slickPrev();
                        }}
                        className={`bg-white rounded-5 d-flex align-items-center justify-content-center slider_arrow ${
                          activeArrow === "left" ? "active_arrow" : ""
                        }`}
                      >
                        <LeftArrowIcon />
                      </span>
                      <span
                        onClick={() => {
                          setActiveArrow("right");
                          sliderArrow.current.slickPrev();
                        }}
                        className={`bg-white rounded-5 d-flex align-items-center justify-content-center slider_arrow ${
                          activeArrow === "right" ? "active_arrow" : ""
                        }`}
                      >
                        <RightArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pe-lg-5">
                  <p className="fw-bold text_primary fs_2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="d-flex justify-content-between mt-4 mt-md-5">
                    <div className="d-flex gap-2 align-items-center ">
                      <img w={48} h={48} src={profileImg} alt="profile" />
                      <div>
                        <h2 className="fw-bold fs_2xl text_primary mb-2">
                          Jonathan Vallem
                        </h2>
                        <p className="ff_inter fw-normal fs_sm text_gray mb-0">
                          New york, USA
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <span
                        onClick={() => {
                          setActiveArrow("left");
                          sliderArrow.current.slickPrev();
                        }}
                        className={`bg-white rounded-5 d-flex align-items-center justify-content-center slider_arrow ${
                          activeArrow === "left" ? "active_arrow" : ""
                        }`}
                      >
                        <LeftArrowIcon />
                      </span>
                      <span
                        onClick={() => {
                          setActiveArrow("right");
                          sliderArrow.current.slickPrev();
                        }}
                        className={`bg-white rounded-5 d-flex align-items-center justify-content-center slider_arrow ${
                          activeArrow === "right" ? "active_arrow" : ""
                        }`}
                      >
                        <RightArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
