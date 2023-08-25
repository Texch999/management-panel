import React from "react";
import Table from "../table/Table";

function Meetingshedule() {
  const MEETINGSHEDULE_DETAILS = [
    {
      icon: "",
      name: "Srinivas",
      role: "T Exch Director",
      meetings: "16",
      status: "Active",
    },
    {
      icon: "",
      name: "Srinivas",
      role: "T Exch Director",
      meetings: "16",
      status: "Active",
    },
    {
      icon: "",
      name: "Srinivas",
      role: "T Exch Director",
      meetings: "16",
      status: "Shedule",
    },
    {
      icon: "",
      name: "Srinivas",
      role: "T Exch Director",
      meetings: "16",
      status: "Active",
    },
  ];

  const cols = [
    {
      header: "NAME & ROLE",
      field: "nameAndRole",
    },
    {
      header: "",
      field: "icon",
    },

    {
      header: "MEETINGSS",
      field: "meetings",
    },
    {
      header: "STATUS",
      field: "status",
      clr: true,
    },
  ];

  const modifiedMeetingsheduleDetails = MEETINGSHEDULE_DETAILS.map((item) => ({
    ...item,
    nameAndRole: (
      <div>
        {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
      </div>
    ),
  }));
  return (
    <div className="p-2 w-100 sidebar-bg rounded ">
      <div className=" small-font font-weight-bold px-2 p-1 m-1 th-color">
        <span>Meeting Shedules/Live</span>
      </div>
      <div className="sidebar-bg rounded ">
        <Table columns={cols} data={modifiedMeetingsheduleDetails} />
      </div>
    </div>
  );
}

export default Meetingshedule;
