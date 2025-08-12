import React, { useState } from "react";

const AceddemicCard = () => {
  const [isSee, setSee] = useState(false);
  const [level, setLevel] = useState(false);
  const [bachelor, setBachelor] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="font-normal">
            <li className="font-bold py-1">SEE</li>
            <p>
              I completed my see level from Khaptad vidya niketan with securing
              3.25gpa which is located in kailai chaukidada,Nepal.
            </p>
            <li className="font-bold py-1">+2 level</li>
            <p>
              I completed my +2 level from Awisharaya Vidya Niketan in science
              faculty.
            </p>
            <li className="font-bold py-1">Bachelor</li>
            <p>
              Currently I am Studying in Himalayan Whitejouse International
              Collage with pursing my degree in Bachelor of information and
              technology(BIT)
            </p>
          </div>
          <div>{isSee && <div>see level education</div>}</div>
          <div>{level && <div> +2 level edication</div>}</div>
          <div>{bachelor && <div>bachelor level education</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default AceddemicCard;
