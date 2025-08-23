import React from "react";
import { DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";

const DatabaseCard = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-20 p-3">
          <div className="p-3 sm:p-4 md:p-5 cursor-pointer">
            <DiMongodb className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-3 sm:p-4 md:p-5 shadow-lg shadow-black rounded-full text-green-500 hover:animate-bounce" />
            <p className="text-base sm:text-lg md:text-xl text-center py-1">
              MongoDB
            </p>
          </div>
          <div className="p-3 sm:p-4 md:p-5 cursor-pointer">
            <TbBrandMysql className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-3 sm:p-4 md:p-5 shadow-lg shadow-black rounded-full text-blue-500 hover:animate-bounce" />
            <p className="text-base sm:text-lg md:text-xl text-center py-1">
              MySql
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseCard;
