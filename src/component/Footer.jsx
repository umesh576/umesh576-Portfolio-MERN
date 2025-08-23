"use client";
import React from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const copyToClipboard = async (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Email is copied to clipboard.");
    });
  };

  return (
    <div className="text-white bg-black w-full">
      <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center py-4 px-4 sm:px-6 lg:px-12 gap-3">
        {/* Copyright */}
        <div className="flex items-center gap-1 hover:text-gray-400">
          <FaRegCopyright />
          <p>
            <a href="#" className="text-white hover:underline">
              umesh joshi
            </a>
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-1 hover:text-gray-400">
          <MdEmail />
          <div className="relative inline-block group cursor-pointer">
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Click to copy
            </div>
            <p
              onClick={() => copyToClipboard("uj19343@gmail.com")}
              className="text-white text-sm sm:text-base hover:underline"
            >
              uj19343@gmail.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-1 hover:text-gray-400">
          <IoMdContact />
          <p className="text-sm sm:text-base">
            <a href="tel:+9779849748294" className="hover:underline">
              +977 9849748294
            </a>
          </p>
        </div>

        {/* Resume Button */}
        <div className="flex items-center gap-1">
          <a href="/cv.pdf" download>
            <button className="px-3 py-2 text-sm sm:text-base bg-white text-black rounded-lg shadow-md shadow-gray-300 cursor-pointer hover:translate-y-[-2px] transition-transform duration-200">
              View Resume
            </button>
          </a>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Footer;
