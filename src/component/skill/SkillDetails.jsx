import React from "react";
import SkillCard from "./SkillCard";
import { xxx } from "next/server";

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
    <div className="px-6 py-3">
      <div className="flex gap-20 hover:transform-view">
        {skills.map((skill, index) => {
          return <SkillCard skill={skill} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillDetails;
