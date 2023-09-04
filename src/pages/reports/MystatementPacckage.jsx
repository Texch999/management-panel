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
    <div className="p-4 w-100">
      <span className="th-color medium-font">My Statement</span>
      <div className="sidebar-bg rounded mt-1">
        <div className="d-flex justify-content-between align-items-center px-4">
          <span className="small-font th-color">My Statement</span>
          <div className="d-flex align-items-center justify-content-between w-40">
            <div className="accounts-box small-font p-2">Packages</div>
            <div className="accounts-box small-font p-2">Sports/Casino</div>
            <div className=" d-flex m-1">
              <select
                className="form-select-option w-100 rounded p-2 px-4 m-1 small-font"
                aria-label="Default select example"
              >
                <option selected>All</option>
                <option value="1">T Exch</option>
                <option value="1">We2Call</option>
              </select>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default MystatementPacckage;
