"use client";
import SeeDetailsAcedemic from "@/component/SeeDetailsAcedemic";
import SkillDetails from "@/component/skill/SkillDetails";
// import SkillCard from "@/component/skill/SkillCard";
import React from "react";
import Image from "next/image";
import LanguageComponmnet from "@/component/languageComp/LanguageComponmnet";
import DatabaseCard from "@/component/Database/DatabaseCard";

const AboutMe = () => {
  return (
    <div className="text-black  py-10">
      <div className="flex p-15 ">
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
          <div className=" ">
            <SeeDetailsAcedemic />
          </div>
        </div>
      </div>
      <div className="p-1 ">
        <div className="p-4">
          <h1 className="text-5xl font-extrabold text-center">My Skill</h1>
        </div>
        <div className="">
          <div className="p-10 ">
            <LanguageComponmnet />
          </div>
        </div>
        <div className="p-1">
          <div className="p-4">
            <h1 className="text-3xl font-extrabold text-center text-violet-500">
              Database
            </h1>
          </div>
          <div className="p-10">
            <DatabaseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
