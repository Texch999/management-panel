import React from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";

function Offersmanagement() {
  const OFFERSMANAGEMENT_DETAILS = [
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "Global",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "India",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "USA",
      status: "In-active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "Global",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      title:
        "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
      publishdate: "14/08/2023 15:37:00 PM",
      publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
      type: "Global",
      status: "Active",
      icon: <AiOutlineEye className="eye-icon-size" />,
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
      field: "icon",
    },
  ];

  const modifiedOffersmanagementDetails = OFFERSMANAGEMENT_DETAILS.map(
    (item) => ({
      ...item,
      title: (
        <div className="role-color">
          <span className="role-color">{item?.title}</span>{" "}
        </div>
      ),
    })
  );
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Offers</h6>
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
              <div className="active text-white col-md-auto medium-font justify-content-between px-2 p-2 m-1">
                +Add New
              </div>
            </div>
          </div>
        </div>
        <div className=" medium-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
          All Notifications
        </div>

        <Table columns={cols} data={modifiedOffersmanagementDetails} />
      </div>
    </div>
  );
}

export default Offersmanagement;
