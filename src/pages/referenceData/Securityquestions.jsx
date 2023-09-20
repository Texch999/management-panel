import React from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import AddReasonPopup from "../Popups/AddReasonPopup";
import { useEffect, useState } from "react";
import { GET_ALL_SECURITY_QUESTIONS } from "../../config/endpoints";
import { call } from "../../config/axios";

function Securityquestions() {
  const [allQuestions, setAllQuestions] = useState([]); 
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Active");
  const [searchText,setSearchText]=useState("");
  const [status, setStatus] = useState(false);

const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  console.log("SELECT", selectedOption);

  

  // const SECURITYQUESTIONS_DETAILS = [
  //   {
  //     questions: "What is your pet name?",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     questions: "What is your favorite color?",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     questions: "What is your favorite animal?",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     questions: "When is your birthday?",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     questions: "What is your favorite summer activity?",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  // ];

const searchContent =(value) =>{
    setSearchText(value)
    const filteredSearchText= allQuestions.filter((res)=>
      res?.question?.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredQuestions(filteredSearchText)
}
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
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_SECURITY_QUESTIONS, payload)
      .then((res) => {
        console.log("response====>", res);
        setAllQuestions(res?.data?.data?.securityQuestions);
      })

      .catch((err) => console.log(err));
  };
  console.log("AllQuestions===>", allQuestions);
  useEffect(() => {
    getAllSecurityQuestions();
  }, [status]);
  
  console.log(filteredQuestions)
  console.log(allQuestions)

  // const modifiedSecurityquestionsDetails = allQuestions
  //   .filter((item) =>
  //     selectedOption === "Active"
  //       ? item?.is_active === 1
  //       : item?.is_active === 0
  //   )
  //   .map((item) => {
  //     return {
  //       questions: <div className="role-color">{item?.question}</div>,
  //       status:
  //         item?.is_active === 1 ? (
  //           <div className="font-green">Active</div>
  //         ) : (
  //           <div className="font-orange">InActive</div>
  //         ),
  //       icon: <MdOutlineEdit className="eye-icon-size" />,
  //     };
  //   });
  const modifiedSecurityquestionsDetails = searchText.length
  ? filteredQuestions
      .filter((item) =>
        selectedOption === "Active" ? item?.is_active === 1 : item?.is_active === 0
      )
      .filter((item) =>
        item?.question?.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((item) => {
        return {
          questions: <div className="role-color">{item?.question}</div>,
          status:
            item?.is_active === 1 ? (
              <div className="font-green">Active</div>
            ) : (
              <div className="font-orange">InActive</div>
            ),
          icon: <MdOutlineEdit className="eye-icon-size" />,
        };
      })
  : allQuestions
      .filter((item) =>
        selectedOption === "Active" ? item?.is_active === 1 : item?.is_active === 0
      )
      .map((item) => {
        return {
          questions: <div className="role-color">{item?.question}</div>,
          status:
            item?.is_active === 1 ? (
              <div className="font-green">Active</div>
            ) : (
              <div className="font-orange">InActive</div>
            ),
          icon: <MdOutlineEdit className="eye-icon-size" />,
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
          <div className="containaer-fluid px-2 w-30">
            <form className="d-flex" role="search">
              <input
                className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText} 
                onChange={(e)=> searchContent(e.target.value)}
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
              value={selectedOption}
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
      <AddReasonPopup
        rejectPopupOpen={rejectPopupOpen}
        SetRejectpopupOpen={SetRejectpopupOpen}
        Heading="Add Security Questions"
        firstSelect="Questions "
        firstTextarea="Description"
        setStatus={setStatus}
      />
    </div>
  );
}

export default Securityquestions;
