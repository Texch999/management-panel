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

function Scheduled() {
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
      field: "event_status",
    },
    {
      header: "Action",
      field: "icon",
    },
  ];
  const [getBroadcasting, setGetBroadcasting] = useState([]);
  const getBroadcastingEvent = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_BROADCAST_EVENTS, payload)
      .then((res) => {
        console.log("response====>", res);
        setGetBroadcasting(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };
  console.log("getBroadcasting", getBroadcasting);

  const [notifications, setnotifications] = useState([]);
  const getNotifications = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_NOTIFICATIONS, payload)
      .then((res) => {
        console.log("response=====>", res);
        const arr = res?.data?.data?.map((obj) => {
          return {
            ...obj,
            event_name: "scroll notification",
            event_status:
              obj.status === true ? <div>inactive</div> : <div>active</div>,
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
      //notification_type: getPoster.notification_type,
      notification_type: "Demo",
    };
    await call(GET_ALL_POSTERS, payload)
      .then((res) => {
        console.log("response=====>", res);
        const arr = res?.data?.data?.map((obj) => {
          return {
            ...obj,
            event_name: "poster notification",
            event_status: obj.status,
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

  useEffect(() => {
    getBroadcastingEvent();
    getNotifications();
    getAllposters();
  }, []);

  const modifiedBroadcastingDetails = [
    ...getBroadcasting,
    ...notifications,
    ...getPoster,
  ].map((item) => ({
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
    status: item?.event_status === 1 ? "Active" : "Inactive",
    icon: <AiOutlineEdit className="eye-icon-size" />,
  }));

  const navigate = useNavigate();
  return (
    <div className="p-4 w-100">
      {/* <h6 className="h6 font-grey">Broadcasting & Notifications</h6> */}
      <div className="sidebar-bg rounded">
        {/* <div className="d-flex align-items-center justify-content-between">
          <div className=" d-flex justify-content-between">
            <div className="row justify-content-md-center mx-1 p-1">
              <div className="active text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1">
                Published
              </div>
            </div>
            <div className="row justify-content-md-center mx-1 p-1">
              <div className="table-header-box col-md-auto medium-font justify-content-between p-2 px-4 m-1">
                Sheduled
              </div>
            </div>
            <div className="row justify-content-md-center mx-1 p-1">
              <div className="table-header-box col-md-auto medium-font justify-content-between p-2 px-4 m-1">
                Draft
              </div>
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
        </div> */}

        <Table columns={cols} data={modifiedBroadcastingDetails} />
      </div>
    </div>
  );
}

export default Scheduled;
