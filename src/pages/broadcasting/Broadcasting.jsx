import React from "react";
import Table from "../table/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GET_ALL_NOTIFICATIONS,
  GET_ALL_POSTERS,
  GET_BROADCAST_EVENTS,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import Scheduled from "./Scheduled";
import DraftTable from "./DraftTable";

function Broadcasting() {
  const [searchOffer, setSearchOffer] = useState("");
  const cols = [
    {
      header: "TITLE",
      field: "title",
    },
    {
      header: "PUBLISH DATE",
      field: "publishdate",
    },
    {
      header: "PUBLISH WEBSITE",
      field: "publishwebsite",
    },
    {
      header: "UTC TIME STAMP",
      field: "dateandtime",
    },
    {
      header: "TYPE",
      field: "type",
    },
    {
      header: "STATUS",
      field: "status",
    },
    {
      header: "Action",
      field: "icon",
    },
  ];
  const [getBroadcasting, setGetBroadcasting] = useState([]);
  const getBroadcastingEvent = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_BROADCAST_EVENTS, payload)
      .then((res) => {
        console.log("response====>", res);
        setGetBroadcasting(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };
  // console.log("getBroadcasting", getBroadcasting);

  const [notifications, setnotifications] = useState([]);
  const getNotifications = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_NOTIFICATIONS, payload)
      .then((res) => {
        // console.log("response=====>", res);
        const arr = res?.data?.data?.map((obj) => {
          return {
            ...obj,
            event_name: "scroll notification",
            status: obj.status,
            event_location: obj.country_name,
            event_date: obj.publish_date,
            create_at: new Date().toISOString(),
          };
        });
        setnotifications(arr);
      })
      .catch((err) => console.log(err));
  };

  const [getPoster, setgetPoster] = useState([]);
  const getAllposters = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_POSTERS, payload)
      .then((res) => {
        console.log("response=====>", res);
        const arr = res?.data?.data?.map((obj) => {
          return {
            ...obj,
            event_name: "poster notification",
            status: obj.status,
            // obj.status === true ? (
            //   <div className="font-green custom-active-button px-2">
            //     Active
            //   </div>
            // ) : (
            //   <div className="custom-deactive-button px-2">InActive</div>
            // ),
            event_location: obj.country_name,
            event_date: obj.publish_date,
            create_at: new Date().toISOString(),
          };
        });
        setgetPoster(arr);
      })
      .catch((err) => console.log(err));
  };
  console.log("getPoster", getPoster);
  console.log("notifications", notifications);

  useEffect(() => {
    getBroadcastingEvent();
    getNotifications();
    getAllposters();
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentDate = new Date().toISOString().split("T")[0];
  console.log("---------->", currentDate);
  const publishedData = [
    ...getBroadcasting,
    ...notifications,
    ...getPoster,
  ].filter(
    (item) =>
      item.status === true &&
      item.publish_date <= currentDate &&
      item?.event_name?.toLowerCase().includes(searchOffer.toLowerCase())
  );
  const modifiedBroadcastingDetails =publishedData.map((item) => {
    return {
      ...item,
      title: (
        <div className="role-color">
          <span className="role-color">{item?.event_name}</span>{" "}
        </div>
      ),
      publishdate: (
        <div>
          <span>{item?.event_date}</span>
          <br />
          <span>{item?.start_time}</span>
        </div>
      ),
      publishwebsite: item?.website_name,
      dateandtime: item?.create_at,
      type: item?.event_location,
      status:
        item?.status === true ? (
          <div className="font-green custom-active-button px-2">Active</div>
        ) : (
          <div className="custom-deactive-button px-2">InActive</div>
        ),
      icon: <AiOutlineEdit className="eye-icon-size" />,
    };
  });

  const navigate = useNavigate();

  const headersList = ["Published", "Sheduled", "Draft"];

  const handleHeader = (item) => {
    setActiveIndex(item);
  };

  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Broadcasting & Notifications</h6>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" d-flex justify-content-between">
            <div className="row justify-content-md-center mx-1 p-1">
              {headersList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      activeIndex === index ? "active" : "table-header-box"
                    } text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1`}
                    onClick={() => handleHeader(index)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <div className="containaer-fluid w-55 mt-1">
              <form className="d-flex" role="search">
                <input
                  className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchOffer}
                  onChange={(e) => setSearchOffer(e.target.value)}
                />
              </form>
            </div>
            <div className="row justify-content-md-center m-1 p-1">
              <div
                onClick={() => navigate("/publish-notification")}
                className="active text-white col-md-auto medium-font justify-content-between px-2 p-2 m-1"
              >
                +Add New
              </div>
            </div>
          </div>
        </div>
        <div className=" medium-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
          All Notifications
        </div>
        {activeIndex === 0 && (
          <Table columns={cols} data={modifiedBroadcastingDetails} />
        )}
        {activeIndex === 1 && (
          <Scheduled
            columns={cols}
            data={modifiedBroadcastingDetails}
            searchOffer={searchOffer}
          />
        )}
        {activeIndex === 2 && (
          <DraftTable columns={cols} data={modifiedBroadcastingDetails} 
          searchOffer={searchOffer}/>
        )}
      </div>
    </div>
  );
}

export default Broadcasting;
