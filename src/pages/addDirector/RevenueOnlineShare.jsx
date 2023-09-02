import React from "react";
import TotalPaidBalanceTable from "./TotalPaidBalanceTable";

function RevenueOnlineShare() {
  const sportsboxes = [
    {
      header: "Total Amount",
      cssClass: "total-cls box-border-radius p-3",
      text: "Total Amount",
      value: "10000",
    },
    {
      header: "Paid",
      cssClass: "paid-cls box-border-radius p-3",
      text: "Paid",
      value: "10000",
    },
    {
      header: "Balance",
      cssClass: "balance-cls box-border-radius p-3",
      text: "Balance",
      value: "10000",
    },
  ];

  return (
    <div>
      <div className="p-3">
        <div className="th-color w-fit-content rounded-pill sports-casino-bg-br small-font p-1 px-2">
          Sports & Casino
        </div>
      </div>
      <div className="p-2">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <div className="row">
              <div className="col ">
                <div className="th-color small-font py-1">Buy Chips</div>
                <div className="text-white small-font p-2 bal-bg-box box-border-radius">
                  <div className="d-flex justify-content-between">
                    <span>Buy</span>
                    <span>10000000</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Sale</span>
                    <span>5000000</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Bal</span>
                    <span>5000000</span>
                  </div>
                </div>
              </div>
              {sportsboxes.map((item, index) => {
                return (
                  <div className="col" key={index}>
                    <div className="th-color small-font py-1">
                      {item.header}
                    </div>
                    <div
                      className={`${item.cssClass} text-white small-font p-2`}
                    >
                      <div>{item.text}</div>
                      <div>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueOnlineShare;
