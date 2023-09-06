import React, { useState } from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import AddReasonPopup from "../Popups/AddReasonPopup";

function Securityquestions() {
  const SECURITYQUESTIONS_DETAILS = [
    {
      questions: "What is your pet name?",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      questions: "What is your favorite color?",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      questions: "What is your favorite animal?",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      questions: "When is your birthday?",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
    {
      questions: "What is your favorite summer activity?",
      status: "Active",
      icon: <MdOutlineEdit className="eye-icon-size" />,
    },
  ];

  const cols = [
    {
      header: "QUESTIONS",
      field: "questions",
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

  const modifiedSecurityquestionsDetails = SECURITYQUESTIONS_DETAILS.map(
    (item) => ({
      ...item,
      questions: (
        <div className="role-color">
          <span className="role-color">{item?.questions}</span>{" "}
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
        <h6 className=" h6 font-grey px-2 p-2 m-1">Security Questions</h6>
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
          <div className="row justify-content-md-center m-2 p-1">
            <div
              onClick={() => handleRejectionPopupOpen()}
              className="active text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1"
            >
              +Add New
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            All Questions
          </div>
          <div className=" d-flex justify-content-between m-1 px-2">
            <select
              className="form-select-option w-100 rounded p-2 px-3 m-1 mx-2 small-font"
              aria-label="Default select example"
            >
              <option selected>Active</option>
              <option value="1">In-active</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-100">
        <Table columns={cols} data={modifiedSecurityquestionsDetails} />
      </div>
      <AddReasonPopup
        rejectPopupOpen={rejectPopupOpen}
        SetRejectpopupOpen={SetRejectpopupOpen}
        Heading="Add Security Questions"
        firstSelect="Questions "
        firstTextarea="Description"
      />
    </div>
  );
}

export default Securityquestions;
