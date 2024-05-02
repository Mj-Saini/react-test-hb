import React from "react";
import { categoryData } from "./common/Helper";

const Category = ({ heading, styling }) => {
  return (
    <div id="category" className="my-5">
      <div className="container custom_container">
        <h2
          className={`fw-bold fs_3x6l text_primary letter_spacing pb-1 ${styling}`}
        >
          {heading}
        </h2>
        <div className="mt-sm-4 mt-2 d-flex flex-wrap">
          {categoryData.map((obj, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 px-sm-2 mt-3">
              <div className="cards h-100 d-flex flex-column justify-content-center px-3 py-4 transition_03">
                <span>
                  <span className="bg_white_fade d-inline-flex rounded">
                    {obj.img}
                  </span>
                </span>
                <h2 className="fw-bold text_primary fs_2x8l mt-3 pt-1 mb-0 letter_spacing">
                  {obj.name}
                </h2>
                <p className="fw-normal ff_inter fs_xsm text_gray  mb-0 mt-1">
                  {obj.roll}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
