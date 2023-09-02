import React, { useState } from "react";
import { TbWorldUp } from "react-icons/tb";
import { BsFiles } from "react-icons/bs";
import RevenueOfflineShare from "./RevenueOfflineShare";
import RevenueOnlineShare from "./RevenueOnlineShare";
import RevenueOnlineFixd from "./RevenueOnlineFixd";
import TotalPaidBalanceTable from "./TotalPaidBalanceTable";
function WebsitesLimit() {
  const [paymentTypeSelect, setPaymentTypeSelect] = useState("");
  const handlePaymentSelect = (e) => {
    setPaymentTypeSelect(e.target.value);
  };
  console.log(paymentTypeSelect);

  return (
    <div className="sidebar-bg rounded w-100">
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="small-font">
          <TbWorldUp className="th-color" />
          <span className="th-color px-1">T Exchange |</span>
          <span className="role-color px-1">www.texch.co</span>
          <BsFiles className="th-color" />
        </div>
        <div className=" d-flex align-items-center justify-content-center th-color small-font">
          <div className="p-1">Inactive</div>
          <div className="form-check form-switch d-flex align-items-center justify-content-evenly">
            <input
              className="form-check-input button-input-clr"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div className="p-1">Active</div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="p-3">
        <div className="th-color w-fit-content rounded-pill empty-bg-br small-font p-1 px-2">
          Revenue Sharing
        </div>
      </div>
      <div className="row px-3">
        <div className="col-2">
          <div className="th-color small-font py-1">Payment Type</div>
          <div className="sport-management-input d-flex p-1 th-color small-font p-1">
            <select
              value={paymentTypeSelect}
              onChange={handlePaymentSelect}
              className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
            >
              <option value="share">Share</option>
              <option value="royalty">Royalty</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
        </div>
        {paymentTypeSelect === "fixed" && (
          <div className="col-6">
            <div className="row">
              <div className="col">
                <div className="th-color small-font py-1">Montyly</div>
                <div className="sport-management-input d-flex p-1 th-color small-font p-1">
                  <select className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select">
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="th-color small-font py-1">Sports Price</div>
                <div className="sport-management-input d-flex p-1 th-color small-font">
                  <input className="w-90 th-color small-font p-1" />
                </div>
              </div>
              <div className="col">
                <div className="th-color small-font py-1">
                  Casino Payment Type
                </div>
                <div className="sport-management-input d-flex p-1 th-color small-font p-1">
                  <select className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select">
                    <option>Share</option>
                    <option>Royalty</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col-2">
          <div className="th-color small-font py-1">Share %</div>
          <div className="sport-management-input d-flex p-1 th-color small-font">
            <input className="w-90 th-color small-font p-1" />
          </div>
        </div>
        <div className="col-2 d-flex align-items-end th-color small-font py-1">
          <div className="sport-management-input w-100 th-color small-font d-flex justify-content-center align-items-center bg-yellow">
            Updated
          </div>
        </div>
      </div>
      <hr className="hr-line mt-2" />
      <div className="row w-100 py-3">
        <div className="col-8 d-flex flex-column">
          {paymentTypeSelect === "fixed" && (
            <>
              <RevenueOnlineFixd gameName={"Sports"} />
              <RevenueOnlineFixd gameName={"Casino"} />
            </>
          )}
          {paymentTypeSelect === "share" && <RevenueOnlineShare />}
        </div>
        <div className="col-4">
          <TotalPaidBalanceTable />
        </div>
      </div>
    </div>
  );
}

export default WebsitesLimit;
