import React, { useState } from "react";

const AceddemicCard = () => {
  const [isSee, setSee] = useState(false);
  const [level, setLevel] = useState(false);
  const [bachelor, setBachelor] = useState(false);
  return (
    <div>
      <div>
        <div className="P-10">
          <div>
            <li>
              <button>SEE</button>
            </li>
            <br />
            <li>
              <button>+2 level</button>
            </li>
            <br />
            <li>
              <button>Bachelor</button>
            </li>
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
