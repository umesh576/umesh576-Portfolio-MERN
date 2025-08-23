"use client";
import React from "react";
import ProjetCardThird from "@/component/project-details/ProjectThird";

const MyProject = () => {
  const projectDetails = [
    {
      images: ["/backgroung.jpg", "/bg.png", "/logo.png"],
      name: "E-Commerce website",
      codefrontend: "https://github.com/umesh576/Ecommerce-client-side",
      codeBackend: "https://github.com/umesh576/Ecommerce-server-side",
    },
    {
      images: ["/project/1.png", "/project/2.png", "/project/3.png"],
      name: "Job portal System",
      codefrontend: "https://github.com/umesh576/joblio-client-side",
      codeBackend: "https://github.com/umesh576/ManxeyKhojam",
    },
    {
      images: ["/en1.jpeg", "/en2.jpeg", "/en3.jpeg", "/en4.jpeg"],
      name: "Engineering Consultancy Website",
      codefrontend: "https://github.com/umesh576/cosulatncy-client",
      codeBackend: "https://github.com/umesh576/cosultancy-server",
    },
  ];

  return (
    <div className="py-8 md:py-12 lg:py-15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {projectDetails.map((projectDetail, index) => (
            <div key={index} className="w-full max-w-sm">
              <ProjetCardThird projectDetail={projectDetail} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
