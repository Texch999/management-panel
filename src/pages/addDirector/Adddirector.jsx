import React, { useState } from "react";
import Table from "../table/Table";
import Totalaccount from "../home/Totalaccount";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";
import { LuFileClock } from "react-icons/lu";
import { TbFileText } from "react-icons/tb";
import AddDirectorsPopup from "../Popups/AddDirectorsPopup";
function Adddirector() {
  const ADDDIRECTOR_DETAILS = [
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2: "www.we2call.com",
      website3: " www.we2call.com",
      billing: "Cash-INR",
      profitloss: <div className="fa-fileinvo-doll-icon">500K</div>,
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className="eye-icon-size" />
          <LuFileClock className="eye-icon-size" />
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),
    },
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2: "www.we2call.com",
      website3: " www.we2call.com",
      billing: "Cash-INR",
      profitloss: <div className="red-text">2K</div>,
      status: "In-active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className="eye-icon-size" />
          <LuFileClock className="eye-icon-size" />
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),
    },
    {
      role: "SA",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2: "www.we2call.com",
      website3: " www.we2call.com",
      billing: "Cash-INR",
      profitloss: <div className="fa-fileinvo-doll-icon">500K</div>,
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className="eye-icon-size" />
          <LuFileClock className="eye-icon-size" />
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),
    },
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2: "www.we2call.com",
      website3: " www.we2call.com",
      billing: "Cash-INR",
      profitloss: <div className="fa-fileinvo-doll-icon">500K</div>,
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className="eye-icon-size" />
          <LuFileClock className="eye-icon-size" />
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),
    },
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2: "www.we2call.com",
      website3: " www.we2call.com",
      billing: "Cash-INR",
      profitloss: <div className="red-text">20K</div>,
      status: "In-active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className="eye-icon-size" />
          <LuFileClock className="eye-icon-size" />
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),
    },
  ];

  const cols = [
    {
      header: (
        <div className="d-flex justify-content-center align-items-center ">
          <div className="marginright-10">ROLE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "role",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">USER NAME</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "username",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">In USED</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "inused",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">WEBSITE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "website1Andwebsite2Andwebsite3",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">BILLING</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "billing",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">PROFIT/LOSS</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "profitloss",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">STATUS</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "status",
      clr: true,
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">ACTION</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "icon",
    },
  ];

  const modifiedAdddirectorDetails = ADDDIRECTOR_DETAILS.map((item) => ({
    ...item,
    role: (
      <div className="role-color">
        <span className="role-color">{item?.role}</span>{" "}
      </div>
    ),
    website1Andwebsite2Andwebsite3: (
      <div>
        {item?.website1} <br /> <span>{item?.website2}</span> <br />
        {item?.website3}
        {""}
      </div>
    ),
  }));
  const [showAddDirectorPopup, setShowAddDirectorPopup] = useState(false);
  const handleAddDirectorPopup = () => {
    setShowAddDirectorPopup(true);
  };
  return (
    <div className="p-4 w-100">
      <div>
        <Totalaccount />
      </div>

      <div className="sidebar-bg rounded">
        <div className="d-flex row">
          <h6 className="medium-font font-weight-bold th-color m-0 px-4 pt-3">
            Add Director/Super Admin
          </h6>
          <div className=" d-flex justify-conten-around">
            <div className="containaer-fluid ps-2 w-20">
              <form className="d-flex" role="search">
                <input
                  className="search-width m-1 mt-3 p-2 text-white w-100 sidebar-bg borderr rounded small-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="row justify-content-md-center mt-2 ms-1 p-1">
              <div
                className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1"
                onClick={() => handleAddDirectorPopup()}
              >
                +Add
              </div>
            </div>
          </div>
        </div>

        <Table columns={cols} data={modifiedAdddirectorDetails} />
      </div>
      <AddDirectorsPopup
        showAddDirectorPopup={showAddDirectorPopup}
        setShowAddDirectorPopup={setShowAddDirectorPopup}
      />
    </div>
  );
}

export default Adddirector;
