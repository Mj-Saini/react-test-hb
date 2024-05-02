import React, { useState, useEffect, useRef } from "react";
import { DropdownIcon } from "./common/Icon";

const CustomDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedValue(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="position-relative " ref={dropdownRef}>
      <span className="position-absolute dropdown_arrow">
        <DropdownIcon />
      </span>
      <div
        className="border border-black rounded-[15px] text-base font-normal text-black shadow-input_shadow py-3 px-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedValue || "Query Related  "}
      </div>
      {open && (
        <div className="position-absolute top-full left-0 w-100 border border-black rounded-[15px] bg-white shadow-input_shadow">
          {options.map((option, index) => (
            <div
              key={index}
              className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                option === selectedValue && "bg-gray-200"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
