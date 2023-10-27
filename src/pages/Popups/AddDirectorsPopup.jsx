import React, { useState, useEffect } from "react";

import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import {
  ACCOUNT_REGISTERATION,
  UPDATE_PROFILE,
  GET_ALL_WEBSITES,
  GET_COUNTRY_AND_CURRENCY,
  //GET_ADMIN_USER_INFO,
} from "../../config/endpoints";
import { call } from "../../config/axios";
function AddDirectorsPopup(props) {
  const {
    showAddDirectorPopup,
    setShowAddDirectorPopup,
    heading,
    firstTextBox,
    firstSelect,
    selectedDirector,
    setStatus,
    setSelectedDirector,
  } = props;

  console.log("selectedDirector====>", selectedDirector);

  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [countryName, setCountryName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [timezone, setTimeZone] = useState("");

  console.log("role", role);

  const handleAddDirectorClose = () => {
    setShowAddDirectorPopup(false);
    setFirstName("");
    setLastName("");
    setWebsite("");
    setCountryName("");
    setTimeZone("");
    setRole("");
  };
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  useEffect(() => {
    if (selectedDirector) {
      setUserId(selectedDirector.user_name || "");
      setFirstName(selectedDirector.first_name || "");
      setLastName(selectedDirector.last_name || "");
      setPhoneNumber(selectedDirector.mobile_no || "");
      setWebsite(selectedDirector.website || "");
      setTimeZone(selectedDirector.timezone || "");
      setRole(selectedDirector.account_role || "");
      setCountryName(selectedDirector.country_name || "");
      setPasswordInput(selectedDirector.password || "");
    }
  }, [selectedDirector]);
  const handleCreateOrUpdateDirector = async (status) => {
    try {
      const url = selectedDirector ? UPDATE_PROFILE : ACCOUNT_REGISTERATION;
      const requestData = {
        creator_id: "company",
        creator_role: "company",
        creator_password: "company",
        management: "true",
        user_name: userId,
        first_name: firstName,
        last_name: lastName,
        mobile_no: phonenumber,
        website_name: website,
        time_zone: timezone,
        account_role: role,
        country_name: countryName,
        password: passwordInput,
      };

      if (selectedDirector) {
        requestData.creator_id = selectedDirector.creator_id;
        requestData.creator_role = selectedDirector.creator_role;
        requestData.creator_password = selectedDirector.creator_password;
        requestData.management = selectedDirector.management;
      }
      console.log("url====> errwerwerwe", url, requestData);

      const res = await call(url, requestData);

      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAddDirectorPopup(false);
        handleAddDirectorPopup();
        //setStatus((prev) => !prev);
        setFirstName("");
        setLastName("");
        setWebsite("");
        setTimeZone("");
        setRole("");
        setCountryName("");
        setPasswordInput("");
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  const [addDirectorsPopup, setAddDirectorPopup] = useState(false);
  const handleAddDirectorPopup = () => {
    setAddDirectorPopup(true);
    setShowAddDirectorPopup(false);
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

  // const [allUsers, setgetallUsers] = useState([]);
  // const getallUsers = async () => {
  //   const payload = {
  //     creator_id: "company",
  //   };
  //   await call(GET_ADMIN_USER_INFO, payload)
  //     .then((res) => {
  //       console.log("response=====>", res);
  //       setgetallUsers(res?.data?.data);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getallUsers();
  // }, []);
  // console.log("allUsers", allUsers);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        show={showAddDirectorPopup}
        onHide={handleAddDirectorClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 mt-4">
            <h5 className="text-center mt-2 mb-4">{heading}</h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 px-4">
            <Row>
              <Col>
                <div className="small-font my-1">Role *</div>
                <select
                  value={role || " "}
                  name="account_role"
                  onChange={(e) => setRole(e.target.value)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                >
                  <option value="select">Select</option>
                  <option value="director"> Director </option>
                  <option value="superadmin"> SuperAdmin</option>
                </select>
              </Col>
              <Col>
                <div className="small-font my-1">Select Country *</div>
                <select
                  value={countryName}
                  name="country_name"
                  onChange={(e) => setCountryName(e.target.value)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                >
                  <option value="select">select</option>
                  <option value="All">All</option>
                  {allCountries.map((obj) => (
                    <option value={obj.country_name} selected>
                      {obj.country_name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                {" "}
                <div className="d-flex flex-column">
                  <div className="small-font mb-1">{firstTextBox}</div>
                  <select
                    value={website}
                    name="website_name"
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    <option value="select">select</option>
                    <option value="All">All</option>
                    {websiteNames.map((obj) => (
                      <option value={obj.web_url} selected>
                        {obj.web_url}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col>
                {" "}
                <div className="d-flex flex-column">
                  <div className="small-font mb-1">Payment Gateway *</div>
                  <select
                    value={website}
                    name="website_name"
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    <option value="select">Select</option>
                    <option value="select">AAA</option>
                    <option value="select">BBB</option>
                  </select>
                </div>
              </Col>
            </Row>

            <div className="d-flex flex-column w-100 mt-2">
              <div className="small-font mb-1 mt-1">User ID *</div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Enter UserId"
                  name="user_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                ></input>
              </div>
            </div>
            <Container fluid className="my-2">
              <Row>
                <Col className="ps-0">
                  <div className="small-font my-1">Password *</div>
                  <div className="d-flex justify-content-between flex-row aligin-items-center input-btn-bg w-100 rounded">
                    <input
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                      name="confirm password"
                      placeholder="Enter"
                      className="w-100 custom-select login-inputs small-font input-btn-bg px-2 py-2 all-none rounded all-none"
                    ></input>
                    <button
                      onClick={togglePassword}
                      className="all-none input-btn-bg"
                    >
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">Confirm Password *</div>
                  <div className="d-flex justify-content-between flex-row aligin-items-center input-btn-bg w-100 rounded">
                    <input
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                      name="password"
                      placeholder="Re-enter"
                      className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    ></input>
                    <button
                      onClick={togglePassword}
                      className="all-none input-btn-bg"
                    >
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-2">
              <Row>
                <Col className="ps-0">
                  <div className="small-font my-1">First Name *</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="first_name"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">Last Name *</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="last_name"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-2">
              <Row>
                <Col className="ps-0">
                  <div className="small-font my-1">Phone *</div>
                  <input
                    type="number"
                    placeholder="Enter"
                    name="mobile_no"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">{firstSelect}</div>
                  <select
                    value={timezone}
                    name="time_zone"
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    <option selected>Select</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                  </select>
                </Col>
              </Row>
            </Container>
            <div className="d-flex justify-content-center w-100 my-4">
              <button
                className="add-button rounded px-2 py-3 w-50 medium-font"
                // onClick={() => handleAddDirectorPopup()}
                onClick={() => handleCreateOrUpdateDirector(true)}
              >
                {/* Create */}
                {selectedDirector ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Successfully Completed"}
        state={addDirectorsPopup}
        setState={setAddDirectorPopup}
      />
    </div>
  );
}

export default AddDirectorsPopup;
