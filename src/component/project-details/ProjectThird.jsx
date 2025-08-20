"use client";
import React from "react";
import ImageCard from "../ImageCard";
import { toast } from "react-toastify";
const ProjetCardThird = ({ projectDetail }) => {
  return (
    <div>
      <div>
        <div className="py-2">
          <div className="flex flex-wrap justify-center">
            {/* {projectDetail.images.map((image, index) => { */}
            {/* return */}
            <ImageCard imagees={projectDetail.images} />;{/* })} */}
          </div>
        </div>
        <div>
          <h1 className="text-center p-0 text-3xl">
            Project Name:
            <span className="font-bold">{projectDetail.name}</span>
          </h1>
        </div>
        <div className="flex justify-center gap-2 p-2">
          <button className="px-3 py-2 bg-black text-white text-lg rounded-lg hover:bg-gray-300 cursor-pointer  hover:text-black">
            See demo
          </button>
          <button className="px-3 py-2 bg-gray-200 text-black text-lg rounded-lg hover:bg-gray-500 cursor-pointer  hover:text-black hover:animate-pulse">
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjetCardThird;
