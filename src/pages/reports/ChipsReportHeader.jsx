import React from "react";
import Table from "../table/Table";

function ChipsReportHeader() {
  const MYSTATEMENT_DETAILS = [
    {
      name: "Srinivas",
      role: "EZUGI",
      loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
      totalamount: "10000",
      paidamount: "10000",
      balanceamount: <div className="red-text">0.00</div>,
      saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
      balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
      downlinebal: <div className="red-text">200000</div>,
    },
    {
      name: "Srinivas",
      role: "EZUGI",
      loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
      totalamount: "10000",
      paidamount: "10000",
      balanceamount: <div className="red-text">0.00</div>,
      saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
      balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
      downlinebal: <div className="red-text">200000</div>,
    },
    {
      name: "Srinivas",
      role: "EZUGI",
      loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
      totalamount: "10000",
      paidamount: "10000",
      balanceamount: <div className="red-text">0.00</div>,
      saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
      balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
      downlinebal: <div className="red-text">200000</div>,
    },
    {
      name: "Srinivas",
      role: "EZUGI",
      loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
      totalamount: "10000",
      paidamount: "10000",
      balanceamount: <div className="red-text">0.00</div>,
      saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
      balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
      downlinebal: <div className="red-text">200000</div>,
    },
    {
      name: "Srinivas",
      role: "EZUGI",
      loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
      totalamount: "10000",
      paidamount: "10000",
      balanceamount: <div className="red-text">0.00</div>,
      saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
      balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
      downlinebal: <div className="red-text">200000</div>,
    },
    {
      name: "Srinivas",
      role: "EZUGI",
      loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
      totalamount: "10000",
      paidamount: "10000",
      balanceamount: <div className="red-text">0.00</div>,
      saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
      balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
      downlinebal: <div className="red-text">200000</div>,
    },
  ];

  const cols = [
    {
      header: "COMPANY NAME",
      field: "nameAndRole",
    },
    {
      header: "LOADING CHIPS",
      field: "loadingchips",
    },

    {
      header: "TOTAL AMOUNT",
      field: "totalamount",
    },

    {
      header: "PAID AMOUNT",
      field: "paidamount",
    },
    {
      header: "BALANCE AMOUNT",
      field: "balanceamount",
    },
    {
      header: "SALES CHIPS",
      field: "saleschips",
    },
    {
      header: "BALANCE CHIPS",
      field: "balancechips",
    },
    {
      header: "DOWNLINE BAL CHIPS",
      field: "downlinebal",
    },
  ];

  const modifiedMystatementDetails = MYSTATEMENT_DETAILS.map((item) => ({
    ...item,
    nameAndRole: (
      <div>
        {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
      </div>
    ),
  }));
  return (
    <div>
      <Table columns={cols} data={modifiedMystatementDetails} />
    </div>
  );
}

export default ChipsReportHeader;
