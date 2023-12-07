import React from "react";
import Table from "../table/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { GET_ALL_OFFERS } from "../../config/endpoints";
import { call } from "../../config/axios";
import OfferMessagePopup from "../Popups/OfferMessagePopup";

function DraftTable(props) {
  const { searchOffer } = props;
  const [Offersmanagement, setOffermanagement] = useState([]);
  const [selectedOffer,setSelectedOffer] =useState([]);
  const [showOfferOpen,setShowOfferOpen] =useState(false)
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
  const filterData = Offersmanagement.filter(
    (res) =>
      res.status === false &&
      res?.title?.toLowerCase().includes(searchOffer.toLowerCase())
  );
  const modifiedOffersmanagementDetails = filterData.map((item) => ({
    ...item,
    title: (
      <div className="role-color">
        <span className="role-color">{item?.title}</span>{" "}
      </div>
    ),
    publishdate: item?.publish_date,
    publishwebsite: item?.website_name,
    type: item?.country_name,
    status: item?.status === false && (
      <div>
        <div className="active rounded px-1">Sheduled</div>
        <div className="active rounded px-1 mt-1">Published</div>
      </div>
    ),
    icon: <AiOutlineEdit className="eye-icon-size" onClick={()=>{
      handleOfferOpen(item)
    }}/>,
  }));

const handleOfferOpen=(item)=>{
    setShowOfferOpen(true)
    setSelectedOffer(item)
}

  console.log(filterData, "..........filterData");
  return (
    <div className="p-4 w-100">
      <div className="sidebar-bg rounded">
        <Table columns={cols} data={modifiedOffersmanagementDetails} />
        <OfferMessagePopup
            selectedOffer={selectedOffer}
            showOfferOpen={showOfferOpen}
            setShowOfferOpen={setShowOfferOpen}
         />
      </div>
    </div>
  );
}

export default DraftTable;
