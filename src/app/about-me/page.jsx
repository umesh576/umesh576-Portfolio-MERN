"use client";
import Description from "@/component/Description";
import ProjectCard from "@/component/project-details/ProjectCard";
import SeeDetailsAcedemic from "@/component/SeeDetailsAcedemic";
import SkillDetails from "@/component/skill/SkillDetails";
import React from "react";
import Image from "next/image";

const AboutMe = () => {
  const project = [1, 2];
  return (
    <div className="text-black w-full relative top-20 ">
      {/* <Description /> */}

      <div className="flex p-5">
        <div className="rounded-lg">
          <Image
            src={"/ownbg.jpeg"}
            width={500}
            height={1000}
            alt="image"
            className="rounded-lg h-100"
          />
        </div>
        <div className=" px-1 py-0  font-bold object-cover w-full">
          <div className="text-2xl">
            <h1 className="text-center text-violet-600">Education and skill</h1>
          </div>
          <div>
            <SeeDetailsAcedemic />
          </div>
        </div>
      </div>
      <div>
        <div className="p-4">
          <h1 className="text-6xl font-extrabold text-center">My Skill</h1>
        </div>
        <SkillDetails />
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
