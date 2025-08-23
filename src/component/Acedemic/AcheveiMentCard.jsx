import React from "react";

const AcheveiMentCard = () => {
  return (
    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow space-y-3 md:space-y-4">
      <div>
        <li className="font-bold text-base sm:text-lg md:text-xl text-gray-800">
          Hackathon Winner
        </li>
        <p className="font-normal text-sm sm:text-base text-gray-600 mt-1">
          I participated in a Fullstack Web Development hackathon organized by
          the ANSFU Student Union. My team secured the first position in this
          program.
        </p>
      </div>

      <div>
        <li className="font-bold text-base sm:text-lg md:text-xl text-gray-800">
          Coding Competition Winner
        </li>
        <p className="font-normal text-sm sm:text-base text-gray-600 mt-1">
          I achieved second position in the coding competition during the
          college program.
        </p>
      </div>
    </div>
  );
};

export default AcheveiMentCard;
