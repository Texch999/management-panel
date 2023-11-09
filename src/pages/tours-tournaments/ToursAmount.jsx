import React, { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";
import Table from "../table/Table";
import { GET_TOURS } from "../../config/endpoints";
import { UPDATE_TOURS } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function ToursAmount() {
  const [showReturnPopup, setShowReturnPopup] = useState(false);
  const [headerMessage, setHeaderMessage] = useState("")
  const [activeHeadIndex, setActiveHeadIndex] = useState(0);
  const [tours, setTours] = useState([]);
  const [tourname, setTourname] = useState("All Tours");

  const submitTourPackages = async(item)=>{
    const payload = {
      tour_id:item.tour_id,
      packages:item.packages
    }
    await call(UPDATE_TOURS, payload)
            // setShowReturnPopup(true)
            // .then((res)=>(res.data,'.....res'))
            .then((res)=>{
              console.log(res,'......res')
              if(res.status==200){
                setShowReturnPopup(true);
                setHeaderMessage("Tour Updated Successfully")
              }
            })
            .catch((error)=>{
              setShowReturnPopup(true)
              setHeaderMessage(error)
            })
  }
  const packOnchangeHandle = (tourId, pkgtype, field, value) => {
    setTours((prevTours) =>
      prevTours.map((tour) => {
        // console.log(tour,'.......tourfromsettours')
        if (tour.tour_id === tourId) {
          return {
            ...tour,
            packages: {
              ...tour.packages,
              [pkgtype]: {
                ...tour.packages[pkgtype],
                [field]: value,
              },
            },
          };
        } else {
          return tour;
        }
      })
    );
  };
  
  // console.log(tours,'......tours')
  const getTours = async () => {
    const payload = {};
    await call(GET_TOURS, payload).then((res) => setTours(res?.data?.data));
  };

  useEffect(() => {
    getTours();
  }, []);

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

  const filteredTours = tours.filter((item) => item.tour_name === tourname);
  const mappingArray = tourname === "All Tours" ? tours : filteredTours;
  const packagesType = [
    "regularpack",
    "premiumpack",
    "luxurypack",
    "vippack",
    "vvippack",
  ];
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
      header: "TOUR_TITLE",
      field: "tour_title",
    },
    {
      header: "WEBSITE",
      field: "website",
    },
    {
      header: "PACKAGES",
      field: "packages",
    },
  ];
  const tableData = mappingArray.map((item) => {
    return {
      tour_date: item.schedule_from,
      location: item.country,
      website: item.website.map((item) => {
        return item;
      }),
      tour_title: item.tour_title,
      packages: (
        <div>
          <div className="d-flex justify-content-center ms-2">
            <div className="input-custum text-center d-flex align-items-center">
              Min Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Max Amount
            </div>
            <div className="input-custum text-center d-flex align-items-center">
              Allowed Persons
            </div>
          </div>
          {packagesType.map((pkgtype, index) => {
            return (
              <div className="d-flex align-items-center"
                    key={index}
              >
                <div>{pkgtype}</div>
                <input
                  className="input-custum text-center"
                  type="number"
                  name="minamount"
                  defaultValue={item?.packages[pkgtype]?.minamount || ""}
                  onChange={(e) => packOnchangeHandle(item.tour_id,pkgtype, "minamount", e.target.value)}
                ></input>
                <input
                  className="input-custum text-center"
                  type="number"
                  name="maxamount"
                  defaultValue={item?.packages[pkgtype]?.maxamount || ""}
                  onChange={(e) => packOnchangeHandle(item.tour_id,pkgtype, "maxamount", e.target.value)}
                ></input>
                <input
                  className="input-custum text-center"
                  type="number"
                  name="allowedpersons"
                  defaultValue={item?.packages[pkgtype]?.allowedpersons  || ""}
                  onChange={(e) => packOnchangeHandle(item.tour_id,pkgtype, "allowedpersons", e.target.value)}
                ></input>
              </div>
            );
          })}
          <div className="d-flex align-items-center ms-2">
            <button
              className="input-custum text-center select-button"
              onClick={() => submitTourPackages(item)}
            >
              SUBMIT
            </button>
            <button className="input-custum text-center select-button" disabled>
              EDIT
            </button>
          </div>
        </div>
      ),
    };
  });
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
      <MatchSubmitPopup
        header={headerMessage}
        state={showReturnPopup}
        setState={setShowReturnPopup}
      />
    </div>
  );
}

export default ToursAmount;
