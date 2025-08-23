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
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-5 mb-4 font-normal">
        <div className="flex flex-col items-center">
          <button
            className={`px-3 py-1 font-bold rounded-md transition ${
              acedemic
                ? "bg-red-600 text-white"
                : "bg-gray-200 hover:border-gray-700"
            }`}
            onClick={() => {
              setacedemic(true);
              setcertification(false);
              setachivement(false);
              setpartipation(false);
            }}
          >
            Academic
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={`px-3 py-1 font-bold rounded-md transition ${
              certification
                ? "bg-red-600 text-white"
                : "bg-gray-200 hover:border-gray-700"
            }`}
            onClick={() => {
              setcertification(true);
              setacedemic(false);
              setachivement(false);
              setpartipation(false);
            }}
          >
            Certification
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={`px-3 py-1 font-bold rounded-md transition ${
              achivement
                ? "bg-red-600 text-white"
                : "bg-gray-200 hover:border-gray-700"
            }`}
            onClick={() => {
              setachivement(true);
              setcertification(false);
              setacedemic(false);
              setpartipation(false);
            }}
          >
            Achievements
          </button>
        </div>

        <div className="flex flex-col items-center">
          <button
            className={`px-3 py-1 font-bold rounded-md transition ${
              partipation
                ? "bg-red-600 text-white"
                : "bg-gray-200 hover:border-gray-700"
            }`}
            onClick={() => {
              setpartipation(true);
              setcertification(false);
              setachivement(false);
              setacedemic(false);
            }}
          >
            Participation
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="px-2 sm:px-0">
        <hr className="border-gray-300" />
      </div>

      {/* Content */}
      <div className="mt-4 px-2 sm:px-0">
        {acedemic && <AceddemicCard />}
        {certification && <CertificateCard />}
        {achivement && <AcheveiMentCard />}
        {partipation && <ParticipationCard />}
      </div>
    </div>
  );
};

export default SeeDetailsAcedemic;
