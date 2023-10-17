import React from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ADD_OFFERS } from "../../config/endpoints";
import { call } from "../../config/axios";
import { Navigate, useNavigate } from "react-router-dom";
import DraftTable from "./DraftTable";
import PublishedTabledata from "./PublishedTabledata";
import ScheduledData from "./ScheduledData";

function Offersmanagement() {
  const [allOffers, setAllOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchText, setSearchText] = useState("");

  const offerDetails = ["Published", "Scheduled", "Draft"];
  const [activeOffer, setActiveOffer] = useState("Published");
  const handleOffer = (offer) => {
    setActiveOffer(offer);
  };

  // // const OFFERSMANAGEMENT_DETAILS = [
  // //   {
  // //     title:
  // //       "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
  // //     publishdate: "14/08/2023 15:37:00 PM",
  // //     publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
  // //     type: "Global",
  // //     status: "Active",
  // //     icon: <AiOutlineEye className="eye-icon-size" />,
  // //   },
  // //   {
  // //     title:
  // //       "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
  // //     publishdate: "14/08/2023 15:37:00 PM",
  // //     publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
  // //     type: "India",
  // //     status: "Active",
  // //     icon: <AiOutlineEye className="eye-icon-size" />,
  // //   },
  // //   {
  // //     title:
  // //       "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
  // //     publishdate: "14/08/2023 15:37:00 PM",
  // //     publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
  // //     type: "USA",
  // //     status: "In-active",
  // //     icon: <AiOutlineEye className="eye-icon-size" />,
  // //   },
  // //   {
  // //     title:
  // //       "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
  // //     publishdate: "14/08/2023 15:37:00 PM",
  // //     publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
  // //     type: "Global",
  // //     status: "Active",
  // //     icon: <AiOutlineEye className="eye-icon-size" />,
  // //   },
  // //   {
  // //     title:
  // //       "16 Free Premiere Pro Title Templates Perfect for Any Video | Motion Array",
  // //     publishdate: "14/08/2023 15:37:00 PM",
  // //     publishwebsite: "www.texch.com www.we2call.com www.ravanna.com",
  // //     type: "Global",
  // //     status: "Active",
  // //     icon: <AiOutlineEye className="eye-icon-size" />,
  // //   },
  // // ];

  const navigate = useNavigate();
  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = allOffers.filter((res) =>
      res?.offer_name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOffers(filteredSearchText);
  };
  // const cols = [
  //   {
  //     header: "TITLE",
  //     field: "title",
  //   },
  //   {
  //     header: "PUBLISH DATE",
  //     field: "publishdate",
  //   },
  //   {
  //     header: "PUBLISH WEBSITE",
  //     field: "publishwebsite",
  //   },
  //   {
  //     header: "TYPE",
  //     field: "type",
  //   },
  //   {
  //     header: "STATUS",
  //     field: "status",
  //     clr: true,
  //   },
  //   {
  //     header: "Action",
  //     field: "icon",
  //   },
  // ];
  // const getAllOffers = async () => {
  //   const payload = {
  //     register_id: "reg-20230710182031623",
  //   };
  //   await call(ADD_OFFERS, payload)
  //     .then((res) => {
  //       console.log("response====>", res);
  //       setAllOffers(res?.data?.data?.offers);
  //     })

  //     .catch((err) => console.log(err));
  // };
  // console.log("AllOffers===>", allOffers);
  // useEffect(() => {
  //   getAllOffers();
  // }, []);

  // // const modifiedOffersmanagementDetails = allOffers.map((item) => ({
  // //   title: (
  // //     <div className="role-color">
  // //       <span className="role-color">{item?.offer_name}</span>{" "}
  // //     </div>
  // //   ),
  // //   publishdate: (
  // //     <div>
  // //       <span>{item?.publish_date}</span>
  // //       <br />
  // //       <span>{item?.start_time}</span>
  // //     </div>
  // //   ),
  // //   publishwebsite: <span>{item?.website_name}</span>,
  // //   type: <span>{item?.notification_type}</span>,
  // //   status: (
  // //     <span>
  // //       {item?.offer_status === 1 ? <div>active</div> : <div>inactive</div>}
  // //     </span>
  // //   ),
  // //   icon: <AiOutlineEye className="eye-icon-size" />,
  // // }));
  // const modifiedOffersmanagementDetails = searchText.length
  //   ? filteredOffers
  //       .filter((item) =>
  //         item?.offer_name?.toLowerCase().includes(searchText.toLowerCase())
  //       )
  //       .map((item) => {
  //         return {
  //           title: (
  //             <div className="role-color">
  //               <span className="role-color">{item?.offer_name}</span>{" "}
  //             </div>
  //           ),
  //           publishdate: (
  //             <div>
  //               <span>{item?.publish_date}</span>
  //               <br />
  //               <span>{item?.start_time}</span>
  //             </div>
  //           ),
  //           publishwebsite: <span>{item?.website_name}</span>,
  //           type: <span>{item?.notification_type}</span>,
  //           status: (
  //             <span>
  //               {item?.offer_status === 1 ? (
  //                 <div>active</div>
  //               ) : (
  //                 <div>inactive</div>
  //               )}
  //             </span>
  //           ),
  //           icon: <AiOutlineEye className="eye-icon-size" />,
  //         };
  //       })
  //   : allOffers.map((item) => {
  //       return {
  //         title: (
  //           <div className="role-color">
  //             <span className="role-color">{item?.offer_name}</span>{" "}
  //           </div>
  //         ),
  //         publishdate: (
  //           <div>
  //             <span>{item?.publish_date}</span>
  //             <br />
  //             <span>{item?.start_time}</span>
  //           </div>
  //         ),
  //         publishwebsite: <span>{item?.website_name}</span>,
  //         type: <span>{item?.notification_type}</span>,
  //         status: (
  //           <span>
  //             {item?.offer_status === 1 ? (
  //               <div>active</div>
  //             ) : (
  //               <div>inactive</div>
  //             )}
  //           </span>
  //         ),
  //         icon: <AiOutlineEye className="eye-icon-size" />,
  //       };
  //     });
  // console.log(modifiedOffersmanagementDetails, ",,,,,,live");
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Offers</h6>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" d-flex justify-content-between">
            {offerDetails?.map((offer, index) => (
              <div
                key={index}
                className={`col-md-auto medium-font justify-content-between p-2 px-4 m-1 ${
                  offer === activeOffer
                    ? "active text-white"
                    : "table-header-box"
                }`}
                onClick={() => handleOffer(offer)}
              >
                {offer}
              </div>
            ))}
          </div>

          {/* <div className=" d-flex justify-content-between">
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
          </div> */}
          <div className=" d-flex justify-content-between align-items-center">
            <div className="containaer-fluid w-55 mt-1">
              <form className="d-flex" role="search">
                <input
                  className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => searchContent(e.target.value)}
                />
              </form>
            </div>
            <div className="row justify-content-md-center m-1 p-1">
              <div
                className="active text-white col-md-auto medium-font justify-content-between px-2 p-2 m-1"
                onClick={() => {
                  navigate("/create-new-offer");
                }}
              >
                +Add New
              </div>
            </div>
          </div>
        </div>
        <div className=" medium-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
          All Notifications
        </div>
        {activeOffer === "Published" && <PublishedTabledata />}
        {activeOffer === "Scheduled" && <ScheduledData />}
        {activeOffer === "Draft" && <DraftTable />}
      </div>
    </div>
  );
}

export default Offersmanagement;
