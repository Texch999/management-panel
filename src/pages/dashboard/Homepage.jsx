import React from "react";
import Barchart from "./Barchart";
import Tours from "./Tours";
import Totalaccount from "../home/Totalaccount";
import Meetingshedule from "./Meetingshedule";
import AppStatus from "./AppStatus";

function Homepage() {
  return (
    <div className="p-3">
      <div className="container p-0 mt-0">
        <Totalaccount />
      </div>
      <div className="row d-flex w-100 h-100">
        <div className="col-5 p-2  h-50">
          <Barchart></Barchart>
        </div>
        <div className="col-7 p-2 h-75">
          <Tours />
        </div>
      </div>
      <div className="row d-flex w-100 h-100">
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
