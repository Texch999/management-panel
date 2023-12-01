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

function Scheduled(props) {
  const { searchOffer } = props;

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
  console.log("getBroadcasting", getBroadcasting);

  const [notifications, setnotifications] = useState([]);
  const getNotifications = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_NOTIFICATIONS, payload)
      .then((res) => {
        console.log("response=====>", res);
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
  const currentDate = new Date().toISOString().split("T")[0];
  // console.log("---------->", currentDate);
  const scheduledData = [
    ...getBroadcasting,
    ...notifications,
    ...getPoster,
  ]?.filter(
    (res) =>
      res.publish_date > currentDate &&
      res?.event_name?.toLowerCase().includes(searchOffer.toLowerCase())
  );

  const modifiedBroadcastingDetails = scheduledData.map((item) => ({
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
  }));

  const navigate = useNavigate();
  return (
    <div className="p-4 w-100">
      <div className="sidebar-bg rounded">
        <Table columns={cols} data={modifiedBroadcastingDetails} />
      </div>
    </div>
  );
}

export default Scheduled;
