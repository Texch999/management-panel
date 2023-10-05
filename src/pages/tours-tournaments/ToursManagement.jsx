import React, { useState } from "react";
import "./style.css";
import AddTours from "./AddTours";
import Schedule from "./Schedule";
import ManageTournament from "./ManageTournament";

function ToursManagement() {
  const [activeHead, setActiveHead] = useState("add");
  const handleToursHead = (item) => {
    setActiveHead(item);
  };
  return (
    <div className="tours-management-main p-3">
      <div className="row d-flex justify-content-between">
        <div className="col-3 d-flex justify-content-between">
          <div
            className={`${
              activeHead === "add" ? "active-head" : ""
            } medium-font tours-box  p-2  rounded-top text-center`}
            onClick={() => handleToursHead("add")}
          >
            Add TT
          </div>
          <div
            className={`${
              activeHead === "schedule" ? "active-head" : ""
            } medium-font tours-box  p-2  rounded-top text-center`}
            onClick={() => handleToursHead("schedule")}
          >
            Schedule TT
          </div>
        </div>
        <div className="col-2">
          <div
            className={`${
              activeHead === "manage" ? "active-head" : ""
            } medium-font tours-box  p-2  rounded-top text-center`}
            onClick={() => handleToursHead("manage")}
          >
            Manage Tours
          </div>
        </div>
      </div>
      {activeHead === "add" && <AddTours />}
      {activeHead === "schedule" && <Schedule />}
      {activeHead === "manage" && <ManageTournament />}
    </div>
  );
}

export default ToursManagement;
