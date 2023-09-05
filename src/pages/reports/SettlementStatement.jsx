import React from "react";
import Table from "../table/Table";

function SettlementStatement() {
  const SETTLEMENTSTATEMENT_DETAILS = [
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      modeofpayment: "Phone pe",
      tilldaybalance: "100000000",
      settledamount: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      modeofpayment: "Phone pe",
      tilldaybalance: "100000000",
      settledamount: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      modeofpayment: "Phone pe",
      tilldaybalance: "100000000",
      settledamount: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      modeofpayment: "Phone pe",
      tilldaybalance: "100000000",
      settledamount: <div className="fa-fileinvo-doll-icon">50000</div>,
      balance: "75000.00",
    },
    {
        date: "01/08/2023 ",
        time: "11:46:00 AM",
        name: "Srinivas",
        role: "Director",
        modeofpayment: "Phone pe",
        tilldaybalance: "100000000",
        settledamount: <div className="fa-fileinvo-doll-icon">50000</div>,
        balance: "75000.00",
      },
      {
          date: "01/08/2023 ",
          time: "11:46:00 AM",
          name: "Srinivas",
          role: "Director",
          modeofpayment: "Phone pe",
          tilldaybalance: "100000000",
          settledamount: <div className="fa-fileinvo-doll-icon">50000</div>,
          balance: "75000.00",
        },
  ];

  const cols = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    {
      header: "Name & ROLE",
      field: "nameAndRole",
    },
    {
      header: "MODE OF PAYMENT",
      field: "modeofpayment",
    },

    {
      header: "TILL DAY BALANCE",
      field: "tilldaybalance",
    },

    {
      header: "SETTLED AMOUNT",
      field: "settledamount",
    },
    {
      header: "BALANCE",
      field: "balance",
    },
  ];

  const modifiedSettlementstatementDetails = SETTLEMENTSTATEMENT_DETAILS.map(
    (item) => ({
      ...item,
      nameAndRole: (
        <div>
          {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
      dateAndTime: (
        <div>
          {item?.date} <br /> <span>{item?.time}</span>{" "}
        </div>
      ),
      balance: (
        <div className="role-color">
          <span className="role-color">{item?.balance}</span>{" "}
        </div>
      ),
    })
  );
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Settlement Statement</h6>
      <div className="sidebar-bg rounded py-3 mt-1">
        <div>
          <Table columns={cols} data={modifiedSettlementstatementDetails} />
        </div>
      </div>
    </div>
  );
}

export default SettlementStatement;
