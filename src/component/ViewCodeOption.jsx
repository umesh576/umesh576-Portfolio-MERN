"use client";
import React from "react";

const ViewCodeOption = ({ onClose, codeFrontend, codeBackend }) => {
  return (
    // Full-screen overlay
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose} // close modal if clicking outside
    >
      {/* Modal content */}
      <div
        className="bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded-xl shadow-lg flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          className="self-end text-gray-600 hover:text-gray-900 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <a href={codeFrontend}>Frontend</a>
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <a href={codeBackend}>Backend</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCodeOption;
