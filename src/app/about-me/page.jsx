"use client";
import Description from "@/component/Description";
import ProjectCard from "@/component/project-details/ProjectCard";
import SeeDetailsAcedemic from "@/component/SeeDetailsAcedemic";
import React from "react";

const AboutMe = () => {
  const project = [1, 2];
  return (
    <div className="text-black w-full relative top-20 ">
      <Description />

      <div>
        <div className="text-center px-1 py-3 text-3xl font-bold">
          <h1>Education and skill</h1>
        </div>
        <SeeDetailsAcedemic />
      </div>
      <div className="w-full">
        <div className="w-full text-4xl font-extrabold text-center py-10">
          <h1>My Project</h1>
        </div>
        <div className="p-10 text-black ">
          <div className="flex gap-30 flex-wrap justify-center">
            {/* <SimpleSlider images={images} /> */}
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

export default AboutMe;
