import React, { useState, useEffect, useRef } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Modal, Row } from "react-bootstrap";
import {
  // ADD_COUNTRY_AND_CURRENCY,
  // UPDATE_COUNTRY_CURRENCY,
  ADD_PAYMENT_GATEWAY,
  UPDATE_PAYMENT_GATEWAY,
  GET_ALL_WEBSITES,
  GENERATE_SIGNED_URL,
  // GET_ALL_PAYMENTS,
  // GET_COUNTRY_AND_CURRENCY,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function AddCountryPopups(props) {
  const ImageBaseUrl = "https://we2-call-images.s3.us-east-2.amazonaws.com";
  const {
    addCountryOpen,
    setAddCountryOpen,
    Heading,
    setStatus,
    setData,
    selectedPayment,
    // getData,
    inputData,
    setInputData,
    updateGatway,
  } = props;
  console.log("Props======>", props);

  const [acceptClick, setAcceptClick] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [singedUrl, setSignedUrl] = useState("");
  // const [paymentGateway, setPaymentGateway] = useState("Select");
  const [uploadImage, setuploadImage] = useState([]);
  const [processing, setProcessing] = useState(false);

  // console.log("paymentGateway====>", paymentGateway);

  const handleAddCountryOpenClose = () => {
    setAddCountryOpen(false);
    setData(null);
  };

  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    // setInputData({...inputData,qr_code:})
    setProfileImage(file);
    generateSignedUrl();
  };

  const onInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdatePaymentGateway = async () => {
    setProcessing(true);
    const payload = {
      register_id: "company",
      uploadImage: `${ImageBaseUrl}/${"payment-images"}/${paymentId}.png`,
      ...inputData,
    };

    try {
      if (profileImage) {
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
      } else {
        const url =
          updateGatway === true ? UPDATE_PAYMENT_GATEWAY : ADD_PAYMENT_GATEWAY;

        const res = await call(url, payload);
        setProcessing(true);
        setAddCountryOpen(false);
        setInputData({});

        console.log("res====>", res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const generateSignedUrl = async () => {
    setuploadImage(true);
    const posetNewId = new Date().getTime();
    await call(GENERATE_SIGNED_URL, {
      register_id: `${posetNewId}`,
      event_type: "user_profile_image",
      folder_name: "payment-images",
    })
      .then(async (res) => {
        setuploadImage(false);
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setPaymentId(posetNewId);
      })
      .catch((err) => {
        setuploadImage(false);
        console.log("generating signed url error", err);
      });
  };

  console.log("Input Data=====>", inputData);
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={addCountryOpen}
        onHide={handleAddCountryOpenClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="px-5 mt-3">
            <h6 className="text-start">{Heading}</h6>
          </div>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Row>
            <Col>
              <div className="small-font my-1">Country Name *</div>
              <input
                type="text"
                placeholder="Enter"
                name="country_name"
                className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                value={inputData.country_name || ""}
                onChange={(e) => onInputChange(e)}
              ></input>
            </Col>
            <Col>
              <div className="small-font my-1">Currency Name *</div>
              <input
                type="text"
                placeholder="Enter"
                name="currency_name"
                className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                value={inputData.currency_name || ""}
                onChange={(e) => onInputChange(e)}
              ></input>
            </Col>
            <Col>
              <div className="small-font my-1">Payment Gateway *</div>
              <select
                name="pg_upi"
                // value={paymentGateway}
                onChange={(e) => onInputChange(e)}
                className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
              >
                <option>
                  {inputData.pg_upi ? inputData.pg_upi : "Select"}
                </option>
                <option value="phonepe">Phonepay</option>
                <option value="gpay">Gpay</option>
                <option value="paytm">Paytm</option>
                <option value="neft">RTGS</option>
                <option value="qr_code">QR Code</option>
                {/* {allPayments.map((obj) => (
                  <option value={obj.pg_upi} selected>
                    {obj.pg_upi}
                  </option>
                ))} */}
              </select>
            </Col>
          </Row>
          {(inputData.pg_upi === "phonepe" ||
            inputData.pg_upi === "gpay" ||
            inputData.pg_upi === "paytm") && (
            <Row className="mt-2">
              <Col className="col-4">
                <div className="small-font my-1">Mobile Number*</div>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  name="mobile_number"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={inputData.mobile_number || ""}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </Col>
              <Col className="col-4">
                <div className="small-font my-1">Upi ID*</div>
                <input
                  type="text"
                  placeholder="Enter UPI Name"
                  name="pg_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={inputData.pg_name || ""}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </Col>
              {/* <Col className="col-4">
              <div className="small-font my-1">In Active *</div>
              <select
                name="active"
                value={active}
                onChange={(e) => setActive(e.target.value)}
                className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
              >
                <option value="Select">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </Col> */}
            </Row>
          )}
          {inputData.pg_upi === "neft" && (
            <Row className="mt-2">
              <Col className="col-4">
                <div className="small-font my-1">Account Holder Name</div>
                <input
                  type="text"
                  placeholder="Enter Accoun Holder Number"
                  name="account_holder_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={inputData.account_holder_name || ""}
                  onChange={onInputChange}
                ></input>
              </Col>
              <Col className="col-4">
                <div className="small-font my-1">Bank Name</div>
                <input
                  type="text"
                  placeholder="Enter Upi Id"
                  name="bank_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={inputData.bank_name || ""}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </Col>
              <Col className="col-4">
                <div className="small-font my-1">Account Number*</div>
                <input
                  type="text"
                  placeholder="Enter Account Number"
                  name="account_number"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={inputData.account_number || ""}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </Col>
              <Col className="col-4">
                <div className="small-font my-1">IFSC Code*</div>
                <input
                  type="text"
                  placeholder="Enter IFSC Code"
                  name="ifsc_code"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={inputData.ifsc_code || ""}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </Col>
            </Row>
          )}
          {inputData.pg_upi === "qr_code" && (
            <Row>
              <Col className="col-4">
                <div className="small-font my-1">Qr Code*</div>
                <input
                  type="file"
                  placeholder="Upload Qr Code"
                  name="uploadCode"
                  ref={uploadfileInputRef}
                  onChange={handleUploadFileSelect}
                  // name="upi_id"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  // value={currencyName}
                  // onChange={(e) => setCurrencyName(e.target.value)}
                ></input>
              </Col>
            </Row>
          )}

          {/* <Container fluid className="my-2">
            <Row>
              <Col className="ps-0" xs={8}>
                <div className="small-font my-1">Show Website *</div>
                <select
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
                  <option value="All">All</option>
                  {websiteNames.map((obj) => (
                    <option value={obj.web_url} selected>
                      {obj.web_url}
                    </option>
                  ))}
                </select>
              </Col>
            </Row> 
          </Container>*/}
          <Row>
            <Col className="col-8">
              <button
                type="submit"
                className="add-button  small-font rounded px-4 py-3 my-3 w-50 all-none"
                onClick={handleCreateOrUpdatePaymentGateway}
              >
                {processing === true
                  ? "Processing...."
                  : updateGatway === true
                  ? "Update"
                  : "Create"}
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
        setStatus={setStatus}
      />
    </div>
  );
}

export default AddCountryPopups;
