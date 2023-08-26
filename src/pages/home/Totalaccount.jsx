import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

function Totalaccount() {
  return (
    <div className="p-1">
      <div className=" p-0 mt-0">
        <div className="row medium-font">
          <div className="col-15 col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="d-flex justify-content-between home-border-radius sidebar-bg text-white p-4 align-items-center">
              <div>
                <span>Total Revenue</span>
                <div>
                  <span className="medium-font">203.378</span>
                  <span className="small-font px-2 fa-fileinvo-doll-icon">
                    +6.32%
                  </span>
                </div>
              </div>
              <div className="fa-dollar-icon fs-2">
                <FaSackDollar />
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 col-lg-3
                        p-2"
          >
            <div className="d-flex justify-content-between home-border-radius sidebar-bg text-white p-4 align-items-center">
              <div>
                <span>Total Balance</span>
                <h6 className="medium-font">203.378</h6>
              </div>
              <div className="fa-c-dollar-toslot-icon fs-2">
                <FaCircleDollarToSlot />
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 col-lg-3
                        p-2"
          >
            <div className="d-flex justify-content-between home-border-radius sidebar-bg text-white p-4 align-items-center">
              <div>
                <span>Total Profit</span>
                <h6 className="medium-font">203.378</h6>
              </div>
              <div className="fa-fileinvo-doll-icon fs-2">
                <FaFileInvoiceDollar />
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-4 col-lg-3
                        p-2"
          >
            <div className="d-flex justify-content-between home-border-radius sidebar-bg text-white p-4 align-items-center">
              <div>
                <span>Total Customer</span>
                <h6 className="medium-font">203.378</h6>
              </div>
              <div className="bs-percircl-icon fs-2">
                <BsPersonCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Totalaccount;
