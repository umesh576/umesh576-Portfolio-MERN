"use client";
import React from "react";
import ProjetCardThird from "@/component/project-details/ProjectThird";

const MyProject = () => {
  const projectDetails = [
    {
      images: [
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970379/uploads/1-1755970377194.png",
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970379/uploads/5-1755970377197.png",
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970419/uploads/7-1755970417463.png",
      ],
      name: "Job portal System",
      codefrontend: "https://github.com/umesh576/joblio-client-side",
      codeBackend: "https://github.com/umesh576/ManxeyKhojam",
    },
    {
      images: [
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970325/uploads/en1-1755970322846.jpg",
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970324/uploads/en2-1755970322848.jpg",
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970196/uploads/en3-1755970194437.jpg",
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970196/uploads/en4-1755970194436.jpg",
      ],
      name: "Engineering Consultancy Website",
      codefrontend: "https://github.com/umesh576/cosulatncy-client",
      codeBackend: "https://github.com/umesh576/cosultancy-server",
    },
    {
      images: [
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970787/uploads/ownbg-1755970785238.jpg",
        "https://res.cloudinary.com/dudpopk4h/image/upload/v1755970380/uploads/3-1755970378486.png",
        "/logo.png",
      ],
      name: "E-Commerce website",
      codefrontend: "https://github.com/umesh576/Ecommerce-client-side",
      codeBackend: "https://github.com/umesh576/Ecommerce-server-side",
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
