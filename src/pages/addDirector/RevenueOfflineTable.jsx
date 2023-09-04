import React from "react";
import TotalPaidBalanceTable from "./TotalPaidBalanceTable";
import { Images } from "../../images";
function RevenueOfflineTable(props) {
    const {we2callgameName} = props
  const purchaseboxes = [
    {
      header: <div className="d-flex align-items-center justify-content-between">
        <div>Standard</div>
        <img src={Images.Standard} className="diamond-img-size" />
      </div>,
      cssClass: "bal-bg-box box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: <div className="d-flex align-items-center justify-content-between">
      <div>Silver</div>
      <img src={Images.Silver} className="diamond-img-size" />
    </div>,
      cssClass: "total-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: <div className="d-flex align-items-center justify-content-between">
      <div>Gold</div>
      <img src={Images.Gold} className="diamond-img-size" />
    </div>,
      cssClass: "paid-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: <div className="d-flex align-items-center justify-content-between">
      <div>Diamond</div>
      <img src={Images.Diamond} className="diamond-img-size" />
    </div>,
      cssClass: "diamond-box-bg box-border-radius p-3",
      buytext: "Buy",
      buyvalue: "10000",
      saletext: "Sale",
      salevalue: "10000",
      baltext: "Bal",
      balvalue: "10000",
    },
    {
      header: <div className="d-flex align-items-center justify-content-between">
      <div>Vip</div>
      <img src={Images.Vip} className="diamond-img-size" />
    </div>,
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
                  <div className=" col" key={index}>
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
