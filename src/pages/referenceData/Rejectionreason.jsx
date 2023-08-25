import React from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";

function Rejectionreason() {
  const REJECTIONREASON_DETAILS = [
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Aactive",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Aactive",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Aactive",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Aactive",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Aactive",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
  ];

  const cols = [
    {
      header: "REASON",
      field: "reason",
    },
    {
      header: "DESCRIPTION",
      field: "description",
    },

    {
      header: "STATUS",
      field: "status",
      clr: true,
    },
    {
      header: "Action",
      field: "icon",
    },
  ];

  const modifiedRejectionreasonDetails = REJECTIONREASON_DETAILS.map(
    (item) => ({
      ...item,
      reason: (
        <div className="role-color">
          <span className="role-color">{item?.reason}</span>{" "}
        </div>
      ),
    })
  );

  return (
    <div className="p-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <div className=" small-font font-weight-bold px-2 p-2 m-1 th-color">
          Reason For Rejection
        </div>
        <div className=" d-flex justify-conten-between">
          <div className="containaer-fluid px-2 w-20">
            <form className="d-flex" role="search">
              <input
                className="search-width m-1 mt-3 p-2 text-white w-100 sidebar-bg borderr rounded small-font"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="row justify-content-md-center m-2 p-1">
            <div className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1">
              +Add New
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" small-font font-weight-bold px-2 p-2 m-1 th-color">
            All Reason
          </div>
          <div className=" d-flex justify-conten-between m-1 px-2">
            <select
              className="form-select-option w-100 rounded p-2 px-3 m-1 mx-2 small-font"
              aria-label="Default select example"
            >
              <option selected>Active</option>
              <option value="1">In-active</option>
            </select>
          </div>
        </div>

        <Table columns={cols} data={modifiedRejectionreasonDetails} />
      </div>
    </div>
  );
}

export default Rejectionreason;