import React, { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import { call } from "../../config/axios";
import { GET_TOURS } from "../../config/endpoints";

function Schedule() {
  const [activeHeadIndex, setActiveHeadIndex] = useState(0);
  const [data, setData] = useState([]);
  const [tourname, setTourname] = useState("allTours");
  const scheduleButtons = [
    "allTours",
    "1.Cricket Tour",
    "2.Sports Tour",
    "3.Casino Tour",
    "4.Entertainment Tour",
  ];
  const gettingData = async () => {
    // const payload = {
    //   tour_name:tourname
    // }
    await call(GET_TOURS)
      // .then((res)=>res.json())
      .then((incomingData) => setData(incomingData?.data?.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    gettingData();
  }, []);

  const handleScheduleHead = (item, index) => {
    setActiveHeadIndex(index);
    setTourname(item);
  };

  // console.log('tourname====',tourname);
  console.log('data====',data)

  const filteredData =
    tourname === "allTours"
      ? data
      : data.filter((item) => item.tour_name === tourname);

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
                onClick={() => handleScheduleHead(item, index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="sub-head medium-font mt-3">Tours</div>

      {filteredData.map((item, index) => {
        return (
          <div className="mb-3">
            <div className="row font-grey medium-font gx-2">
              <div className="col-2">
                <div className="font-grey col-2 mt-1">Poster_img</div>
                <div className=" tt-content-box p-2 ">
                  {item.poster_image}
                  <HiPhotograph className="ms-1 ions-clr" />
                </div>
              </div>
              <div className="col">
                <div className="font-grey col-2 mt-1">Date&Time</div>
                <div className="tt-content-box p-2">{item.scheduled_date}</div>
              </div>
              <div className="col">
                <div className="font-grey col-2 mt-1">Title</div>
                <div className="tt-content-box p-2">{item.poster_title}</div>
              </div>
              <div className="col-3">
                <div className="font-grey col-2 mt-1">Quotation</div>
                <div className="tt-content-box p-2">{item.quotations}</div>
              </div>
              <div className="col-1 ">
                <div className="font-grey col-2 mt-1">Country</div>
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
