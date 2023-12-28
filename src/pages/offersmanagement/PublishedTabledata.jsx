import React from "react";
import Table from "../table/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { GET_ALL_OFFERS } from "../../config/endpoints";
import { OFFERS_ACTIVE_INACTIVE } from "../../config/endpoints";
import { call } from "../../config/axios";
import OfferMessagePopup from "../Popups/OfferMessagePopup";

function PublishedTabledata(props) {
  const { searchOffer } = props;
  const [Offersmanagement, setOffermanagement] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState([]);
  const [showOfferOpen, setShowOfferOpen] = useState(false);
  const [active, setActive] = useState(false);

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
      const arr = res?.data?.data.map((obj) => {
        return {
          ...obj,
          title: "special offers",
        };
      });
      setOffermanagement(arr);
    });
  };
  console.log("Offersmanagement", Offersmanagement);
  const handleBlockUnBlock = async (item, currentActiveState) => {
    const payload = {
      offer_id: item,
      active: !currentActiveState,
    };
    await call(OFFERS_ACTIVE_INACTIVE, payload)
      .then((res) => {
        setActive(!currentActiveState);
        setActive((prev) => !prev);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllOffers();
  }, [active]);

  const currentDate = new Date().toISOString().split("T")[0];
  const filterStatus = Offersmanagement.filter(
    (res) =>
      // res.status === true &&
      res.publish_date <= currentDate &&
      res?.title?.toLowerCase().includes(searchOffer.toLowerCase())
  );
  const modifiedOffersmanagementDetails =
    filterStatus?.length > 0 &&
    filterStatus?.map((item) => ({
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
        item?.active === true ? (
          <div
            className="font-green custom-active-button px-2"
            onClick={() => {
              handleBlockUnBlock(item?.offer_id, item?.active);
            }}
          >
            Active
          </div>
        ) : (
          <div
            className="custom-deactive-button px-2"
            onClick={() => {
              handleBlockUnBlock(item.offer_id, item?.active);
            }}
          >
            InActive
          </div>
        ),
      icon: (
        <AiOutlineEdit
          className="eye-icon-size"
          onClick={() => {
            handleOfferOpen(item);
          }}
        />
      ),
    }));
  const handleOfferOpen = (item) => {
    setShowOfferOpen(true);
    setSelectedOffer(item);
  };
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

export default PublishedTabledata;
