import React, { useEffect, useState } from "react";
import Table from "../table/Table";
//import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GET_BROADCASTING_EVENT } from "../../config/endpoints";
import { call } from "../../config/axios";

function Broadcasting() {
  const cols = [
    {
      header: "TITLE",
      field: "event_name",
    },
    {
      header: "PUBLISH DATE",
      field: "publish_date",
    },
    {
      header: "PUBLISH WEBSITE",
      field: "website_name",
    },
    {
      header: "UTC TIME STAMP",
      field: "create_at",
    },
    {
      header: "TYPE",
      field: "event_location",
    },
    {
      header: "STATUS",
      field: "is_active",
      clr: true,
    },
    {
      header: "Action",
      field: "icon",
    },
  ];
  const getAllBroadcastEvents = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_BROADCAST_EVENTS,payload)
      .then((res) => {
        console.log("response====>", res);
        setAllBroadcasts(res?.data?.data);
      })

  const [getBroadcasting, setGetBroadcasting] = useState([]);
  const getBroadcastingEvent = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_BROADCASTING_EVENT, payload)
      .then((res) => {
        console.log("response=====>", res);
        setGetBroadcasting(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBroadcastingEvent();
  }, []);

  console.log("getBroadcasting", getBroadcasting);

  const modifiedBroadcastingDetails = getBroadcasting.map((item) => ({
    ...item,
    title: (
      <div className="role-color">
        <span className="role-color">{item?.field}</span>{" "}
      </div>
    ),
    publishdate: (
      <div>
        <span>{item?.event_date}</span>
        <br />
        <span>{item?.start_time}</span>
      </div>
    ),
    publishwebsite: <span>{item?.website_name}</span>,
    dateandtime: <span>{item?.create_at}</span>,
    type: <span>{item?.event_type}</span>,
    status: (
      <span>
        {item?.event_status === 1 ? <div>active</div> : <div>inactive</div>}
      </span>
    ),
    icon: <AiOutlineEye className="eye-icon-size" />,
  }));
  
  const navigate = useNavigate();
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Broadcasting & Notifications</h6>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
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
        </div>

        <Table columns={cols} data={modifiedBroadcastingDetails} />
      </div>
    </div>
  );
}
}

export default Broadcasting;
