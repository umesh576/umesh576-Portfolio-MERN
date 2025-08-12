import React, { useState } from "react";
import AceddemicCard from "./Acedemic/AcedemicCard";
import CertificateCard from "./Acedemic/CertificateCard";
import AcheveiMentCard from "./Acedemic/AcheveiMentCard";
import ParticipationCard from "./Acedemic/ParticipationCard";

const SeeDetailsAcedemic = () => {
  const [acedemic, setacedemic] = useState(true);
  const [certification, setcertification] = useState(false);
  const [achivement, setachivement] = useState(false);
  const [partipation, setpartipation] = useState(false);

  return (
    <div>
      <div>
        <div className="flex gap-5 py-2 px-5  font-normal ">
          <div>
            <button
              className="bg-gray-200 p-1 cursor-pointer font-bold hover:border-gray-700"
              onClick={() => {
                setacedemic(true);
                setcertification(false);
                setachivement(false);
                setpartipation(false);
              }}
            >
              Academic
            </button>
            {acedemic && <div className="bg-red-600 h-1  animate-bounce"></div>}
          </div>
          <div>
            <button
              className="bg-gray-200 p-1 cursor-pointer font-bold hover:border-gray-700"
              onClick={() => {
                setcertification(true);
                setacedemic(false);
                setachivement(false);
                setpartipation(false);
              }}
            >
              Certification
            </button>{" "}
            {certification && (
              <div className="bg-red-600 h-1  animate-bounce"></div>
            )}
          </div>
          <div>
            <button
              className="bg-gray-200 p-1 cursor-pointer font-bold hover:border-gray-700"
              onClick={() => {
                setachivement(true);
                setcertification(false);
                setacedemic(false);
                setpartipation(false);
              }}
            >
              Acheivements
            </button>
            {achivement && (
              <div className="bg-red-600 h-1  animate-bounce"></div>
            )}
          </div>
          <div>
            <button
              className="bg-gray-200 p-1 cursor-pointer font-bold hover:border-gray-700"
              onClick={() => {
                setpartipation(true);
                setcertification(false);
                setachivement(false);
                setacedemic(false);
              }}
            >
              Partipation
            </button>
            {partipation && (
              <div className="bg-red-600 h-1  animate-bounce"></div>
            )}
          </div>
        </div>
        <div className="px-5">
          <hr />
          {acedemic && (
            <div>
              <AceddemicCard />
            </div>
          )}
          {certification && (
            <div>
              <CertificateCard />
            </div>
          )}
          {achivement && (
            <div>
              <AcheveiMentCard />
            </div>
          )}
          {partipation && (
            <div>
              <ParticipationCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeeDetailsAcedemic;
