import React, { useState } from "react";

const AceddemicCard = () => {
  const [isSee, setSee] = useState(false);
  const [level, setLevel] = useState(false);
  const [bachelor, setBachelor] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div>
            <li>SEE</li>
            <p className="font-normal">
              I completed my see level from Khaptad vidya niketan located in
              kailai chaukidada,Nepal. Iscoredgit
            </p>
            <br />
            <li>+2 level</li>
            <br />
            <li>Bachelor</li>
            <br />
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
