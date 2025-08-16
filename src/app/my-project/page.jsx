"use client";
import React from "react";
import ProjectCard from "../../component/project-details/ProjectCard";
import Image from "next/image";

import SimpleSlider from "./../../component/projectImage/SimpleSlider";
const MyProject = () => {
  const project = [1, 2];
  const images = [
    { src: "/project/1.png", alt: "Project 1" },
    { src: "/project/2.png", alt: "Project 2" },
    { src: "/project/3.png", alt: "Project 3" },
    { src: "/project/4.png", alt: "Project 4" },
  ];
  return (
    <div className="">
      <div className="w-full">
        <div className="w-full text-4xl font-extrabold text-center py-10">
          <h1>My Project</h1>
        </div>
        <div className="p-10 text-black ">
          <div className="flex gap-30 flex-wrap justify-center">
            {/* <SimpleSlider images={images} />   */}
            {project.map((value, index) => {
              return <ProjectCard key={index} values={value} />;
            })}
          </div>
        </div>
        <div className="flex p-5 justify-center relative top-0 ">
          <button className="px-5 py-3 text-lg cursor-pointer rounded-lg  bg-black text-white hover:bg-white hover:text-black hover:border hover:font-bold">
            See more Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
