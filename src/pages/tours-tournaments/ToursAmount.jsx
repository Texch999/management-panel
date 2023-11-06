import React, { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import Table from "../table/Table";
import { GET_TOURS } from "../../config/endpoints";
import { call } from "../../config/axios";

function ToursAmount() {
  const [activeHeadIndex, setActiveHeadIndex] = useState(0);
  const [tours, setTours] = useState([]);
  const [tourname, setTourname] = useState("")

  const getTours = async()=>{
    const payload = {}
    await call(GET_TOURS, payload)
            .then((res)=>setTours(res?.data?.data))
  }

  useEffect(()=>{
    getTours();
  },[])
  console.log(tours)
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
    setTourname(item);
  };
  const filteredTours = tours.filter((item)=>item.tour_name===tourname)
  const mappingArray = tourname =="All Tours"? tours : filteredTours
  const tableHeading = [
    {
      header: "TOURS DATE",
      field: "tour_date",
    },
    {
      header: "LOCATION",
      field: "location",
    },
    {
      header: "TOUR",
      field: "tour",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "COST/ALLOWED MEMBERS",
      field: "cost",
    },
  ];
  const tableData = [
    {
      tour_date: "29 / 11 / 23",
      location: "Goa",
      website: (
        <div>
          <div>we2call.com</div>
          <div>spark999.com</div>
          <div>spark777.com</div>
          <div>spark247.com</div>
        </div>
      ),
      tour: "Casio",
      cost: (
        <div>
          <div className="d-flex justify-content-center ms-2">
            <div className="input-custum text-center d-flex align-items-center">
              Min Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Max Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Adults
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Child
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>1.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>2.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>3.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>4.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>5.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center ms-2">
            <button className="input-custum text-center select-button">
              SUBMIT
            </button>
            <button className="input-custum text-center select-button" disabled>
              EDIT
            </button>
          </div>
        </div>
      ),
    },
    {
      tour_date: "29 / 11 / 23",
      location: "Goa",
      website: (
        <div>
          <div>we2call.com</div>
          <div>spark999.com</div>
          <div>spark777.com</div>
          <div>spark247.com</div>
        </div>
      ),
      tour: "Casio",
      cost: (
        <div>
          <div className="d-flex justify-content-center ms-2">
            <div className="input-custum text-center d-flex align-items-center">
              Min Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Min Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Min Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Min Amount
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>1.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>2.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>3.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>4.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center">
            <div>5.</div>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
            <input className="input-custum text-center" type="number"></input>
          </div>
          <div className="d-flex align-items-center ms-2">
            <button className="input-custum text-center select-button">
              SUBMIT
            </button>
            <button className="input-custum text-center select-button" disabled>
              EDIT
            </button>
          </div>
        </div>
      ),
    },
  ];
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
      <div className="scroll-div mt-2">
        <Table columns={tableHeading} data={tableData} />
      </div>
    </div>
  );
}

export default ToursAmount;
