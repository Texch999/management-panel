import React, { useEffect, useState } from "react";
// import { HiPhotograph } from "react-icons/hi";
import Table from "../table/Table";
import { GET_TOURS } from "../../config/endpoints";
import { UPDATE_TOURS } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function ToursAmount() {
  const [showReturnPopup, setShowReturnPopup] = useState(false);
  const [headerMessage, setHeaderMessage] = useState("");
  const [activeHeadIndex, setActiveHeadIndex] = useState(0);
  const [tours, setTours] = useState([]);
  const [tourname, setTourname] = useState("All Tours");

  const submitTourPackages = async (item) => {
    const payload = {
      tour_id: item.tour_id,
      packages: item.packages,
    };
    console.log(payload,'......payload')
    await call(UPDATE_TOURS, payload)
      // setShowReturnPopup(true)
      // .then((res)=>(res.data,'.....res'))
      .then((res) => {
        // console.log(res,'......res')
        if (res.status === 200) {
          setShowReturnPopup(true);
          setHeaderMessage("Tour Updated Successfully");
        }
      })
      .catch((error) => {
        setShowReturnPopup(true);
        setHeaderMessage(error);
      });
  };
  const packOnchangeHandle = (tourId, pkgtype, field, value) => {
    setTours((prevTours) =>
      prevTours.map((tour) => {
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
    await call(GET_TOURS, payload)
          .then((res) => setTours(res?.data?.data))
          .catch((error)=>console.log(error,'.....error'));
  };

  useEffect(() => {
    getTours();
  }, []);

  const scheduleButtons = [
    "All Tours",
    "1.Take Part in Our Tour",
    "2.Cricket Tour",
    "3.Sports Tour",
    "4.Casino Tour",
    "5.Entertainment Tour",
  ];

  const handleScheduleHead = (item, index) => {
    setActiveHeadIndex(index);
    setTourname(item);
  };

  const filteredTours = tours?.filter((item) => item.tour_name === tourname);
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
      header: "COUNTRY",
      field: "country",
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
  const tableData = mappingArray?.map((item) => {
    return {
      tour_date: item.schedule_from,
      country: item.country,
      website: item.website,
      tour_title: item.tour_title,
      packages: (item.tour_name === "1.Take Part in Our Tour" ||
      item.tour_name === "2.Cricket Tour" ||
      item.tour_name === "3.Sports Tour" ||
      item.tour_name === "5.Entertainment Tour")?
      (<div className="text-center justify-content-center d-flex align-items-center">
        <div className="amount-div text-center justify-content-center align-items-center">
          <div className="d-flex ms-6 w-100 head-position">
            <div className="input-custum text-center justify-content-center d-flex align-items-center">
              Amount
            </div>
          </div>
          {packagesType.map((pkgtype, index) => {
            return (
              <div className="d-flex align-items-center w-100 row" key={index}>
                <div className="col-3">{pkgtype}</div>
                <input
                  className="input-custum text-center col-3"
                  type="text"
                  name="minamount"
                  value={item?.packages[pkgtype]?.minamount || ""}
                  onChange={(e) =>
                    packOnchangeHandle(
                      item.tour_id,
                      pkgtype,
                      "minamount",
                      e.target.value
                    )
                  }
                ></input>
              </div>
            );
          })}
          <div className="d-flex align-items-center">
            <button
              className="input-custum text-center select-button update-position"
              onClick={() => submitTourPackages(item)}
            >
              UPDATE
            </button>
          </div>
        </div>
        </div>):
      (
        <div className="amount-div">
          <div className="d-flex justify-content-center ms-4 w-100 head-position">
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
              <div className="d-flex align-items-center w-100 row" key={index}>
                <div className="col-3">{pkgtype}</div>
                <input
                  className="input-custum text-center col-3"
                  type="text"
                  name="minamount"
                  value={item?.packages[pkgtype]?.minamount || ""}
                  onChange={(e) =>
                    packOnchangeHandle(
                      item.tour_id,
                      pkgtype,
                      "minamount",
                      e.target.value
                    )
                  }
                ></input>
                <input
                  className="input-custum text-center col-3"
                  type="text"
                  name="maxamount"
                  value={item?.packages[pkgtype]?.maxamount || ""}
                  onChange={(e) =>
                    packOnchangeHandle(
                      item.tour_id,
                      pkgtype,
                      "maxamount",
                      e.target.value
                    )
                  }
                ></input>
                <input
                  className="input-custum text-center col-3"
                  type="text"
                  name="allowedpersons"
                  value={item?.packages[pkgtype]?.allowedpersons || ""}
                  onChange={(e) =>
                    packOnchangeHandle(
                      item.tour_id,
                      pkgtype,
                      "allowedpersons",
                      e.target.value
                    )
                  }
                ></input>
              </div>
            );
          })}
          <div className="d-flex align-items-center">
            <button
              className="input-custum text-center select-button update-position"
              onClick={() => submitTourPackages(item)}
            >
              UPDATE
            </button>
          </div>
        </div>
      )
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
