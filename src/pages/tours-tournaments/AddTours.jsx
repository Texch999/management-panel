import React, { useEffect, useState } from "react";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { BiSolidArrowFromBottom } from "react-icons/bi";
// import { BsChevronDown } from "react-icons/bs";
import { FaCalendarDays } from "react-icons/fa6";
import { HiMiniArrowUpCircle } from "react-icons/hi2";
import ReturnedPaymentPopup from "../Popups/ReturnedPaymentPopup";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { call } from "../../config/axios";
import { ADD_TOURS } from "../../config/endpoints";
import { GET_ADMIN_ALL_ACCOUNTS } from "../../config/endpoints";

function AddTours() {
  const toursType = [
    "1.Take Part in Our Tour",
    "2.Cricket Tour",
    "3.Sports Tour",
    "4.Casino Tour",
    "5.Entertainment Tour",
  ];
  const [showReturnPopup, setShowReturnPopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const [website, setWebsite] = useState([]);
  const [allWebsites, setAllWebsites] = useState([]);
  const [country, setCountry] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [formData, setFormData] = useState({});
  const [headerMessage, setHeaderMessage] = useState("");

  const handleReturnPaymentpopup = (tourType) => {
    addingTours(tourType);
  };
  const handleChange = (e, index) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setActiveIndex(index);
  };

  const addingTours = async (tourType) => {
    const payload = {
      tour_name: tourType,
      website: website,
      country: country,
      tour_location: formData.tourLocation,
      publish_from: formData.publishFrom,
      publish_upto: formData.publishUpto,
      schedule_from: formData.scheduleFrom,
      schedule_upto: formData.scheduleUpto,
      tour_title: formData.tourTitle,
      quotations: formData.quotation,
    };
    await call(ADD_TOURS, payload)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setShowReturnPopup(true);
          setHeaderMessage("Tour Added Successfully");
          setFormData({})
        }
      })
      .catch((error) => {
        setShowReturnPopup(true);
        setHeaderMessage(error);
      });
  };
  const gettingAllCountries = async () => {
    const payload = {};
    await call(GET_ADMIN_ALL_ACCOUNTS, payload)
      .then((res) => {
        setAllCountries([
          ...new Set(
            res?.data?.data
              .filter((item) => item.country_name !== undefined)
              .map((item) => item.country_name)
          ),
        ]);
        setAllWebsites([
          ...new Set(
            res?.data?.data
              .filter((item) => item.website_name !== undefined)
              .map((item) => item.website_name)
          ),
        ]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    gettingAllCountries();
  }, []);

  return (
    <div className="add-tours p-3 mt-3">
      <div className="row d-flex justify-content-end">
        <div className="col-4 d-flex justify-content-between">
          <select
            className="tours-box p-2 medium-font rounded-top text-center"
            name="website"
            onChange={(e) => setWebsite(e.target.value)}
          >
            <option selected>select website</option>
            {allWebsites &&
              allWebsites.length > 0 &&
              allWebsites.map((item) => {
                if (item.length > 0) {
                  return <option value={item}>{item}</option>;
                }
              })}
          </select>
          <select
            className="tours-box p-2 medium-font rounded-top text-center"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected>select country</option>
            {allCountries &&
              allCountries.length > 0 &&
              allCountries.map((item) => {
                if (item.length > 0) {
                  return <option value={item}>{item}</option>;
                }
              })}
          </select>
        </div>
      </div>
      {toursType.map((item, index) => {
        return (
          <div>
            <div className="sub-head medium-font">{item}</div>
            <div className="row mt-2 vh-17vh">
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <div className="medium-font font-grey">Upload Poster</div>
                    <div className="upload-poster-div d-flex align-items-center p-2">
                      <input
                        id="files"
                        className="file-input w-75"
                        placeholder="Select file"
                        styles="visibility:hidden;"
                        name="poster_img"
                        disabled
                      ></input>
                      <HiMiniArrowUpCircle className="ions-clr" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="medium-font font-grey">Tour Location</div>
                    <div className="upload-poster-div d-flex align-items-center justify-content-between p-2">
                      <input
                        className="text-input-poster"
                        name="tourLocation"
                        placeholder="Enter tour location"
                        value={
                          activeIndex === index ? formData.tourLocation : ""
                        }
                        onChange={(e) => handleChange(e, index)}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <div className="medium-font font-grey">Publish From</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input
                        type="date"
                        className="file-input"
                        name="publishFrom"
                        onChange={(e) => handleChange(e, index)}
                        value={
                          activeIndex === index ? formData.publishFrom : ""
                        }
                      ></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="medium-font font-grey">Publish Upto</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input
                        type="date"
                        className="file-input"
                        name="publishUpto"
                        value={
                          activeIndex === index ? formData.publishUpto : ""
                        }
                        onChange={(e) => handleChange(e, index)}
                      ></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="medium-font font-grey">Tour Title</div>
                <div className="upload-poster-div p-2 d-flex align-items-center">
                  <textarea
                    className="text-input-poster"
                    name="tourTitle"
                    placeholder="Enter tour title"
                    value={activeIndex === index ? formData.tourTitle : ""}
                    onChange={(e) => handleChange(e, index)}
                  ></textarea>
                </div>
                <div className="row d-flex mt-2">
                  <div className="col-6">
                    <div className="medium-font font-grey">Schedule From</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input
                        type="date"
                        className="file-input"
                        name="scheduleFrom"
                        value={
                          activeIndex === index ? formData.scheduleFrom : ""
                        }
                        onChange={(e) => handleChange(e, index)}
                      ></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="medium-font font-grey">Schedule Upto</div>
                    <div className="upload-poster-div p-2 d-flex align-items-center">
                      <input
                        type="date"
                        className="file-input"
                        name="scheduleUpto"
                        value={
                          activeIndex === index ? formData.scheduleUpto : ""
                        }
                        onChange={(e) => handleChange(e, index)}
                      ></input>
                      <FaCalendarDays className="ions-clr" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="medium-font font-grey">Quotations</div>
                <div className="upload-poster-div p-2 d-flex align-items-center">
                  <textarea
                    className="text-input"
                    name="quotation"
                    value={activeIndex === index ? formData.quotation : ""}
                    onChange={(e) => handleChange(e, index)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-end mt-2">
              <div className="btn-cls">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleReturnPaymentpopup(item)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <MatchSubmitPopup
        header={headerMessage}
        state={showReturnPopup}
        setState={setShowReturnPopup}
      />
    </div>
  );
}

export default AddTours;
