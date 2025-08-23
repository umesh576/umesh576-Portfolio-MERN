"use client";
import SeeDetailsAcedemic from "@/component/SeeDetailsAcedemic";
import React from "react";
import Image from "next/image";
import LanguageComponmnet from "@/component/languageComp/LanguageComponmnet";
import DatabaseCard from "@/component/Database/DatabaseCard";

const AboutMe = () => {
  return (
    <div className="text-black py-6 md:py-10">
      {/* Main content section */}
      <div className="flex flex-col lg:flex-row p-4 md:p-15 gap-6 md:gap-8">
        {/* Image container */}
        <div className="rounded-lg w-full lg:w-1/2 flex justify-center">
          <Image
            src={"/ownbg.jpeg"}
            width={500}
            height={1000}
            alt="image"
            className="rounded-lg h-auto max-h-[500px] md:max-h-[600px] w-full object-cover"
          />
        </div>

        {/* Education content */}
        <div className="px-2 py-0 font-bold w-full lg:w-1/2">
          <div className="mb-4 md:mb-6">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-violet-600">
              Education And Certificate
            </h1>
          </div>
          <div>
            <SeeDetailsAcedemic />
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="p-2 md:p-4">
        <div className="p-2 md:p-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center">
            My Skill
          </h1>
        </div>
        <div className="p-4 md:p-6 lg:p-10">
          <LanguageComponmnet />
        </div>

        {/* Database section */}
        <div className="p-2 md:p-4">
          <div className="p-2 md:p-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center text-violet-500">
              Database
            </h1>
          </div>
          <div className="p-4 md:p-6 lg:p-10">
            <DatabaseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
