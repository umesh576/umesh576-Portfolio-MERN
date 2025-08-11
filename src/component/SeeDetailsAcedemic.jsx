import React, { useState } from "react";
import AceddemicCard from "./Acedemic/AcedemicCard";

const SeeDetailsAcedemic = () => {
  const [acedemic, setacedemic] = useState(true);
  const [certification, setcertification] = useState(false);
  const [achivement, setachivement] = useState(false);
  const [partipation, setpartipation] = useState(false);

  return (
    <div>
      <div>
        <div className="flex gap-5 py-2 px-5  font-normal ">
          <button
            className="bg-gray-200 p-1 cursor-pointer rounded-t-lg hover:border-gray-700"
            onClick={() => {
              setacedemic(true);
              setcertification(false);
              setachivement(false);
              setpartipation(false);
            }}
          >
            Acedemic
          </button>
          <button
            className="bg-gray-200    cursor-pointer rounded-t-lg hover:border-gray-400"
            onClick={() => {
              setcertification(true);
              setacedemic(false);
              setachivement(false);
              setpartipation(false);
            }}
          >
            Certification
          </button>
          <button
            className="bg-gray-200    cursor-pointer rounded-t-lg hover:border-gray-400"
            onClick={() => {
              setachivement(true);
              setcertification(false);
              setacedemic(false);
              setpartipation(false);
            }}
          >
            Acheivements
          </button>
          <button
            className="bg-gray-200    cursor-pointer rounded-t-lg hover:border-gray-400"
            onClick={() => {
              setpartipation(true);
              setcertification(false);
              setachivement(false);
              setacedemic(false);
            }}
          >
            Partipation
          </button>
        </div>
        <div className="px-5">
          <hr />
          {acedemic && (
            <div>
              <AceddemicCard />
            </div>
          )}
          {certification && <div>certification</div>}
          {achivement && <div>achivements</div>}
          {partipation && <div>partipation</div>}
        </div>
      </div>
    </div>
  );
};

export default SeeDetailsAcedemic;
