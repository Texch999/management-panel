import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import {
  ACCOUNT_REGISTERATION,
  UPDATE_PROFILE,
  GET_ALL_WEBSITES,
  GET_COUNTRY_AND_CURRENCY,
  GET_ALL_PAYMENTS,
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
    setActive,
  } = props;

  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [countryName, setCountryName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [paymentGateway, setPaymentGateway] = useState("");
  const [packageDiscount, setPackageDiscount] = useState("");
  const [share, setShare] = useState("");
  const [ulshare, setUlshare] = useState("");
  const [showEye, setShowEye] = useState(false);

  const handleAddDirectorClose = () => {
    setShowAddDirectorPopup(false);
    setFirstName("");
    setLastName("");
    setWebsite("");
    setCountryName("");
    setTimeZone("");
    setRole("");
    setPaymentGateway("");
    setPackageDiscount("");
    setUlshare("");
    setShare("");
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
      setPaymentGateway(selectedDirector.pg_upi || "");
      setTimeZone(selectedDirector.timezone || "");
      setRole(selectedDirector.account_role || "");
      setCountryName(selectedDirector.country_name || "");
      setPasswordInput(selectedDirector.password || "");
      setPackageDiscount(selectedDirector.package_discount || "");
      setUlshare(selectedDirector.ul_share || "");
      setShare(selectedDirector.share || "");
    }
  }, [selectedDirector]);
  const handleCreateOrUpdateDirector = async (status) => {
    try {
      const url = selectedDirector ? UPDATE_PROFILE : ACCOUNT_REGISTERATION;
      const requestData = {
        creator_id: "company",
        creator_role: "company",
        creator_password: "company",
        register_id: "company",
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
        pg_upi: paymentGateway,
        share: 100 - +ulshare,
        ul_share: ulshare,
        package_discount: packageDiscount,
      };

      if (selectedDirector) {
        requestData.register_id = selectedDirector.register_id;
        requestData.account_role = selectedDirector.account_role;
        // requestData.creator_role = selectedDirector.creator_role;
        // requestData.creator_password = selectedDirector.creator_password;
        // requestData.management = selectedDirector.management;
      }
      await call(url, requestData).then((res) => {
        console.log("-------->", res.data);
        if (res.data.status === 201) {
          setAddDirectorPopup(true);
          setTimeout(() => {
            setAddDirectorPopup(false);
            setShowAddDirectorPopup(false);
          }, 2000);
        }

        if (res.data.error) {
          console.error("API Error:", res.data.message);
        } else {
          setAddDirectorPopup(false);
          handleAddDirectorPopup();
          setActive((prev) => !prev);
          setFirstName("");
          setLastName("");
          setWebsite("");
          setTimeZone("");
          setRole("");
          setCountryName("");
          setPasswordInput("");
          setPaymentGateway("");
        }
      });
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  const [addDirectorsPopup, setAddDirectorPopup] = useState(false);
  const handleAddDirectorPopup = () => {
    // setAddDirectorPopup(true);
    setShowAddDirectorPopup(false);
  };

  const [websiteNames, setwebsiteNames] = useState([]);
  const getwebsiteNames = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        setwebsiteNames(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getwebsiteNames();
  }, []);

  // const [allCountries, setallCountries] = useState([]);
  // const getallCountries = async () => {
  //   const payload = {
  //     register_id: "company",
  //   };
  //   await call(GET_COUNTRY_AND_CURRENCY, payload)
  //     .then((res) => {
  //       setallCountries(res?.data?.data);
  //     })
  //     .catch((err) => {
  //       setShowAddDirectorPopup(true);
  //     });
  // };
  // useEffect(() => {
  //   getallCountries();
  // }, []);

  const [allPayments, setAllPayments] = useState([]);
  const getPaymentWay = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_PAYMENTS, payload)
      .then((res) => {
        setAllPayments(res?.data?.data);
      })
      .catch((err) => {
        setShowAddDirectorPopup(true);
      });
  };

  useEffect(() => {
    getPaymentWay();
  }, []);

  console.log("allPayments===>", allPayments);

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
                  {allPayments?.map((obj) => (
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
                    {role === "director" ? (
                      <>
                        <option value="">select</option>
                        {/* <option value="All">
                          ALL
                          <input type="checkbox" />
                          RRR
                        </option> */}
                        {/* {websiteNames.map((obj) => (
                          <option value={obj.web_url}>
                            <input type="checkbox" /> {obj.web_url}
                          </option>
                        ))} */}
                      </>
                    ) : (
                      <>
                        <option value="">select</option>
                        {websiteNames?.map((obj) => (
                          <option value={obj.web_url}>{obj.web_url}</option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
              </Col>
              <Col>
                {" "}
                <div className="d-flex flex-column">
                  <div className="small-font mb-1">Payment Gateway *</div>
                  <select
                    value={paymentGateway}
                    name="pg_upi"
                    onChange={(e) => setPaymentGateway(e.target.value)}
                    className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    {/* <option value=""selected>select</option>
                    <option value="All">All</option>  */}
                    {role === "director" ? (
                      <>
                        <option value="">Select</option>
                        <option value="all">All</option>
                      </>
                    ) : (
                      <>
                        <option value="">Select</option>
                        {allPayments?.map((obj) => (
                          <option value={obj.pg_upi}>{obj.pg_upi}</option>
                        ))}
                      </>
                    )}
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
                  <div className="small-font my-1">Package Discount*</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="package_discount"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={packageDiscount}
                    onChange={(e) => setPackageDiscount(e.target.value)}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col className="pe-0 ps-0">
                  <div className="small-font my-1">UL Share</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="ul_share"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={ulshare}
                    onChange={(e) => setUlshare(e.target.value)}
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">share</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="share"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={100 - +ulshare || 100}
                    onChange={(e) => setShare(e.target.value)}
                  ></input>
                </Col>
              </Row>
            </Container>
            <div className="d-flex justify-content-center w-100 my-4">
              <button
                className="add-button rounded px-2 py-3 w-50 medium-font"
                onClick={() => handleCreateOrUpdateDirector(true)}
              >
                {selectedDirector ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={
          selectedDirector
            ? "Director created Successfully"
            : "Director updated Successfully"
        }
        state={addDirectorsPopup}
        setState={setAddDirectorPopup}
      />
    </div>
  );
}

export default AddDirectorsPopup;
