import React from "react";
import Barchart from "./Barchart";
import Tours from "./Tours";
import Totalaccount from "../home/Totalaccount";
import Meetingshedule from "./Meetingshedule";
import AppStatus from "./AppStatus";

function Homepage() {
  return (
    <div className="p-4 h-100 overflow-auto ">
      <div className="p-0 mt-0">
        <Totalaccount />
      </div>
      <div className="row d-flex w-100">
        <div className="col-5 p-2">
          <Barchart></Barchart>
        </div>
        <div className="col-7 p-2">
          <Tours />
        </div>
      </div>
      <div className="row d-flex w-100 ">
        <div className="col-7 p-2">
          <AppStatus />
        </div>
        <div className="col-5 p-2 ">
          <Meetingshedule />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
