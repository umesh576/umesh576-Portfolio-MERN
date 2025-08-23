import React from "react";
import Image from "next/image";
import ProjectName from "../project/ProjectName";

const SkillCard = ({ skill }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
        {/* Image Section */}
        <div className="flex justify-center sm:justify-start">
          <div className="w-32 sm:w-40 md:w-48 lg:w-56">
            <Image
              src={"/logo.png"}
              alt="skill"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-4">
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            Tech stack:{" "}
            <span className="font-bold text-gray-900">{skill.tech}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Description: {skill.description}
          </p>

          {/* Projects */}
          <div className="flex flex-wrap gap-2 mt-3">
            {skill.projects.map((project, index) => (
              <ProjectName projects={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
