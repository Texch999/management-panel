import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
// import { BiSolidArrowFromBottom } from "react-icons/bi";
// import { BsChevronDown } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { HiMiniArrowUpCircle } from "react-icons/hi2";
import ReturnedPaymentPopup from "../Popups/ReturnedPaymentPopup";
import { call } from '../../config/axios';
import { ADD_TOURS } from '../../config/endpoints'

function AddTours() {
  const [website, setWebsite] = useState([]);
  const [country, setCountry] = useState("");
  // const [quotation, setQuotation] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [title, setTitle] = useState("");
  const toursType = [
    "1.Cricket Tour",
    "2.Sports Tour",
    "3.Casino Tour",
    "4.Entertainment Tour"
  ];
  const [showReturnPopup, setShowReturnPopup] = useState(false);
  const [formData, setFormData] = useState({});
  const [activeIndex, setActiveIndex] = useState();

  const handleChange = (e, i) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setActiveIndex(i);
  };
  const handleReturnPaymentpopup = () => {
    // setShowReturnPopup(true);
    const payload = {
      scheduled_date:formData.date,
      time:formData.time,
      poster_title:formData.title,
      quotations:formData.quotation,
      tour_name:formData.tourtype,
      website,
      country,
      uploadposter:formData.poster
    }
    // console.log(formData,website,country)
    call(ADD_TOURS, payload)
      // .then((res)=>res.json())
      .then((da) => console.log("response====>", da))
      .catch((err) => console.log(err));
    };
  // console.log(formData,website,country, "..formdata");
  return (
    <div className="add-tours p-3 mt-3">
      <div className="row d-flex justify-content-end">
        <div className="col-4 d-flex justify-content-between">
          <select
            className="tours-box p-2 medium-font rounded-top text-center"
            onChange={(e) => setWebsite(e.target.value)}
            value={website || ""}
            name="selectedWebsite"
          >
            <option selected>Select Websites</option>
            <option value="www.we2call.com">www.we2call.com</option>
            <option value="www.texchange.com">www.texchange.com</option>
            <option value="www.brahma.com">www.brahma.com</option>
          </select>
          <select
            className="tours-box p-2 medium-font rounded-top text-center"
            onChange={(e) => setCountry(e.target.value)}
            value={country || ""}
            name="selectedCountry"
          >
            <option selected>Select Country</option>
            <option value="malaysia">Malaysia</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
          </select>
        </div>
      </div>
      {toursType.map((item, index) => {
        return (
          <div>
            <div className="sub-head medium-font">{item}</div>
            {activeIndex===index?formData['tourtype']=item:''}
            <div className="row mt-2 vh-17vh">
              <div className="col-3">
                <div>
                  <div className="medium-font font-grey">Upload Poster</div>
                  <div className="upload-poster-div p-2">
                    <input
                      id="files"
                      // type="file"
                      className="file-input"
                      placeholder="Select file"
                      styles="visibility:hidden;"
                      name="poster"
                      onChange={(e)=>handleChange(e, index)}
                      value={activeIndex === index ? formData.poster : ""}
                    ></input>
                    <HiMiniArrowUpCircle className="ions-clr" />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="medium-font font-grey">Date</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input
                        type="date"
                        className="file-input"
                        name="date"
                        // onChange={(e) => setFormData(e.target.value)}
                        onChange={(e) => handleChange(e, index)}
                        value={activeIndex === index ? formData.date : ""}
                      ></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="medium-font font-grey">Time</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input
                        type="time"
                        className="file-input"
                        name="time"
                        onChange={(e) => handleChange(e, index)}
                        value={activeIndex === index ? formData.time : ""}
                      ></input>
                      <AiOutlineClockCircle className="ions-clr" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="medium-font font-grey">Poster Title</div>
                <div className="upload-poster-div p-2 d-flex align-items-center">
                  <textarea
                    className="text-input"
                    onChange={(e) => handleChange(e, index)}
                    value={activeIndex === index ? formData.title : ""}
                    name="title"
                  ></textarea>
                </div>
              </div>
              <div className="col">
                <div className="medium-font font-grey">Quotations</div>
                <div className="upload-poster-div p-2 d-flex align-items-center">
                  <textarea
                    className="text-input"
                    onChange={(e) => handleChange(e, index)}
                    name="quotation"
                    value={activeIndex === index ? formData.quotation : ""}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-end mt-2">
              <div className="btn-cls">
                <button
                  type="button"
                  className="btn btn-primary"
                  // value={activeIndex.inculdes(index) ? toursType[index]: ""}
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
