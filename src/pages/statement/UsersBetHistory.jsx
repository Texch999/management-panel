import React, { useState } from "react";
import BetStatusTable from "./BetStatusTable";

function UsersBetHistory() {
  const [useHistoryButtons, setUseHistoryButtons] = useState(0);
  const handleUseHistoryButtons = (index) => {
    setUseHistoryButtons(index);
  };
  const USE_HISTORY_BUTTONS = [
    {
      btnName: "Exchange",
    },
    {
      btnName: "Fancy Bet",
    },
    {
      btnName: "Fancy 1 Bet",
    },
    {
      btnName: "Toss",
    },
    {
      btnName: "Casino Bet",
    },
    {
      btnName: "SportsBook",
    },
    {
      btnName: "BookMaker",
    },
    {
      btnName: "Premium",
    },
  ];
  return (
    <div>
      <div className="row w-90 px-3 pt-3">
        {USE_HISTORY_BUTTONS?.map((item, index) => (
          <div
            className="col"
            key={index}
            onClick={() => handleUseHistoryButtons(index)}
          >
            <div
              className={`package-btn-bg medium-font font-white rounded-top p-2 text-center ${
                useHistoryButtons === index ? "blue-btn" : ""
              }`}
            >
              {item.btnName}
            </div>
          </div>
        ))}
      </div>
      <hr className="hr-line" />
      {useHistoryButtons === 0 && <BetStatusTable />}
    </div>
  );
}

export default UsersBetHistory;
