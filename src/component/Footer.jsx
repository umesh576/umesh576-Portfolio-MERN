import React from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white p-3 bg-black     px-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 hover:text-gray-400">
          <FaRegCopyright />

          <p className="">
            <a href="">umesh joshi</a>
          </p>
        </div>
        <div className="flex items-center gap-1 hover:text-gray-400">
          <MdEmail />
          <p>
            <a href="">uj19343@gmail.com</a>
          </p>
        </div>
        <div className="flex items-center gap-1 hover:text-gray-400">
          <IoMdContact />
          <p>
            <a href="">+977 9849748294</a>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <a href="/cv.pdf" download>
            <button className="px-3 py-2 bg-white text-black rounded-lg shadow-gray-300 shadow-md cursor-pointer relative hover:top-1">
              View resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
