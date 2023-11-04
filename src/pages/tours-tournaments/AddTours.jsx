import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidArrowFromBottom } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { HiMiniArrowUpCircle } from "react-icons/hi2";
import ReturnedPaymentPopup from "../Popups/ReturnedPaymentPopup";

function AddTours() {
  const toursType = ["1.Tour", "2.Cricket Tour", "3.Sports Tour"];
  const [showReturnPopup, setShowReturnPopup] = useState(false);
  const handleReturnPaymentpopup = () => {
    setShowReturnPopup(true);
  };
  return (
    <div className="add-tours p-3 mt-3">
      <div className="row d-flex justify-content-end">
        <div className="col-4 d-flex justify-content-between">
          <select className="tours-box p-2 medium-font rounded-top text-center">
            <option>Select Websites</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select className="tours-box p-2 medium-font rounded-top text-center">
            <option>Select Country</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
      </div>
      {toursType.map((item, index) => {
        return (
          <div>
            <div className="sub-head medium-font">{item}</div>
            <div className="row mt-2 vh-17vh">
              <div className="col-4">
                <div>
                  <div className="medium-font font-grey">Upload Poster</div>
                  <div className="upload-poster-div d-felx align-items-center justify-content-between p-2">
                    <input
                      id="files"
                      // type="file"
                      className="file-input"
                      placeholder="Select file"
                      styles="visibility:hidden;"
                    ></input>
                    <HiMiniArrowUpCircle className="ions-clr" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="medium-font font-grey">From</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input type="date" className="file-input"></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="medium-font font-grey">To</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input type="date" className="file-input"></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="medium-font font-grey">Poster Title</div>
                <div className="upload-poster-div p-2 d-flex align-items-center">
                  <textarea className="text-input-poster"></textarea>
                </div>
                <div className="row d-flex mt-2">
                  <div className="col-6">
                    <div className="medium-font font-grey">To</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input type="date" className="file-input"></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="medium-font font-grey">To</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input type="date" className="file-input"></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="medium-font font-grey">Quotations</div>
                <div className="upload-poster-div p-2 d-flex align-items-center">
                  <textarea className="text-input"></textarea>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-end mt-2">
              <div className="btn-cls">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleReturnPaymentpopup()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <ReturnedPaymentPopup
        showReturnPopup={showReturnPopup}
        setShowReturnPopup={setShowReturnPopup}
      />
    </div>
  );
}

export default AddTours;
