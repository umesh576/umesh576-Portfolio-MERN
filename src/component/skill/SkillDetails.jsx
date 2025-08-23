import React from "react";
import SkillCard from "./SkillCard";

const SkillDetails = () => {
  const skills = [
    {
      tech: "nodejs",
      description: "this is for web devlopment",
      projects: [
        { name: "job portal system", url: "http" },
        { name: "ecommerce", url: "http" },
        { name: "engineering website", url: "http" },
      ],
    },
    {
      tech: "java",
      description: "this is also for the web developmet",
      projects: [
        { name: "Service request system", url: "http" },
        { name: "Student management system", url: "http" },
      ],
    },
    {
      tech: "laravel",
      description: "this is for web developmet",
      projects: [{ name: "Tourish managemnt system", url: "http" }],
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20">
        {skills.map((skill, index) => {
          return <SkillCard skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillDetails;
