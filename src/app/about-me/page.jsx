"use client";
import Description from "@/component/Description";
import LazyLoad from "@/component/projectImage/ProjectImage";
import React from "react";

const AboutMe = () => {
  return (
    <div className="text-black ">
      <Description />
      <div>
        <h1>My Project</h1>
        <div>
          <div>
            <div className="">
              <div className="w-1/2">
                <LazyLoad />
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
