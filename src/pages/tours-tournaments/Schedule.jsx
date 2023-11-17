import React, { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import { call } from "../../config/axios";
import { GET_TOURS } from "../../config/endpoints"

function Schedule() {
  const [activeHeadIndex, setActiveHeadIndex] = useState(0);
  const [tours, setTours] = useState([]);
  const [tourname, setTourname] = useState("All Tours")
  const getTours = async()=>{
    const payload = {}
    await call(GET_TOURS, payload)
            .then((res)=>setTours(res?.data?.data))
  }

  useEffect(()=>{
    getTours();
  },[])
  
  const scheduleButtons = [
    "All Tours",
    "1.Take Part in Tour",
    "2.Cricket Tour",
    "3.Sports Tour",
    "4.Casino Tour",
    "5.Entertainment Tour",
  ];
  const handleScheduleHead = (item, index) => {
    setActiveHeadIndex(index);
    setTourname(item)
  };
  
  const filteredTours = tours?.filter((item)=>item.tour_name===tourname)
  const mappingArray = tourname=="All Tours"? tours : filteredTours
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
                onClick={() => handleScheduleHead(item,index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sub-head medium-font mt-3">Tours</div>
      {mappingArray && mappingArray.length > 0 && mappingArray.map((item, index) => {
        return (
          <div className="mb-3">
            <div className="row">
              <div className="col-2"></div>
              <div className="font-grey col-2 mt-1"></div>
            </div>
            <div className="row font-grey medium-font gx-2">
              <div className="col-2">
                <div className="font-grey col-2 mt-1">Poster_img</div>
                <div className=" tt-content-box p-2 ">
                  IMG4567959.jpg
                  <HiPhotograph className="ms-1 ions-clr" />
                </div>
              </div>
              <div className="col">
                <div className="font-grey col-2 mt-1">Schedule_From</div>
                <div className="tt-content-box p-2">{item.schedule_from}</div>
              </div>
              <div className="col">
                <div className="font-grey col-2 mt-1">Tour_Title</div>
                <div className="tt-content-box p-2">{item.tour_title}</div>
              </div>
              <div className="col-3">
                <div className="font-grey col-2 mt-1">Quotation</div>
                <div className="tt-content-box p-2">{item.quotations}</div>
              </div>
              <div className="col-1 ">
                <div className="font-grey col-2 mt-1">Location</div>
                <div className="tt-content-box p-2">{item.country}</div>
              </div>
              <div className="col-1 ">
                <div className="font-grey col-2 mt-1">Website</div>
                <div className="tt-content-box p-2">{item.website}</div>
              </div>
            </div>
            <div className="row justify-content-between mt-2">
              <div className="col-1 d-flex">
                <div className="open-button p-1">Open</div>
              </div>
              <div className="col-2">
                <div className="row d-flex justify-content-between">
                  <div className="col-5">
                    <div className="black-button p-1">Block</div>
                  </div>
                  <div className="col-5 ">
                    <div className="edit-button p-1">Edit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Schedule;
