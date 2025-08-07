import React from "react";
import SimpleSlider from "../projectImage/SimpleSlider";

const ProjectCard = ({ values }) => {
  const images = [
    { src: "/project/1.png", alt: "Project 1" },
    { src: "/project/2.png", alt: "Project 2" },
    { src: "/project/3.png", alt: "Project 3" },
    { src: "/project/4.png", alt: "Project 4" },
  ];
  return (
    <div className="w-1/3 shadow-lg shadow-black/50">
      <div className=" w-full   ">
        <SimpleSlider images={images} />
        <div className="py-4 px-2">
          <div>
            <p>This project is about the job portal system</p>
          </div>
        </div>
        <div className="p-2 flex justify-center gap-5">
          <button className="cursor-pointer px-4 py-3 shadow-md shadow-white bg-black text-white rounded-lg">
            Visit project
          </button>
          <button className="shadow-md shadow-black  px-4 py-3 rounded-lg cursor-pointer">
            Get code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
