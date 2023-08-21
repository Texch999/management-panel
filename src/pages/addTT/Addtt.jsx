import React from "react";
import TableHeader from "../table/TableHeader";
import Table from "../table/Table";

function Addtt() {
  const ADDTT_DETAILS = [
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "Approved",
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "Pending",
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "Rejected",
    },
    {
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      name: "Srinivas",
      role: "Director",
      trxid: "trx-id-2023062707",
      number: "4602133078",
      package: "Upgrade Package",
      pkgamnt: "- 20,000 (Monthly)",
      amount: "200000000",
      status: "New",
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
      header: "TRX ID",
      field: "trxid",
    },
    {
      header: "PACKAGE TRX",
      field: "package",
    },
    {
      header: "PAY AMOUNT",
      field: "pkgamnt",
    },
    {
      header: "STATUS",
      field: "status_icon",
    },
    {
      header: "",
      field: "status",
      clr: true,
    },
  ];

  const modifiedAddttDetails = ADDTT_DETAILS.map((item) => ({
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
  }));

  return (
    <div className="p-4 w-100">
      <h5 className="th-color">ADD TT</h5>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
          Add Owner Team Login for Broadcasing & Ads / Tours & Tournaments
          </div>
          <div className=" d-flex justify-conten-between">
            <div className="containaer-fluid px-2 w-20">
            <form className="d-flex" role="search">
            <input
              className="search-width m-1 mt-3 p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

          </form>
            </div>
          <div className="row justify-content-md-center m-2 p-1">
            
        <div className="active text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1">
          +ADD
        </div>
            </div>
          </div>
        </div>
        {/* <TableHeader /> */}
        <Table columns={cols} data={modifiedAddttDetails} />
      </div>
    </div>
  );
}

export default Addtt;
