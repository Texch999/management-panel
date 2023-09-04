import React from "react";
import Table from "../table/Table";
import { BiFile } from "react-icons/bi";

function Settlement() {
  const SETTLEMENT_DETAILS = [
    {
      username: "Srinivas",
      roleposition: "Director",
      amount: "100000",
      creditdebit: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
      icon: <BiFile className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      roleposition: "Director",
      amount: "100000",
      creditdebit: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
      icon: <BiFile className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      roleposition: "Director",
      amount: "100000",
      creditdebit: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
      icon: <BiFile className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      roleposition: "Director",
      amount: "100000",
      creditdebit: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
      icon: <BiFile className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      roleposition: "Director",
      amount: "100000",
      creditdebit: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
      icon: <BiFile className="eye-icon-size" />,
    },
  ];

  const cols = [
    {
      header: "USER NAME",
      field: "username",
    },

    {
      header: "ROLE/POSITION",
      field: "roleposition",
    },

    {
      header: "Amount",
      field: "amount",
    },
    {
      header: "Credit/Debit",
      field: "creditdebit",
    },
    {
      header: "BALANCE",
      field: "balance",
    },
    {
      header: "",
      field: "icon",
    },
  ];

  const modifiedSettlementDetails = SETTLEMENT_DETAILS.map((item) => ({
    ...item,
    roleposition: (
      <div className="role-color">
        <span className="role-color">{item?.roleposition}</span>{" "}
      </div>
    ),
    balance: (
      <div className="role-color">
        <span className="role-color">{item?.balance}</span>{" "}
      </div>
    ),
  }));
  return (
    <div className="p-4 w-100">
      <span className="th-color medium-font">Settlement</span>
      <div className="sidebar-bg rounded">
        <div className="d-flex flex-column">
          <div className=" small-font font-weight-bold px-2 p-2 m-1 th-color">
            Account Summary
          </div>
          <div className="medium-font d-flex justify-content-between w-50 px-3 py-2">
            <div className="accounts-box d-flex flex-column p-1 px-3 m-2">
              <span>Total Amount</span>
              <span className="role-color">100000000.00</span>
            </div>
            <div className="accounts-box d-flex flex-column p-1 px-3 m-2">
              <span>Total Settled Bal C/D</span>
              <span className="role-color">100000000.00</span>
            </div>
            <div className="accounts-box d-flex flex-column p-1 px-3 m-2">
              <span>Total Balance</span>
              <span className="role-color">100000000.00</span>
            </div>
          </div>
        </div>
        <div>
          <Table columns={cols} data={modifiedSettlementDetails} />
        </div>
      </div>
    </div>
  );
}

export default Settlement;
