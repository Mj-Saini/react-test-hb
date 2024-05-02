import React from "react";
import { blogAllPostData } from "./common/Helper";

const BlogAllPost = () => {
  return (
    <div className="py-5">
      <div className="container custom_container">
        <h2 className="fw-bold fs_4x8l text_primary letter_spacing pb-3 border_b_blog pb-4">
          All posts
        </h2>
        <div className="pt-4">
          {blogAllPostData.map((data, index) => (
            <div key={index} className="d-flex flex-wrap mt-5">
              <div className="col-12 col-lg-4 pe-lg-3">
                <img className="w-100" src={data.img} alt="blog-post" />
              </div>
              <div className="col-12 col-lg-8 ps-lg-3 mt-4 mt-lg-0">
                <div className="d-flex flex-column justify-content-center h-100">
                  <span className="ff_inter fw-semibold text_blue fs_sm text-uppercase">
                    {data.roll}
                  </span>
                  <h2 className="fw-bold fs_3x6l text-black letter_spacing pe-lg-5 mb-0">
                    {data.title}
                  </h2>
                  <p className="ff_inter fw-normal fs_sm text-black mt-3 pe-5 ">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center gap-3 my-5">
            <button className="fw-bold fs_2xl text_gray border-0 bg-transparent">
              {"<"} Prev
            </button>
            <button className="fw-bold fs_2x8l text_black border-0 bg-transparent">
              Next {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAllPost;
