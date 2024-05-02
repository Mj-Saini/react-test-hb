import React from "react";
import { weAreFeatured } from "./common/Helper";

const Featured = () => {
  return (
    <>
      <div className="container custom_container my-sm-5 py-4 py-lg-5">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <div className="col-12 col-lg-2">
            <h2 className=" text_gray ff_inter fw-normal fs_xsm">
              We are
              <span className="fw-bold fs_2xl text_gray d-block">
                Featured in
              </span>
            </h2>
          </div>
          <div className="col-12 col-lg-10">
            <div className="d-flex flex-wrap flex-lg-row justify-content-center justify-content-lg-between">
              {weAreFeatured.map((obj, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <img className="mt-4 mt-lg-0" src={obj.img} alt="logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
