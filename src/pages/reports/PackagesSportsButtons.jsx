import React, { useState } from "react";
import ChipsReportHeader from "./ChipsReportHeader";
import MystatementPacckage from "./MystatementPacckage";
import MystatementSportsCasino from "./MystatementSportsCasino";

function PackagesSportsButtons() {
  const [activeMystatementButtons, setActiveMystatementButtons] = useState(1);
  const handleMystatement = (index) => {
    setActiveMystatementButtons(index);
  };
  const MYSTATEMENT_BUTTONS = [
    {
      buttonName: "Owner Reports",
    },
    {
      buttonName: "Chips Report",
    },
    {
      buttonName: "Packages",
    },
    {
      buttonName: "Sports/Casino",
    },
  ];
  return (
    <div className="sidebar-bg rounded p-3">
      <div className="row d-flex align-items-center">
        {MYSTATEMENT_BUTTONS?.map((item, index) => (
          <div
            className="col-2"
            key={index}
            onClick={() => handleMystatement(index)}
          >
            <div
              className={`medium-font accounts-box font-grey p-2  rounded-top text-center ${
                activeMystatementButtons === index ? "active" : ""
              }`}
            >
              {item.buttonName}
            </div>
          </div>
        ))}
        <div className="col-4  d-flex justify-content-end ">
          <div className="w-50 m-1">
            <select
              className="form-select-option w-100 rounded p-3 px-4 m-1 small-font"
              aria-label="Default select example"
            >
              <option selected>All</option>
              <option value="1">T Exch</option>
              <option value="1">We2Call</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="hr-line mt-2" />
      {activeMystatementButtons === 1 && <ChipsReportHeader />}
      {activeMystatementButtons === 2 && <MystatementPacckage />}
      {activeMystatementButtons === 3 && <MystatementSportsCasino />}

    </div>
  );
}

export default PackagesSportsButtons;
