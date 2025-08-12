import React from "react";
import { DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";

const DatabaseCard = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center gap-20 p-3">
          <div className="p-5 cursor-pointer ">
            <DiMongodb className="size-50 p-5 shadow-lg shadow-black rounded-full text-green-500  hover:animate-bounce " />
            <p className="text-lg text-center py-1">MongoDB</p>
          </div>
          <div className="p-5 cursor-pointer ">
            <TbBrandMysql className="size-50 p-5 shadow-lg shadow-black rounded-full text-blue-500 hover:animate-bounce " />
            <p className="text-lg text-center py-1">MySql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseCard;
