import React from "react";
import Table from "../table/Table";
import { Images } from "../../images";

function Meetingshedule() {
  const MEETINGSHEDULE_DETAILS = [
    {
      icon: (
        <div className="d-flex align-items-center justify-content-center">
          <img src={Images.ProfileOne} className="tour-img-size" />
          <div className="d-flex flex-column">
          <div className="px-1">Srinivas</div>
          <div className="px-2 role-color">T Exch Director</div>
          </div>
        </div>
      ),
      meetings: "16",
      status: "Active",
    },
    {
      icon: (
        <div className="d-flex align-items-center justify-content-center">
          <img src={Images.ProfileTwo} className="tour-img-size" />
          <div className="d-flex flex-column">
          <div className="px-1">Srinivas</div>
          <div className="px-2 role-color">T Exch Director</div>
          </div>
        </div>
      ),
      meetings: "16",
      status: "Active",
    },
    {
      icon: (
        <div className="d-flex align-items-center justify-content-center">
          <img src={Images.ProfileThree} className="tour-img-size" />
          <div className="d-flex flex-column">
          <div className="px-1">Srinivas</div>
          <div className="px-2 role-color">T Exch Director</div>
          </div>
        </div>
      ),
      meetings: "16",
      status: "Shedule",
    },
    {
      icon: (
        <div className="d-flex align-items-center justify-content-center">
          <img src={Images.ProfileFour} className="tour-img-size" />
          <div className="d-flex flex-column">
          <div className="px-1">Srinivas</div>
          <div className="px-2 role-color">T Exch Director</div>
          </div>
        </div>
      ),
      meetings: "16",
      status: "Active",
    },
  ];

  const cols = [
    {
      header: "NAME & ROLE",
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
    <div className="w-100 sidebar-bg rounded" style={{ height: "100%" }}>
      <div className="small-font font-weight-bold px-2 p-1 m-1 th-color">
        <div>Meeting Shedules/Live</div>
      </div>
      <div className="sidebar-bg rounded ">
        <Table columns={cols} data={modifiedMeetingsheduleDetails} />
      </div>
    </div>
  );
}

export default Meetingshedule;
