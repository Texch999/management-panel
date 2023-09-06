import React, { useState } from "react";
import { HiPhotograph } from "react-icons/hi";

function Schedule() {
  const [activeHeadIndex, setActiveHeadIndex] = useState(0);
  const scheduleButtons = [
    "Tours",
    "Cricket Tours",
    "Sports Tours",
    "Casino Tours",
    "Entertainment Tours",
  ];
  const handleScheduleHead = (index) => {
    setActiveHeadIndex(index);
  };
  return (
    <div className="add-tours p-3 mt-3">
      <div className="row">
        <div className="d-flex">
          {scheduleButtons.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  activeHeadIndex === index
                    ? "active-schedule-head"
                    : "header-schedule"
                }  p-2 me-2`}
                onClick={() => handleScheduleHead(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sub-head medium-font mt-3">Tours</div>
      <div className="row">
        <div className="col-2"></div>
        <div className="font-grey col-2 mt-1">Open Date & Time</div>
      </div>
      <div className="row font-grey medium-font gx-2">
        <div className="col-2">
          <div className=" tt-content-box p-2 ">
            IMG4567959.jpg
            <HiPhotograph className="ms-1 ions-clr" />
          </div>
        </div>
        <div className="col">
          <div className="tt-content-box p-2">31-08-2023 10:57:00 AM</div>
        </div>
        <div className="col">
          <div className="tt-content-box p-2">Take a Part in Our Tour</div>
        </div>
        <div className="col-3">
          <div className="tt-content-box p-2">
            Play and get a chance to join
          </div>
        </div>
        <div className="col-1 ">
          <div className="tt-content-box p-2">India</div>
        </div>
        <div className="col-1 ">
          <div className="tt-content-box p-2">Texch.com</div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-1">
          <div>Open</div>
        </div>
        <div className="col-2 d-flex justify-content-around">
          <div>Open</div>
          <div>Edit</div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
