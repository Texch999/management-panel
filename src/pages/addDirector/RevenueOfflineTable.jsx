import React from "react";
import TotalPaidBalanceTable from "./TotalPaidBalanceTable";

function RevenueOfflineTable(props) {
    const {we2callgameName} = props
  const purchaseboxes = [
    {
      header: "Standard",
      cssClass: "bal-bg-box box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: "Silver",
      cssClass: "total-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: "Gold",
      cssClass: "paid-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: "Diamond",
      cssClass: "diamond-box-bg box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: "Vip",
      cssClass: "balance-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
  ];

  const totalboxes = [
    {
      header: "Total Amount",
      value: "10000",
    },
    {
      header: "Paid Amount",
      value: "10000",
    },
    {
      header: "Balance",
      value: "10000",
    },
    {
      header: "Send Reminder",
      value: "10000",
    },
  ];
  return (
    <div>
      <div className="px-3 mt-2">
        <div className="th-color w-fit-content rounded-pill sports-casino-bg-br small-font p-1 px-2">
        {we2callgameName}
        </div>
      </div>
      <div className="px-3 mt-1">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <div className="row">
              {purchaseboxes.map((item, index) => {
                return (
                  <div className="col" key={index}>
                    <div className="th-color small-font py-1">
                      {item.header}
                    </div>
                    <div
                      className={`${item.cssClass} text-white small-font p-2`}
                    >
                      <div className="d-flex justify-content-between">
                        <div>{item.buytext}</div>
                        <div>{item.buyvalue}</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>{item.saletext}</div>
                        <div>{item.salevalue}</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>{item.baltext}</div>
                        <div>{item.balvalue}</div>
                      </div>
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

export default RevenueOfflineTable;
