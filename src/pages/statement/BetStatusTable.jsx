import React from "react";
import Table from "../table/Table";

function BetStatusTable() {
  const BET_STATUS_ROW_DATA = [
    {
      betID: (
        <div className="d-flex flex-column">
          <div>4F5H6JUK</div>
          <div className="role-color">User2</div>
        </div>
      ),
      market: "Cricket, India vs Srilanka Odds",
      selection: "Wirewickshare",
      type: "LAY",
      betPlace: "11/08/2023 05:38",
      oddsReg: <div className="role-color">1.31</div>,
      stack: <div className="role-color">4</div>,
      avgOdds: <div className="role-color">1.31</div>,
      profitLoss: <div className="font-green">10000000</div>,
    },
    {
      betID: (
        <div className="d-flex flex-column">
          <div>4F5H6JUK</div>
          <div className="role-color">User2</div>
        </div>
      ),
      market: "Cricket, India vs Srilanka Odds",
      selection: "Wirewickshare",
      type: "LAY",
      betPlace: "11/08/2023 05:38",
      oddsReg: <div className="role-color">1.31</div>,
      stack: <div className="role-color">4</div>,
      avgOdds: <div className="role-color">1.31</div>,
      profitLoss: <div className="font-green">10000000</div>,
    },
    {
      betID: (
        <div className="d-flex flex-column">
          <div>4F5H6JUK</div>
          <div className="role-color">User2</div>
        </div>
      ),
      market: "Cricket, India vs Srilanka Odds",
      selection: "Wirewickshare",
      type: "BACK",
      betPlace: "11/08/2023 05:38",
      oddsReg: <div className="role-color">1.31</div>,
      stack: <div className="role-color">4</div>,
      avgOdds: <div className="role-color">1.31</div>,
      profitLoss: <div className="font-green">10000000</div>,
    },
  ];
  const BET_STATUS_COLUMN_DATA = [
    {
      header: "Bet ID/PL ID",
      field: "betID",
    },
    {
      header: "MARKET",
      field: "market",
    },
    {
      header: "SELECTION",
      field: "selection",
    },
    {
      header: "TYPE",
      field: "type",
    },
    {
      header: "BET PLACE",
      field: "betPlace",
    },
    {
      header: "ODDS REG",
      field: "oddsReg",
    },
    {
      header: "STACK",
      field: "stack",
    },
    {
      header: "AVG-ODDS MATCHED",
      field: "avgOdds",
    },
    {
      header: "PROFIT/LOSS",
      field: "profitLoss",
    },
  ];
  return (
    <div>
      <div className="p-3">
        <div className="row">
          <div className="col-3 font-grey medium-font d-flex">
            <div className="w-50 p-2">Bet Status</div>
            <div className="w-50 p-2">Period</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <select className="w-100 select-bg medium-font font-white rounded p-2">
              <option>Settled</option>
              <option>Won</option>
              <option>Draw</option>
            </select>
          </div>
          <div className="col">
            <input
              className="select-bg medium-font font-white rounded p-2 text-uppercase"
              type="date"
            />
          </div>
          <div className="col">
            <input
              placeholder="Time"
              className="select-bg medium-font font-white rounded p-2 text-center"
              type="time"
            />
          </div>
          <div className="col">
            <input
              className="select-bg medium-font font-white rounded p-2 text-uppercase"
              type="date"
            />
          </div>
          <div className="col">
            <input
              placeholder="Time"
              className="select-bg medium-font font-white rounded p-2 text-center"
              type="time"
            />
          </div>
          <div className="col">
            <div className="select-bg medium-font font-white rounded p-2 text-center">
              Just For Today
            </div>
          </div>
          <div className="col">
            <div className="select-bg medium-font font-white rounded p-2 text-center">
              From Yesterday
            </div>
          </div>
          <div className="col">
            <div className="active medium-font font-white rounded p-2 text-center">
              Get History
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table data={BET_STATUS_ROW_DATA} columns={BET_STATUS_COLUMN_DATA} />
        <div className="th-color d-flex align-items-center justify-content-center">
          TOTAL
        </div>
        <div className="th-color d-flex align-items-center justify-content-center">
          PAGINATION
        </div>
      </div>
    </div>
  );
}

export default BetStatusTable;
