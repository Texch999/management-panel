import React from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";

function Appstatus() {
  const APPSTATUS_DETAILS = [
    {
      customer: "jantha",
      region: "India",
      amount: "1200000",
      balance: "1200000",
      name: "We2Call",
      role: "SA",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      customer: "jantha",
      region: "India",
      amount: "56000",
      balance: "56000",
      name: "T Exch",
      role: "Director",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      customer: "jantha",
      region: "India",
      amount: "300000",
      balance: "300000",
      name: "Ravana",
      role: "Director",
      status: "In-active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      customer: "jantha",
      region: "India",
      amount: "1200000",
      balance: "1200000",
      name: "Bangla Calling",
      role: "Director",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      customer: "jantha",
      region: "India",
      amount: "56000",
      balance: "56000",
      name: "T Exch",
      role: "Director",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
  ];

  const cols = [
    {
      header: "CUSTOMER",
      field: "customer",
    },

    {
      header: "REGION",
      field: "region",
    },
    {
      header: "AMOUNT",
      field: "amount",
      clr: true,
    },
    {
      header: "BALANCE",
      field: "balance",
    },
    {
      header: "ROLE",
      field: "nameAndRole",
    },
    {
      header: "STATUS",
      field: "status",
      clr: true,
    },
    {
      header: "ACTION",
      field: "icon",
    },
  ];

  const modifiedAppstatusDetails = APPSTATUS_DETAILS.map((item) => ({
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
    <div className="p-2 w-100 sidebar-bg rounded ">
      <div className="sidebar-bg rounded py-1">
        <Table columns={cols} data={modifiedAppstatusDetails} />
      </div>
    </div>
  );
}

export default Appstatus;
