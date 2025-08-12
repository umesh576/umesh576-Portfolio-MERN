"use client";
import SeeDetailsAcedemic from "@/component/SeeDetailsAcedemic";
import SkillDetails from "@/component/skill/SkillDetails";
import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="text-black w-full relative top-20 ">
      {/* <Description /> */}

      <div className="flex p-15 gap-20 w-full justify-center ">
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
          <div className="">
            <h1 className="text-center text-5xl text-violet-600 ">
              Education And Certificate
            </h1>
          </div>
          <div className="relative top-2">
            <SeeDetailsAcedemic />
          </div>
        </div>
      </div>
      <div>
        <div className="p-4">
          <h1 className="text-5xl font-extrabold text-center">My Skill</h1>
        </div>
        <SkillDetails />
      </div>
    </div>
  );
};

export default AboutMe;
