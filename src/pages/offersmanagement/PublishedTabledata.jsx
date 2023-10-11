import React from "react";
import Table from "../table/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { GET_ALL_OFFERS } from "../../config/endpoints";
import { call } from "../../config/axios";

function PublishedTabledata() {
  const [Offersmanagement, setOffermanagement] = useState([]);
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
    await call(GET_ALL_OFFERS, payload).then((res) => {
      console.log("res-------->", res);
      const arr = res?.data?.data.map((obj) => {
        return {
          ...obj,
          title: "special offers",
        };
      });
      setOffermanagement(arr);
    });
  };
  useEffect(() => {
    getAllOffers();
  }, []);
  const filterStatus = Offersmanagement.filter((res) => res.status === true);
  const modifiedOffersmanagementDetails = filterStatus.map((item) => ({
    ...item,
    title: (
      <div className="role-color">
        <span className="role-color">{item?.title}</span>{" "}
      </div>
    ),
    publishdate: item?.update_at,
    publishwebsite: item?.website_name,
    type: item?.country_name,
    status: item?.status === true ? "Active" : "In Active",
    icon: <AiOutlineEdit className="eye-icon-size" />,
  }));

  return (
    <div className="p-4 w-100">
      <div className="sidebar-bg rounded">
        <Table columns={cols} data={modifiedOffersmanagementDetails} />
      </div>
    </div>
  );
}

export default PublishedTabledata;
