import React, { useState } from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import AddReasonPopup from "../Popups/AddReasonPopup";

function Rejectionreason() {
  const REJECTIONREASON_DETAILS = [
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      reason: "Insufficient Balance",
      description: "Not enough balance in Users account",
      status: "Active",
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
  const [rejectPopupOpen, SetRejectpopupOpen] = useState(false);
  const handleRejectionPopupOpen = () => {
    SetRejectpopupOpen(true);
  };
  return (
    <div className="p-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="h6 font-grey px-2 p-2 m-1">Reason For Rejection</h6>
        <div className=" d-flex justify-content-end align-items-center">
          <div className="containaer-fluid px-2 w-30">
            <form className="d-flex" role="search">
              <input
                className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="row m-2 p-1">
            <div
              className="active text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1"
              onClick={() => handleRejectionPopupOpen()}
            >
              +Add New
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            All Reason
          </div>
          <div className=" d-flex justify-content-between align-items-center m-1 px-2">
            <select
              className="form-select-option w-100 rounded p-2 px-3 m-1 mx-2 medium-font th-color"
              aria-label="Default select example"
            >
              <option selected>Active</option>
              <option value="1">In-active</option>
            </select>
          </div>
        </div>

        <Table columns={cols} data={modifiedRejectionreasonDetails} />
      </div>
      <AddReasonPopup
        rejectPopupOpen={rejectPopupOpen}
        SetRejectpopupOpen={SetRejectpopupOpen}
        Heading="Add Reason"
        firstSelect="Reason"
        firstTextarea="Description"
      />
    </div>
  );
}

export default Rejectionreason;
