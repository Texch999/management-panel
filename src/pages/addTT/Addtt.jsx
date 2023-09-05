import React from "react";
import TableHeader from "../table/TableHeader";
import Table from "../table/Table";
import { TbLockQuestion } from "react-icons/tb";
import { MdOutlineBlock } from "react-icons/md";

function Addtt() {
  const ADDTT_DETAILS = [
    {
      role: "Designer ",
      username: "Jayantha",
      inused: "India-Hyd",
      password: "abcd1234",
      website: "Broadcasting & Adds",
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbLockQuestion className="eye-icon-size" />
          <MdOutlineBlock className="eye-icon-size border-borderradius" />
        </div>
      ),
    },
    {
      role: "Designer ",
      username: "Jayantha",
      inused: "India-Hyd",
      password: "abcd1234",
      website: "Broadcasting & Adds",
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbLockQuestion className="eye-icon-size" />
          <MdOutlineBlock className="eye-icon-size border-borderradius" />
        </div>
      ),
    },
    {
      role: "Designer ",
      username: "Jayantha",
      inused: "India-Hyd",
      password: "abcd1234",
      website: "Broadcasting & Adds",
      status: "In-active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbLockQuestion className="eye-icon-size" />
          <MdOutlineBlock className="eye-icon-size border-borderradius" />
        </div>
      ),
    },
    {
      role: "Designer ",
      username: "Jayantha",
      inused: "India-Hyd",
      password: "abcd1234",
      website: "Broadcasting & Adds",
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbLockQuestion className="eye-icon-size" />
          <MdOutlineBlock className="eye-icon-size border-borderradius" />
        </div>
      ),
    },
    {
      role: "Designer ",
      username: "Jayantha",
      inused: "India-Hyd",
      password: "abcd1234",
      website: "Broadcasting & Adds",
      status: "In-active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbLockQuestion className="eye-icon-size" />
          <MdOutlineBlock className="eye-icon-size border-borderradius" />
        </div>
      ),
    },
  ];

  const cols = [
    {
      header: "ROLE",
      field: "role",
    },
    {
      header: "USER NAME",
      field: "username",
    },
    {
      header: "IN USED",
      field: "inused",
    },
    {
      header: "PASSWORD",
      field: "password",
    },
    {
      header: "WEBSITE",
      field: "website",
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

  const modifiedAddttDetails = ADDTT_DETAILS.map((item) => ({
    ...item,
    role: (
      <div className="role-color">
        <span className="role-color">{item?.role}</span>{" "}
      </div>
    ),
  }));

  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">ADD TT</h6>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            Add Owner Team Login for Broadcasing & Ads / Tours & Tournaments
          </div>
          <div className=" d-flex justify-conten-between">
            <div className="containaer-fluid px-2 w-30">
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
        {/* <TableHeader /> */}
        <Table columns={cols} data={modifiedAddttDetails} />
      </div>
    </div>
  );
}

export default Addtt;
