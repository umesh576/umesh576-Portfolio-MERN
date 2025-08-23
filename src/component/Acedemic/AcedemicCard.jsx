import React, { useState } from "react";

const AceddemicCard = () => {
  const [isSee, setSee] = useState(false);
  const [level, setLevel] = useState(false);
  const [bachelor, setBachelor] = useState(false);

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow space-y-4 w-full max-w-2xl mx-auto">
      {/* SEE */}
      <div>
        <li className="font-bold text-base sm:text-lg lg:text-xl text-gray-800">
          SEE
        </li>
        <p className="font-normal text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
          I completed my SEE level from Khaptad Vidya Niketan, securing a 3.25
          GPA. It is located in Kailai Chaukidada, Nepal.
        </p>
      </div>

      {/* +2 Level */}
      <div>
        <li className="font-bold text-base sm:text-lg lg:text-xl text-gray-800">
          +2 Level
        </li>
        <p className="font-normal text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
          I completed my +2 level from Awisharaya Vidya Niketan in the Science
          faculty.
        </p>
      </div>

      {/* Bachelor */}
      <div>
        <li className="font-bold text-base sm:text-lg lg:text-xl text-gray-800">
          Bachelor
        </li>
        <p className="font-normal text-gray-600 mt-1 text-sm sm:text-base leading-relaxed">
          Currently, I am studying at Himalayan Whitehouse International
          College, pursuing my degree in Bachelor of Information Technology
          (BIT).
        </p>
      </div>
    </div>
  );
};

export default AceddemicCard;
