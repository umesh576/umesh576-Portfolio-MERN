// ProjetCardThird.jsx
"use client";
import React, { useState } from "react";
import ImageCard from "../ImageCard";
import ViewCodeOption from "../ViewCodeOption";
import ViewDemo from "../ViewDemo";

const ProjetCardThird = ({ projectDetail }) => {
  const [viewOption, setViewOption] = useState(false);
  const [demo, setdemo] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 lg:p-8 relative">
      {/* Project Images */}
      <div className="w-full rounded-lg overflow-hidden">
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
        <button
          className="px-4 py-2 text-sm sm:text-base bg-black text-white rounded-lg cursor-pointer hover:bg-gray-300 hover:text-black transition duration-200"
          onClick={() => setdemo(true)}
        >
          See Demo
        </button>
        <button
          className="px-4 py-2 text-sm sm:text-base bg-gray-200 text-black rounded-lg hover:bg-gray-500 hover:text-white transition duration-200 hover:animate-pulse cursor-pointer"
          onClick={() => setViewOption(true)}
        >
          View Code
        </button>
      </div>

      {/* Modal */}
      {viewOption && (
        <ViewCodeOption
          onClose={() => setViewOption(false)}
          codeFrontend={projectDetail.codefrontend}
          codeBackend={projectDetail.codeBackend}
        />
      )}
      {demo && <ViewDemo onClose={() => setdemo(false)} />}
    </div>
  );
};

export default ProjetCardThird;
