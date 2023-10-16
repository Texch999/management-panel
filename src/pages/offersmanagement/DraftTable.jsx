import React from "react";
import Table from "../table/Table";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ADD_OFFERS } from "../../config/endpoints";
import { call } from "../../config/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { GrEdit } from "react-icons/gr";

function DraftTable() {
  const [allOffers, setAllOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchText, setSearchText] = useState("");
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
  const getAllOffers = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(ADD_OFFERS, payload)
      .then((res) => {
        console.log("response====>", res);
        setAllOffers(res?.data?.data?.offers);
      })

      .catch((err) => console.log(err));
  };
  console.log("AllOffers===>", allOffers);
  useEffect(() => {
    getAllOffers();
  }, []);

  // const modifiedOffersmanagementDetails = allOffers.map((item) => ({
  //   title: (
  //     <div className="role-color">
  //       <span className="role-color">{item?.offer_name}</span>{" "}
  //     </div>
  //   ),
  //   publishdate: (
  //     <div>
  //       <span>{item?.publish_date}</span>
  //       <br />
  //       <span>{item?.start_time}</span>
  //     </div>
  //   ),
  //   publishwebsite: <span>{item?.website_name}</span>,
  //   type: <span>{item?.notification_type}</span>,
  //   status: (
  //     <span>
  //       {item?.offer_status === 1 ? <div>active</div> : <div>inactive</div>}
  //     </span>
  //   ),
  //   icon: <AiOutlineEye className="eye-icon-size" />,
  // }));
  const modifiedOffersmanagementDetails = searchText.length
    ? filteredOffers
        .filter((item) =>
          item?.offer_name?.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            title: (
              <div className="role-color">
                <span className="role-color">{item?.offer_name}</span>{" "}
              </div>
            ),
            publishdate: (
              <div>
                <span>{item?.publish_date}</span>
                <br />
                <span>{item?.start_time}</span>
              </div>
            ),
            publishwebsite: <span>{item?.website_name}</span>,
            type: <span>{item?.notification_type}</span>,
            status: (
              <span>
                {item?.offer_status === 1 ? (
                  <div>active</div>
                ) : (
                  <div>inactive</div>
                )}
              </span>
            ),
            icon: <GrEdit className="eye-icon-size" />,
          };
        })
    : allOffers?.map((item) => {
        return {
          title: (
            <div className="role-color">
              <span className="role-color">{item?.offer_name}</span>{" "}
            </div>
          ),
          publishdate: (
            <div>
              <span>{item?.publish_date}</span>
              <br />
              <span>{item?.start_time}</span>
            </div>
          ),
          publishwebsite: <span>{item?.website_name}</span>,
          type: <span>{item?.notification_type}</span>,
          status: (
            <span>
              {item?.offer_status === 1 ? (
                <div>active</div>
              ) : (
                <div>inactive</div>
              )}
            </span>
          ),
          icon: <GrEdit className="eye-icon-size" />,
        };
      });
  console.log(modifiedOffersmanagementDetails, ",,,,,,live");
  return (
    <div className="p-4 w-100">
      <div className="sidebar-bg rounded">
        <Table columns={cols} data={modifiedOffersmanagementDetails} />
      </div>
    </div>
  );
}

export default DraftTable;
