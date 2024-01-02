import React from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import AddReasonPopup from "../Popups/AddReasonPopup";
import { useEffect, useState } from "react";
import {
  GET_SETTINGS_DATA,
  REJECT_QUESTIONS_ACTIVE_INACTIVE  
} from "../../config/endpoints";
import { call } from "../../config/axios";

function Rejectionreason() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Active");
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);
  const [active, setActive] = useState(false);
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value; 
    console.log("selectedValue====>",selectedValue)
    setSelectedOption(selectedValue);
  };
  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = allQuestions.filter((res) =>
      res?.reason?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuestions(filteredSearchText);
  };

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
      field: "active",
    },
    {
      header: "Action",
      field: "icon",
    },
  ];
  const getAllRejectQuestions = async () => {
    const payload = {
      p_id: "REJECT-REASON",
    };
    await call(GET_SETTINGS_DATA, payload)
      .then((res) => {
        const responseArray = res?.data?.data;
        setAllQuestions(
          responseArray.length > 0
            ? responseArray.filter((item) => item.reason !== "")
            : []
        );
      })
      .catch((err) => console.log(err));
  };
  const handleBlockUnBlock = async (item,currentActiveState) => {
    const payload = {
      s_id: item,
      active: !currentActiveState,
    };
    await call(REJECT_QUESTIONS_ACTIVE_INACTIVE, payload)
      .then((res) => {
        if (res.status === 200) {
          setActive((prev) => !prev);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllRejectQuestions();
  }, [active,status]);


  const modifiedRejectionreasonDetails = searchText.length
    ? filteredQuestions
        .filter((item) =>
          selectedOption === "true"
            ? item?.active === true
            : item?.active === false
        )
        .filter((item) =>
          item?.reason?.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          if (item.reason !== "") {
            return {
              reason: <div className="role-color">{item?.reason}</div>,
              description: item?.description,
              active: (
                <div
                  className={
                    item?.active
                      ? "font-green custom-active-button px-2"
                      : "custom-deactive-button px-2"
                  }
                  onClick={() => handleBlockUnBlock(item?.s_id,item?.active)}
                >
                  {item?.active ? "Active" : "InActive"}
                </div>
              ),
              icon: <MdOutlineEdit className="eye-icon-size" />,
            };
          }
        })
    : allQuestions
        .filter((item) =>
          selectedOption === "true"
            ? item?.active === true
            : item?.active === false
        )
        .map((item) => {
          return {
            reason: <div className="role-color">{item?.reason}</div>,
            description: item?.description,
            active: (
              <div
                className={
                  item?.active
                    ? "font-green custom-active-button px-2"
                    : "custom-deactive-button px-2"
                }
                onClick={() => handleBlockUnBlock(item?.s_id,item?.active)}
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
        <h6 className="h6 font-grey px-2 p-2 m-1">Reason For Rejection</h6>
        <div className=" d-flex justify-content-end align-items-center">
          <div className="containaer-fluid px-2 w-30">
            <form className="d-flex" role="search">
              <input
                className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={(e) => searchContent(e.target.value)}
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
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value={"true"}>Active</option>
              <option value={"false"}>In-active</option>
            </select>
          </div>
        </div>

        <Table columns={cols} data={modifiedRejectionreasonDetails} />
      </div>
      <AddReasonPopup
        rejectPopupOpen={rejectPopupOpen}
        SetRejectpopupOpen={SetRejectpopupOpen}
        Heading={`${
          selectedQuestion
            ? "Update Reason"
            : "Add Reason"
        } `}
        firstSelect="Reason"
        firstTextarea="Description"
        setStatus={setStatus}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
      />
    </div>
  );
}

export default Rejectionreason;
