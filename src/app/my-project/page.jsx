"use client";
import React from "react";
import ProjetCardThird from "@/component/project-details/ProjectThird";
// import ProjectSecond from "@/component/project-details/ProjectSecond";
const MyProject = () => {
  // const images = ["/backgroung.jpg", "/bg.png", "/logo.png"];
  const projectDetails = [
    {
      images: ["/backgroung.jpg", "/bg.png", "/logo.png"],
      name: "E-Commerce",
      code: "http://www.google.com",
    },
    {
      images: ["/project/1.png", "/project/2.png", "/project/3.png"],
      name: "Job portal System",
      code: "http://www.google.com",
    },
    {
      images: ["/backgroung.jpg", "/bg.png", "/logo.png"],
      name: "Library Management System",
      code: "http://www.google.com",
    },
  ];

  return (
    <div className="py-15">
      <div>
        <h1 className="text-center text-4xl font-bold">My project</h1>
        <div>
          <div className="flex justify-center gap-10 flex-wrap">
            {projectDetails.map((projectDetail, index) => {
              return (
                <ProjetCardThird projectDetail={projectDetail} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
