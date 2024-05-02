import React from "react";
import mainImg from "../assets/image/png/featured-main-img.png";
import { allPostData } from "./common/Helper";

const FeaturedPost = () => {
  return (
    <div className="py-5 my-lg:5">
      <div className="container custom_container">
        <div className="d-flex flex-wrap">
          <div className="col-12 col-lg-7 px-lg-3">
            <div className="h-100">
              <h2 className="fw-bold fs_3x6l text_primary letter_spacing pb-3">
                Featured Post
              </h2>
              <div className="p-3 featured_card">
                <img className="w-100" src={mainImg} alt="feature-img" />
                <p
                  style={{ color: "#4C4C4C" }}
                  className="ff_inter fw-medium fs_sm my-3 pt-3"
                >
                  By <span className="text_blue">John Doe</span> l May 23, 2022
                </p>
                <h2 className="fw-bold fs_2x8l text_primary ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </h2>
                <p className="ff_inter fw-normal fs_sm text_gray pb-3">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <span>
                  <button className=" common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
                    Read More {">"}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 px-lg-3 mt-md-5 mt-4 mt-lg-0">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="fw-bold fs_3x6l text_primary letter_spacing pb-3 mb-0">
                All Posts
              </h2>
              <p className="ff_inter fw-normal text_blue fs_sm mb-0 cursor_pointer">
                View All
              </p>
            </div>
            <div className="overflow-hidden pe-xl-4">
              {allPostData.map((data, index) => (
                <div
                  key={index}
                  className="d-flex flex-column p-3 p-xl-4 all_post_card transition_03 pe-xl-5"
                >
                  <p
                    style={{ color: "#4C4C4C" }}
                    className="ff_inter fw-medium fs_sm"
                  >
                    By <span className="text_blue">{data.name}</span>{" "}
                    {data.date}
                  </p>
                  <h2 className="fw-bold fs_2xl text_primary pe-lg-5 mb-0">
                    {data.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
