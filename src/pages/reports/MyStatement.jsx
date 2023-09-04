import React from "react";
import Table from "../table/Table";
import ChipsReportHeader from "./ChipsReportHeader";
import MystatementPacckage from "./MystatementPacckage";
import MystatementSportsCasino from "./MystatementSportsCasino";

function MyStatement() {
  
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">My Statement</h6>
      {/* <ChipsReportHeader/> */}
      {/* <MystatementPacckage/> */}
      <MystatementSportsCasino/>
    </div>
  );
}

export default MyStatement;
