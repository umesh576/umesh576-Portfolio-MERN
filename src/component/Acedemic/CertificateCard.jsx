import React from "react";

const CertificateCard = () => {
  return (
    <div className="space-y-2 sm:space-y-3 md:space-y-4">
      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <li className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          MERN STACK
        </li>
        <p className="font-normal text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
          I completed my MERN stack training from Broadway Infosys. I gained
          knowledge about ReactJs, NextJs, MongoDB, Typescript, Javascript,
          NodeJs, ExpressJs.
        </p>
      </div>

      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <li className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          HackFest
        </li>
        <p className="font-normal text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
          I participated in the frontend HackFest at Himalayan Whitehouse
          College and got first position in the program.
        </p>
      </div>

      <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <li className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          Webinar
        </li>
        <p className="font-normal text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
          I also participated in a developer webinar where I got the opportunity
          to meet senior developers from many companies.
        </p>
      </div>
    </div>
  );
};

export default CertificateCard;
