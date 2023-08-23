import React from "react";
import Table from "../table/Table";

function Broadcasting() {
  const BROADCASTING_DETAILS = [
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "Global",
      status: "Active",
      action: "",
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "India",
      status: "Active",
      action: "",
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "USA",
      status: "In-active",
      action: "",
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "Global",
      status: "Active",
      action: "",
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "Global",
      status: "Active",
      action: "",
    },
  ];

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
      header: "TYPE",
      field: "type",
    },
    {
      header: "STATUS",
      field: "status",
      clr: true,
    },
    {
      header: "Action",
      field: "status_icon",
    },
  ];

  const modifiedBroadcastingDetails = BROADCASTING_DETAILS.map((item) => ({
    ...item,
    title: (
      <div className="role-color">
        <span className="role-color">{item?.title}</span>{" "}
      </div>
    ),
  }));
  return (
    <div className="p-4 w-100">
      <span className="th-color medium-font">Broadcasting & Notifications</span>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" d-flex justify-conten-between">
            <div className="row justify-content-md-center mx-1 p-1">
              <div className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1">
                Published
              </div>
            </div>
            <div className="row justify-content-md-center mx-1 p-1">
              <div className="table-header-box col-md-auto small-font justify-content-between p-2 px-4 m-1">
                Sheduled
              </div>
            </div>
            <div className="row justify-content-md-center mx-1 p-1">
              <div className="table-header-box col-md-auto small-font justify-content-between p-2 px-4 m-1">
                Draft
              </div>
            </div>
          </div>
          <div className=" d-flex justify-conten-between">
            <div className="containaer-fluid px-2 w-55 mt-1">
              <form className="d-flex" role="search">
                <input
                  className="search-width m-1 mt-2 p-2 text-white w-100 sidebar-bg borderr rounded small-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="row justify-content-md-center m-1 p-1">
              <div className="active text-white col-md-auto small-font justify-content-between px-2 p-2 m-1">
                +Add New
              </div>
            </div>
          </div>
        </div>
        <div className=" small-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
          All Notifications
        </div>

        <Table columns={cols} data={modifiedBroadcastingDetails} />
      </div>
    </div>
  );
}

export default Broadcasting;
