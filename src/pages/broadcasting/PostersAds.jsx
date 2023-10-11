import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
//import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { MdUpload } from "react-icons/md";
import { call } from "../../config/axios";
import { ADD_POSTERS_AND_ADS } from "../../config/endpoints";
import { GET_ALL_WEBSITES } from "../../config/endpoints";
import { GET_ALL_USERS } from "../../config/endpoints";
import { GET_COUNTRY_AND_CURRENCY } from "../../config/endpoints";
import { GENERATE_SIGNED_URL } from "../../config/endpoints";

function PostersAds() {
  const ImageBaseUrl = "https://we2-call-images.s3.us-east-2.amazonaws.com";
  const [notificationtextmsg, setnotificationtextmsg] = useState({});
  const [posterId, setPosterId] = useState("");
  const [singedUrl, setSignedUrl] = useState("");
  const [uploadImage, setuploadImage] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [error, setError] = useState("");
  //console.log(notificationtextmsg, "res----------->");

  const uploadfileInputRef = useRef(null);

  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    generateSignedUrl();
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  const handelPostersAds = async (status) => {
    console.log("click me............");
    if (
      !(
        notificationtextmsg?.website_name ||
        notificationtextmsg?.country_name ||
        notificationtextmsg?.user ||
        notificationtextmsg?.notification_type ||
        notificationtextmsg?.description
      )
    ) {
      console.log("testing.........");
      return setError("missing required fields");
    } else {
      setError("");
      await call(ADD_POSTERS_AND_ADS, {
        register_id: "reg-20230710182031623",
        website_name: notificationtextmsg.website_name,
        user: notificationtextmsg.user,
        country_name: notificationtextmsg.country_name,
        notification_type: notificationtextmsg.notification_type,
        description: notificationtextmsg.description,
        start_date: notificationtextmsg.start_date,
        end_date: notificationtextmsg.end_date,
        publish_date: notificationtextmsg.publish_date,
        upload_image: `${ImageBaseUrl}/${"posters-images"}/${posterId}.png`,
        status,
      }).then(async (res) => {
        setnotificationtextmsg(res?.data);
        singedUrl &&
          profileImage &&
          (await fetch(singedUrl, {
            method: "PUT",
            body: profileImage,
            headers: {
              "Content-Type": "image/jpeg",
              "cache-control": "public, max-age=0",
            },
          })
            .then((res) => {})
            .catch((err) => {
              console.log("err: ", err);
            }));
      });
    }
  };

  const generateSignedUrl = async () => {
    setuploadImage(true);
    const posetNewId = new Date().getTime();
    await call(GENERATE_SIGNED_URL, {
      register_id: `${posetNewId}`,
      event_type: "user_profile_image",
      folder_name: "posters-images",
    })
      .then(async (res) => {
        setuploadImage(false);
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setPosterId(posetNewId);
      })
      .catch((err) => {
        setuploadImage(false);
        console.log("generating signed url error", err);
      });
  };

  useEffect(() => {
    setnotificationtextmsg();
  }, []);

  const handelChange = (e) => {
    //console.log("result", [e.target.name], e.target.value);
    setnotificationtextmsg({
      ...notificationtextmsg,
      [e.target.name]: e.target.value,
    });
  };

  const [websiteNames, setwebsiteNames] = useState([]);
  const getwebsiteNames = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        console.log("response=====>", res);
        setwebsiteNames(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getwebsiteNames();
  }, []);

  console.log("websiteNames", websiteNames);

  const [allUsers, setgetallUsers] = useState([]);
  const getallUsers = async () => {
    const payload = {
      register_id: "reg-20230913085731533",
    };
    await call(GET_ALL_USERS, payload)
      .then((res) => {
        console.log("response=====>", res);
        setgetallUsers(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getallUsers();
  }, []);
  console.log("allUsers", allUsers);

  const [allCountries, setallCountries] = useState([]);
  const getallCountries = async () => {
    const payload = {
      register_id: "reg-20230909114353315",
    };
    await call(GET_COUNTRY_AND_CURRENCY, payload)
      .then((res) => {
        console.log("res", res);
        setallCountries(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getallCountries();
  }, []);
  console.log("allCountries", allCountries);

  return (
    <div className="p-4">
      <Container fluid className="my-2">
        <Row>
          <Col className="ps-0">
            <Container>
              <Row>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select Website *
                    </div>
                    <select
                      name="website_name"
                      id="website_name"
                      value={notificationtextmsg?.website_name || ""}
                      onChange={(e) => handelChange(e)}
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                    > 
                      <option value = "select">select</option>
                      <option value = "All">All</option>
                      {websiteNames.map((obj) => (
                        <option value={obj.web_id} selected>
                          {obj.web_url}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select User/Admin *
                    </div>
                    <select
                      name="user"
                      id="user"
                      value={notificationtextmsg?.user || ""}
                      onChange={(e) => handelChange(e)}
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                    > 
                      <option value = "select">select</option>
                      <option value = "All">All</option>
                      {allUsers.map((obj) => (
                        <option value={obj.user_name} selected>
                          {obj.user_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select Country *
                    </div>
                    <select
                      name="country_name"
                      id="country_name"
                      value={notificationtextmsg?.country_name || ""}
                      onChange={(e) => handelChange(e)}
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                    >
                      <option value = "select">select</option>
                      <option value = "All">All</option>
                      {allCountries.map((obj) => (
                        <option value={obj.country_name} selected>
                          {obj.country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                {" "}
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Notification Type *
                    </div>
                    <select
                      name="notification_type"
                      id="notification_type"
                      value={notificationtextmsg?.notification_type || ""}
                      onChange={(e) => handelChange(e)}
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                    >
                      {/* <option selected>Select</option> */}
                      <option selected>Select</option>
                      <option value="Demo">Demo</option>
                      <option value="Demo">Demo</option>
                      <option value="Demo">Demo</option>
                      <option value="Demo">Demo</option>
                    </select>
                  </div>
                </Col>
                <Col>
                  <div className="small-font clr-grey my-2">
                    Upload Screenshot
                  </div>
                  <div
                    className="w-100 custom-select small-font input-btn-bg p-3 my-2 all-none rounded all-none d-flex flex-row justify-content-between align-items-center"
                    onClick={handleUploadButtonClick}
                    disabled={uploadImage}
                  >
                    <div className="small-font font-grey">
                      Upload Screenshot
                    </div>
                    <input
                      type="file"
                      ref={uploadfileInputRef}
                      style={{ display: "none" }}
                      onChange={handleUploadFileSelect}
                      className="login-inputs"
                    ></input>
                    <MdUpload className="upload-icon" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="pe-0">
            <div className="small-font my-2 clr-grey">Description</div>
            <textarea
              type="text"
              name="description"
              id="description"
              value={notificationtextmsg?.description || ""}
              onChange={(e) => handelChange(e)}
              placeholder="Type Here ............"
              className="w-100 custom-select small-font input-btn-bg rounded all-none py-3 px-2 h-85"
            ></textarea>
          </Col>
        </Row>
      </Container>
      <hr className="hr-line my-2" />
      <div className="w-25">
        <div className="rounded-pill medium-font px-3 py-2 completed-btn w-50 text-center">
          Publish Details
        </div>
      </div>
      <Container fluid className="mt-2">
        <Row className="w-100">
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">Active From</div>
              <div className=" d-flex flex-row w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none align-items-center">
                <input
                  type="date"
                  className="login-input all-none w-50"
                  name="start_date"
                  value={notificationtextmsg?.start_date || ""}
                  onChange={(e) => handelChange(e)}
                ></input>
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">To</div>
              <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center">
                {/* <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                /> */}
                <input
                  className="login-input all-none w-50"
                  type="date"
                  name="end_date"
                  value={notificationtextmsg?.end_date || ""}
                  onChange={(e) => handelChange(e)}
                ></input>
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">Publish Date</div>
              <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center">
                {/* <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                /> */}
                <input
                  type="date"
                  className="login-input all-none w-50"
                  name="publish_date"
                  value={notificationtextmsg?.publish_date || ""}
                  onChange={(e) => handelChange(e)}
                ></input>
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="d-flex align-items-center flex-row px-3 mt-3">
        <input type="checkbox" />
        <div className="medium-font mx-2 clr-grey">Publish Now</div>
      </div>
      {error && <div className="danger">{error}</div>}
      <div className="row w-100 d-flex flex-row justify-content-between my-3">
        <div className="col-sm d-flex flex-row">
          <button
            type="submit"
            className="add-button  medium-font rounded px-3 py-3 mx-2  all-none "
            onClick={() => handelPostersAds(true)}
          >
            Publish
          </button>

          <button
            type="submit"
            className="msg-deactive-button  medium-font rounded  mx-2 all-none px-3 py-3"
            onClick={() => handelPostersAds(false)}
          >
            Save As Draft
          </button>
        </div>
        <div className="col-sm d-flex justify-content-end">
          <button
            type="submit"
            className="msg-deactive-button  medium-font rounded  mx-2 all-none px-3 py-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostersAds;
