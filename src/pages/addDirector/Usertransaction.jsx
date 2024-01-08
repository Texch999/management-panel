import React, { useEffect, useRef, useState } from "react";
import Totalaccount from "../home/Totalaccount";
import Dropdown from "react-bootstrap/Dropdown";
import { TbWorld } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { Images } from "../../images";
import { AiOutlineEye } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BiUser } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import TransactionTable from "./TransactionTable";
import PaymentGateway from "./PaymentGateway";
import WebsitesLimit from "./WebsitesLimit";
import { MdKeyboardArrowDown } from "react-icons/md";
import RevenueOfflineShare from "./RevenueOfflineShare";
import RevenueOfflineTable from "./RevenueOfflineTable";
import { useParams } from "react-router-dom";
import { call } from "../../config/axios";
import {
  GENERATE_SIGNED_URL,
  GET_ALL_USERS,
  USERS_ACTIVE_INACTIVE,
} from "../../config/endpoints";
function Usertransaction() {
  const adminPayload = useParams();
  const [OnlineWebsites, setOnlineWebsites] = useState(true);
  // const [OfflineWebsites, setOfflineWebsites] = useState();
  // const [active, setActive] = useState("Transaction");
  const [transactionData, setTransactionData] = useState("Transaction");
  const [activeDrop, setActiveDrop] = useState(false);
  const [allDirectors, setAllDirectors] = useState([]);
  const [active, setActive] = useState();
  const [profileImage, setProfileImage] = useState("");
  const [singedUrl, setSignedUrl] = useState("");
  const [uploadImage, setuploadImage] = useState([]);
  const [imageId, setImageId] = useState("");
  // const [isProcessing, setIsProcessing] = useState(false);

  const uploadfileInputRef = useRef(null);

  const handleActiveButton = (type) => {
    setTransactionData(type);
    setActiveDrop((prev) => !prev);
    console.log(type);
  };

  const getDirectors = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_USERS, payload)
      .then((res) => {
        setAllDirectors(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };

  const handleBlockUnBlock = async (item, active) => {
    const payload = {
      register_id: item,
      active: !active,
    };
    await call(USERS_ACTIVE_INACTIVE, payload)
      .then((res) => {
        setActive(!active);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    generateSignedUrl();
  };

  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  const generateSignedUrl = async () => {
    setuploadImage(true);
    const posetNewId = new Date().getTime();
    console.log(posetNewId, "====>posetNewId");
    await call(GENERATE_SIGNED_URL, {
      register_id: `${posetNewId}`,
      event_type: "user_profile_image",
      folder_name: "user-images",
    })
      .then(async (res) => {
        setuploadImage(false);
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setImageId(posetNewId);
      })
      .catch((err) => {
        setuploadImage(false);
        console.log("generating signed url error", err);
      });
  };

  useEffect(() => {
    getDirectors();
  }, [active]);

  const filteredData = allDirectors?.filter(
    (item) => item.register_id === adminPayload.id
  );

  // const handleOffline = () => {
  //   setOfflineWebsites(true);
  //   setOnlineWebsites(false);
  // };
  const handleOnline = (item) => {
    // setOfflineWebsites(false);
    setOnlineWebsites(item);
  };
  const currentUrl = window.location.href;
  const contains = currentUrl.includes("/usertransaction/");

  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey p-1">userprofile/profile</h6>
      <div className="w-100">
        <img
          src={contains ? "../assets/profile-banner.png" : Images.ProfileBanner}
          className="w-100"
          alt="profile_banner"
        />
        <div className="sidebar-bg th-color user-img-bg-br row row-unset p-2">
          <div
            className="col-5 d-flex"
            onClick={handleUploadButtonClick}
            disabled={uploadImage}
          >
            <img
              src={contains ? "../assets/person-img.png" : Images.PersonImg}
              className="w-20 user-margin-top"
              alt="profile_image"
            />
            <input
              type="file"
              ref={uploadfileInputRef}
              style={{ display: "none" }}
              onChange={handleUploadFileSelect}
              className="login-inputs"
            ></input>
            <div className="row px-2">
              <div className="medium-font d-flex align-items-center">
                {filteredData[0]?.user_name}
              </div>
              <div className="medium-font d-flex justify-content-between align-items-baseline w-75">
                <span>
                  <BiUser />
                  {filteredData[0]?.account_role}
                </span>
                <span>
                  <IoLocation />
                  {filteredData[0]?.country_name}
                </span>
              </div>
            </div>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-end">
            <div className="w-80 d-flex align-items-center justify-content-between">
              <div className="w-30 px-2 py-1 rounded-pill empty-bg-br small-font d-flex align-items-center justify-content-between">
                <span>User Name</span>
                <span>{filteredData[0]?.user_name}</span>
              </div>
              <div className="px-2 py-1 rounded-pill empty-bg-br small-font d-flex align-items-center justify-content-between">
                <span className="pe-4">Password</span>
                <span className="px-3 ps-5 role-color">
                  {filteredData[0]?.password}
                </span>
                <span className="role-color">
                  <AiOutlineEye className="eye-icon-size" />
                </span>
              </div>
              <div
                className="active text-white align-items-center small-font p-2 m-1 d-flex justify-content-between align-items-center"
                onClick={() => {
                  handleBlockUnBlock(
                    filteredData[0]?.register_id,
                    filteredData[0]?.active
                  );
                }}
              >
                <TiTick className="eye-icon-size" />
                {filteredData[0]?.active ? "Active" : "Inactive"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Totalaccount />
      </div>
      <div className="gutter-1rem p-2 d-flex head-container">
        <div className="d-flex flex-column">
          <div
            className={`d-flex table-header-box medium-font p-2 px-4 py-2 m-1 align-items-center
                        ${
                          transactionData === "Websites/Limit" && "dropdown-clr"
                        }`}
            onClick={() => handleActiveButton("Websites/Limit")}
          >
            <TbWorld className="medium-font" />
            <div className="medium-font ps-2">Websites/Limit</div>
            <MdKeyboardArrowDown className="fs-6" />
          </div>
          {transactionData === "Websites/Limit" && activeDrop === true && (
            <div className="empty-bg-br d-flex flex-column justify-content-between online-div th-color medium-font">
              <div className="d-flex justify-content-between p-2">
                <span onClick={() => handleOnline("online")}>Online</span>
                <span onClick={() => handleOnline("offline")}>Offline</span>
              </div>
              <hr className="hr-line" />
              {OnlineWebsites === "online" && (
                <div>
                  <div className="d-flex justify-content-between p-2">
                    <span>www.we2call.com</span>
                    <span class="form-check">
                      <input
                        class="form-check-input check-box-input-clr"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between p-2">
                    <span>www.we2call.com</span>
                    <span class="form-check">
                      <input
                        class="form-check-input check-box-input-clr"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between p-2">
                    <span>www.we2call.com</span>
                    <span class="form-check">
                      <input
                        class="form-check-input check-box-input-clr"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                    </span>
                  </div>
                </div>
              )}
              {OnlineWebsites === "offline" && (
                <div className="d-flex justify-content-between p-2">
                  <span>{filteredData[0]?.website_name}</span>
                  <span class="form-check">
                    <input
                      class="form-check-input check-box-input-clr"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={`d-flex table-header-box height-fit-content medium-font p-2 px-4 py-2 m-1 align-items-center
                        ${
                          transactionData === "Payment Gateway" &&
                          "dropdown-clr"
                        }`}
          onClick={() => handleActiveButton("Payment Gateway")}
        >
          <MdPayment className="medium-font" />
          <div className="medium-font ps-2">Payment Gateway</div>
        </div>
        <div
          className={`d-flex table-header-box height-fit-content medium-font p-2 px-4 py-2 m-1 align-items-center
               ${transactionData === "Transaction" && "dropdown-clr"}`}
          onClick={() => handleActiveButton("Transaction")}
        >
          <HiMiniArrowPathRoundedSquare className="medium-font" />
          <div className="medium-font ps-2">Transaction</div>
        </div>
      </div>
      {transactionData === "Websites/Limit" && OnlineWebsites === "online" && (

        <WebsitesLimit />
      )}
      {transactionData === "Websites/Limit" && OnlineWebsites === "offline" && (
        <div>
          <RevenueOfflineShare adminPayload={adminPayload} />
          {/* <RevenueOfflineTable /> */}
        </div>
      )}
      {transactionData === "Payment Gateway" && <PaymentGateway />}
      {transactionData === "Transaction" && <TransactionTable />}
    </div>
  );
}

export default Usertransaction;
