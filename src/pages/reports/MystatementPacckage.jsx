import React from "react";
import Table from "../table/Table";

function MystatementPacckage() {
  const MYSTATEMENTPACKAGE_DETAILS = [
    {
      name: "Srinivas",
      role: "Owner",
      pkgsale: <div className="fa-fileinvo-doll-icon">500000</div>,
      receivedmount: "500000",
      balanceamount: "0.00",
      downlinepkgstock: <div className="red-text">200000</div>,
      totalsalehours: <div className="fa-fileinvo-doll-icon">400000</div>,
      receivedpayment: <div className="red-text">400000</div>,
      hbalamount: <div className="role-color">0.00</div>,
      downlinehourvalue: <div className="role-color">200000</div>,
    },
  ];

  const cols = [
    {
      header: "USER NAME/ROLE",
      field: "nameAndRole",
    },
    {
      header: "PKG SALE",
      field: "pkgsale",
    },

    {
      header: "RECEIVED AMOUNT",
      field: "receivedmount",
    },
    {
      header: "BALANCE AMOUNT",
      field: "balanceamount",
    },
    {
      header: "DOWNLINE PKG STOCK VALUE",
      field: "downlinepkgstock",
    },
    {
      header: "TOTAL SALE HOURS",
      field: "totalsalehours",
    },
    {
      header: "RECEIVED PAYMENT",
      field: "receivedpayment",
    },
    {
      header: "H BALANCE AMOUNT",
      field: "hbalamount",
    },
    {
      header: "DOWNLINE HOUR VALUE",
      field: "downlinehourvalue",
    },
  ];

  const modifiedMystatementpackageDetails = MYSTATEMENTPACKAGE_DETAILS.map(
    (item) => ({
      ...item,
      nameAndRole: (
        <div>
          {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
    })
  );
  return (
    <div>

        <div>
          <Table columns={cols} data={modifiedMystatementpackageDetails} />
        </div>
        <div className="th-color w-100 small-font p-3 d-flex justify-content-between">
          <div className="w-25">
            <div className="row">
              <div className="col">Total Sale Pkg Hours</div>
              <div className="col">900000</div>
            </div>
            <div className="row">
              <div className="col">Total Received Amount</div>
              <div className="col">900000</div>
            </div>
            <div className="row">
              <div className="col">Balance Amount</div>
              <div className="col">0.00</div>
            </div>
            <div className="row">
              <div className="col">Total P/L</div>
              <div className="col fa-fileinvo-doll-icon">900000</div>
            </div>
          </div>
          <div className="w-25 d-flex align-items-end justify-content-end">
            <div className="row">
              <div className="col">Total Downline Pkg+Hours</div>
              <div className="col red-text">400000</div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default MystatementPacckage;
