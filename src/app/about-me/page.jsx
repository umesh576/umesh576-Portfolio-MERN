"use client";
import Description from "@/component/Description";
import LazyLoad from "@/component/projectImage/ProjectImage";
import SimpleSlider from "@/component/projectImage/SimpleSlider";
import React from "react";

const AboutMe = () => {
  const images = [
    { src: "/project/1.png", alt: "Project 1" },
    { src: "/project/2.png", alt: "Project 2" },
    { src: "/project/3.png", alt: "Project 3" },
    { src: "/project/4.png", alt: "Project 4" },
  ];
  return (
    <div className="text-black ">
      <Description />
      <div>
        <div className="w-full text-4xl font-extrabold text-center py-10">
          <h1>My Project</h1>
        </div>
        <div className="p-10 text-black ">
          <div>
            <div className="">
              <div>
                <LazyLoad images={images} />
                {/* <SimpleSlider /> */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
