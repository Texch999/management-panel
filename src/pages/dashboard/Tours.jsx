import React from "react";
import Table from "../table/Table";
import { Images } from "../../images";

function Tours() {
  const TOURS_DETAILS = [
    {
      status: (
        <div className="d-flex align-items-center justfy-content-center">
          <img src={Images.TourLogo} className="tour-img-size" />
          <div className="px-1">Bigg daddy</div>
        </div>
      ),
      place: "Goa",
      members: "150",
      profitloss: <div className="fa-fileinvo-doll-icon">1000k</div>,
    },
    {
      status: (
        <div className="d-flex align-items-center justfy-content-center">
          <img src={Images.TourLogo} className="tour-img-size" />
          <div className="px-1">Bigg daddy</div>
        </div>
      ),
      place: "Goa",
      members: "150",
      profitloss: <div className="fa-fileinvo-doll-icon">1000k</div>,
    },
    {
      status: (
        <div className="d-flex align-items-center justfy-content-center">
          <img src={Images.TourLogo} className="tour-img-size" />
          <div className="px-1">Bigg daddy</div>
        </div>
      ),
      place: "Goa",
      members: "150",
      profitloss: <div className="red-text">1000k</div>,
    },
    {
      status: (
        <div className="d-flex align-items-center justfy-content-center">
          <img src={Images.TourLogo} className="tour-img-size" />
          <div className="px-1">Bigg daddy</div>
        </div>
      ),
      place: "Goa",
      members: "150",
      profitloss: <div className="fa-fileinvo-doll-icon">1000k</div>,
    },
  ];

  const cols = [
    {
      header: "TOUR",
      field: "status",
    },
    {
      header: "PLACE",
      field: "place",
    },
    {
      header: "MEMBERS",
      field: "members",
    },
    {
      header: "PROFIT/LOSS",
      field: "profitloss",
      clr: false,
    },
  ];

  const modifiedToursDetails = TOURS_DETAILS.map((item) => ({
    ...item,
    profitloss: (
      <div className="role-color">
        <span className="role-color">{item?.profitloss}</span>{" "}
      </div>
    ),
  }));

  return (
    <div className="w-100 sidebar-bg rounded h-100">
      <div className=" w-100 d-flex align-items-center justify-content-between">
        <div className=" small-font font-weight-bold px-2 p-2 m-1 th-color">
          <span>Tours & Tournaments</span>
          <br></br>
          <span className="bluecolor-text">Sales & Volume</span>
        </div>
        <div className=" d-flex justify-conten-between">
          <div className="w-50 d-flex justify-content-around text-white">
            <div className="day-button rounded-pill small-font height px-2 p-1 ">
              5000
            </div>
            <div className="day-button rounded-pill small-font height px-2 p-1">
              600000
            </div>
          </div>
        </div>
      </div>
      <div className="h-100 py-2">
        <Table columns={cols} data={modifiedToursDetails} />
      </div>
    </div>
  );
}

export default Tours;
