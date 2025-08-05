"use client";
import React from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const copyToClipboard = async (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast("Email is copied to clipboard.");
    });
  };
  return (
    <div className="text-white p-3 bg-black   z-10 bottom-0  px-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-1 hover:text-gray-400">
          <FaRegCopyright />

          <p className="">
            <a href="#">umesh joshi</a>
          </p>
        </div>
        <div className="flex items-center gap-1 hover:text-gray-400">
          <MdEmail />
          <div className="relative inline-block group cursor-pointer">
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Click to copy
            </div>

            {/* Clickable Text */}
            <p
              onClick={() => copyToClipboard("uj19343@gmail.com")}
              className="text-white "
            >
              uj19343@gmail.com
            </p>
          </div>
          {/* <p
            onClick={() => {
              copyToclipBoard("uj19343@gmail.com");
            }}
            className="hover:"
          >
            uj19343@gmail.com
          </p> */}
        </div>
        <div className="flex items-center gap-1 hover:text-gray-400">
          <IoMdContact />
          <p>
            <a href="#">+977 9849748294</a>
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
      <ToastContainer />
    </div>
  );
};

export default Footer;
