"use client";
import React from "react";
import ImageCard from "../ImageCard";
import { useRouter } from "next/navigation";

const ProjetCardThird = ({ projectDetail }) => {
  const projectLink = projectDetail.code;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 lg:p-8">
      {/* Project Images */}
      <div className="flex flex-wrap justify-center rounded-lg overflow-hidden">
        <ImageCard imagees={projectDetail.images} />
      </div>

      {/* Project Title */}
      <div className="mt-4">
        <h1 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
          Project Name:{" "}
          <span className="font-bold text-gray-900">{projectDetail.name}</span>
        </h1>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-5">
        <button className="px-4 py-2 text-sm sm:text-base bg-black text-white rounded-lg hover:bg-gray-300 hover:text-black transition duration-200">
          See Demo
        </button>
        <button className="px-4 py-2 text-sm sm:text-base bg-gray-200 text-black rounded-lg hover:bg-gray-500 hover:text-white transition duration-200 hover:animate-pulse">
          View Code
        </button>
      </div>
    </div>
  );
};

export default ProjetCardThird;
