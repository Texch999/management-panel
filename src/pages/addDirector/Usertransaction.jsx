import React, { useState } from "react";
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
function Usertransaction() {
  const [OnlineWebsites, setOnlineWebsites] = useState(true);
  const [OfflineWebsites, setOfflineWebsites] = useState();
  const [active, setActive] = useState("Transaction");
  const [activeDrop, setActiveDrop] = useState(false);

  const handleActiveButton = (type) => {
    setActive(type);
    setActiveDrop((prev) => !prev);
    console.log(type);
  };
  // const handleOffline = () => {
  //   setOfflineWebsites(true);
  //   setOnlineWebsites(false);
  // };
  const handleOnline = (item) => {
    // setOfflineWebsites(false);
    setOnlineWebsites(item);
  };
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey p-1">userprofile/profile</h6>
      <div className="w-100">
        <img src={Images.ProfileBanner} className="w-100" />
        <div className="sidebar-bg th-color user-img-bg-br row row-unset p-2">
          <div className="col-5 d-flex">
            <img src={Images.PersonImg} className="w-20 user-margin-top" />
            <div className="row px-2">
              <div className="medium-font d-flex align-items-center">
                Srinivas
              </div>
              <div className="medium-font d-flex justify-content-between align-items-baseline w-75">
                <span>
                  <BiUser />
                  Director
                </span>
                <span>
                  <IoLocation />
                  India
                </span>
              </div>
            </div>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-end">
            <div className="w-80 d-flex align-items-center justify-content-between">
              <div className="w-30 px-2 py-1 rounded-pill empty-bg-br small-font d-flex align-items-center justify-content-between">
                <span>User Name</span>
                <span>Srinivas</span>
              </div>
              <div className="px-2 py-1 rounded-pill empty-bg-br small-font d-flex align-items-center justify-content-between">
                <span className="pe-4">Password</span>
                <span className="px-3 ps-5 role-color">1234567</span>
                <span className="role-color">
                  <AiOutlineEye className="eye-icon-size" />
                </span>
              </div>
              <div className="active text-white align-items-center small-font p-2 m-1 d-flex justify-content-between align-items-center">
                <TiTick className="eye-icon-size" /> Active
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
                        ${active === "Websites/Limit" && "dropdown-clr"}`}
            onClick={() => handleActiveButton("Websites/Limit")}
          >
            <TbWorld className="medium-font" />
            <div className="medium-font ps-2">Websites/Limit</div>
            <MdKeyboardArrowDown className="fs-6" />
          </div>
          {active === "Websites/Limit" && activeDrop === true && (
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
              )}
            </div>
          )}
        </div>
        <div
          className={`d-flex table-header-box height-fit-content medium-font p-2 px-4 py-2 m-1 align-items-center
                        ${active === "Payment Gateway" && "dropdown-clr"}`}
          onClick={() => handleActiveButton("Payment Gateway")}
        >
          <MdPayment className="medium-font" />
          <div className="medium-font ps-2">Payment Gateway</div>
        </div>
        <div
          className={`d-flex table-header-box height-fit-content medium-font p-2 px-4 py-2 m-1 align-items-center
               ${active === "Transaction" && "dropdown-clr"}`}
          onClick={() => handleActiveButton("Transaction")}
        >
          <HiMiniArrowPathRoundedSquare className="medium-font" />
          <div className="medium-font ps-2">Transaction</div>
        </div>
      </div>
      {active === "Websites/Limit" && OnlineWebsites === "online" && (
        <WebsitesLimit />
      )}
      {active === "Websites/Limit" && OnlineWebsites === "offline" && (
        <div>
          <RevenueOfflineShare />
          {/* <RevenueOfflineTable /> */}
        </div>
      )}
      {active === "Payment Gateway" && <PaymentGateway />}
      {active === "Transaction" && <TransactionTable />}
    </div>
  );
}

export default Usertransaction;
