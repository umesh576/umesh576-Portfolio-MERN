import React from "react";
import Image from "next/image";
import ProjectName from "../project/ProjectName";

const SkillCard = ({ skill }) => {
  // console.log("skill", skill);
  return (
    <div>
      <div className="border  p-5">
        <div className="w-60">
          <Image src={"/logo.png"} alt="skill" width={1000} height={1000} />
        </div>
        <div>
          <h1 className="text-2xl ">
            Tech stack: <span className="font-bold">{skill.tech}</span>
          </h1>
          <p>Description: {skill.description}</p>
          <div className="flex">
            {skill.projects.map((project, index) => {
              return <ProjectName projects={project} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
