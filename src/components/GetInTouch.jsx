import React, { useState } from "react";
import { contactUsData } from "./common/Helper";
import CustomDropdown from "./CustomDropdown";

const GetInTouch = () => {
  const [newUserData, setNewUserData] = useState({
    fname: "",
    email: "",
    query: "",
    message: "",
  });

  const handleChange = (event) => {
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value,
    });
  };
  const handleDropdownChange = (selectedOption) => {
    setNewUserData({
      ...newUserData,
      query: selectedOption,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setNewUserData({
      fname: "",
      email: "",
      query: "",
      message: "",
    });
  }
  return (
    <div id="contact_us" className="py-5 my-lg-4">
      <div className="container custom_container p-lg-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-8">
            <form onSubmit={handleSubmit} className="px-lg-3">
              <p className="ff_inter fw-bolder fs_sm text_primary mb-2 pb-1 text-center letter_spacing_03 text-uppercase">
                Contact us
              </p>
              <h2 className="fw-bold fs_4x8l letter_spacing mb-4 text-center">
                Let’s Start a Conversation
              </h2>
              <p className="ff_inter fw-fw-normal fs_sm text_gray  text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <div className="bg_blue py-4 py-lg-4 px-sm-4 px-lg-5 d-flex flex-column flex-md-row justify-content-between mt-5">
                <div className="col-12 col-md-6 px-4">
                  <p className="ff_inter fw-normal fs_xsm text-white opacity_06 border_bottom pb-2 pb-md-3">
                    Working hours
                  </p>
                  <h2 className="fw-bold fs_xl text-white mb-0">
                    Monday To Friday
                  </h2>
                  <h2 className="fw-bold fs_xl text-white pt-2">
                    9:00 AM to 8:00 PM
                  </h2>
                  <p className="ff_inter fw-normal fs_sm text-white opacity_06">
                    Our Support Team is available 24/7
                  </p>
                </div>
                <div className="col-12 col-md-6 px-4 mt-4 mt-md-0">
                  <div className="d-flex flex-column">
                    <p className="ff_inter fw-normal fs_xsm text-white opacity_06 border_bottom pb-2 pb-md-3">
                      Contact Us
                    </p>
                    <a
                      href="tel:020 7993 2905"
                      className="fw-bold fs_xl text-white mb-0"
                    >
                      020 7993 2905
                    </a>

                    <a
                      href="mailto:hello@finsweet.com"
                      className="ff_inter fw-normal fs_sm text-white opacity_06"
                    >
                      hello@finsweet.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-lg:4 pt-2">
                {contactUsData.map((obj, index) => (
                  <div key={index} className="pt-2">
                    {obj.inputType === "text" && (
                      <input
                        type="text"
                        required
                        name="fname"
                        value={newUserData.fname}
                        onChange={handleChange}
                        placeholder={obj.inputName}
                        className="p-3 p-md-4 mt-3 d-inline-block w-100 ff_inter fw-normal text_primary fs_sm text-capitalize"
                      />
                    )}
                    {obj.inputType === "email" && (
                      <input
                        type="email"
                        required
                        name="email"
                        value={newUserData.email}
                        onChange={handleChange}
                        placeholder={obj.inputName}
                        className="p-3 p-md-4 mt-3 d-inline-block w-100 ff_inter fw-normal text_primary fs_sm text-capitalize"
                      />
                    )}
                    {obj.inputType === "dropdown" && (
                      <CustomDropdown
                        options={["Male", "Female", "Other"]}
                        value={newUserData.queries}
                        onChange={handleDropdownChange}
                      />
                    )}
                  </div>
                ))}
                <textarea
                  name="message"
                  value={newUserData.message}
                  onChange={handleChange}
                  style={{ height: "144px", resize: "none" }}
                  className="w-100 mt-3 p-3 p-md-4 ff_inter fw-normal text_primary fs_sm text-capitalize"
                  placeholder="message"
                ></textarea>
                <button className="w-100 mt-3 common_btn btn bg_primary px-4 px-lg-5 py-2 py-lg-3 text_primary fs_lg rounded-0 fw-bold transition_03">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
