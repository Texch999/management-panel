import React from "react";
import Table from "../table/Table";
// import { MdOutlineEdit } from "react-icons/md";
import AddSecurityPopup from "../Popups/AddSecurityPopup";
import { useEffect, useState } from "react";
import {
  GET_SETTINGS_DATA,
  SECURITY_QUESTIONS_ACTIVE_INACTIVE,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { MdOutlineEdit } from "react-icons/md";

function Securityquestions() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedOption, setSelectedOption] = useState("Active");
  const [status, setStatus] = useState(false);
  const [active, setActive] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  const cols = [
    {
      header: "QUESTIONS",
      field: "questions",
    },
    {
      header: "STATUS",
      field: "status",
    },
    {
      header: "Action",
      field: "icon",
    },
  ];
  const getAllSecurityQuestions = async () => {
    const payload = {
      p_id: "SECURITY_QUESTIONS",
    };
    await call(GET_SETTINGS_DATA, payload)
      .then((res) => {
        const responseArray = res?.data?.data;
        setAllQuestions(
          responseArray.length > 0
            ? responseArray.filter((item) => item.question !== "")
            : []
        );
      })
      .catch((err) => console.log(err));
  };
  const handleBlockUnBlock = async (item, currentActiveState) => {
    const payload = {
      s_id: item,
      active: !currentActiveState,
    };
    await call(SECURITY_QUESTIONS_ACTIVE_INACTIVE, payload)
      .then((res) => {
        if (res.status === 200) {
          setActive((prev) => !prev);
        }
        console.log(res, "res===>");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllSecurityQuestions();
  }, [active,status]);

  const modifiedSecurityquestionsDetails = allQuestions
    ?.filter((item) =>
      selectedOption === "Active"
        ? item?.active === true
        : item?.active === false
    )
    .map((item) => {
      return {
        questions: <div className="role-color">{item?.question}</div>,
        // status:
        //   item?.is_active === "Active" ? (
        //     <div className="font-green custom-active-button px-2">Active</div>
        //   ) : (
        //     <div className="custom-deactive-button px-2">InActive</div>
        //   ),
        status: (
          <div
            className={
              item?.active
                ? "font-green custom-active-button px-2"
                : "custom-deactive-button px-2"
            }
            onClick={() => handleBlockUnBlock(item?.s_id, item?.active)}
          >
            {item?.active ? "Active" : "InActive"}
          </div>
        ),
        icon: (
          <MdOutlineEdit
            className="eye-icon-size"
            onClick={() => {
              setSelectedQuestion(item);
              handleRejectionPopupOpen();
            }}
          />
        ),
      };
    });
  const [rejectPopupOpen, SetRejectpopupOpen] = useState(false);

  const handleRejectionPopupOpen = () => {
    SetRejectpopupOpen(true);
  };
  return (
    <div className="p-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className=" h6 font-grey px-2 p-2 m-1">Security Questions</h6>
        <div className=" d-flex justify-content-end align-items-center">
          <div className="containaer-fluid px-2 w-30"></div>
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
              onChange={handleSelectChange}
            >
              <option value="Active">Active</option>
              <option value="In-Active">In-active</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-100">
        <Table columns={cols} data={modifiedSecurityquestionsDetails} />
      </div>
      <AddSecurityPopup
        rejectPopupOpen={rejectPopupOpen}
        SetRejectpopupOpen={SetRejectpopupOpen}
        Heading={`${
          selectedQuestion
            ? "Update Security Questions"
            : "Add Security Questions"
        } `}
        firstSelect="Questions "
        firstTextarea="Description"
        setStatus={setStatus}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
      />
    </div>
  );
}

export default Securityquestions;
