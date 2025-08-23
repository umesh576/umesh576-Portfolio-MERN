import React from "react";

const ParticipationCard = () => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow space-y-4 w-full max-w-2xl mx-auto">
      {/* Hackathon Winner */}
      <div>
        <li className="font-bold text-base sm:text-lg lg:text-xl text-gray-800">
          Hackathon Winner
        </li>
        <p className="font-normal text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
          I participated in a Fullstack Web Development hackathon organized by
          the ANSFU Student Union. My team secured the first position in this
          program.
        </p>
      </div>

      {/* Coding Competition Winner */}
      <div>
        <li className="font-bold text-base sm:text-lg lg:text-xl text-gray-800">
          Coding Competition Winner
        </li>
        <p className="font-normal text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
          I achieved second position in the coding competition during the
          college program.
        </p>
      </div>
    </div>
  );
};

export default ParticipationCard;
