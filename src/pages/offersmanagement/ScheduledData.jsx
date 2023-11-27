import React from "react";
import Table from "../table/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { GET_ALL_OFFERS } from "../../config/endpoints";
import { call } from "../../config/axios";

function PublishedTabledata(props) {
  const { searchOffer } = props;
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
      register_id: "company",
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
  const currentDate = new Date().toISOString().split("T")[0];
  console.log("---------->", currentDate);
  const scheduledData = Offersmanagement.filter(
    (res) =>
      res.publish_date > currentDate &&
      res?.title?.toLowerCase().includes(searchOffer.toLowerCase())
  );
  const modifiedOffersmanagementDetails = scheduledData.map((item) => ({
    ...item,
    title: (
      <div className="role-color">
        <span className="role-color">{item?.title}</span>{" "}
      </div>
    ),
    publishdate: item?.publish_date,
    publishwebsite: item?.website_name,
    type: item?.country_name,
    status:
      item?.status === true ? (
        <div className="font-green custom-active-button px-2">Active</div>
      ) : (
        <div className="custom-deactive-button px-2">InActive</div>
      ),
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
