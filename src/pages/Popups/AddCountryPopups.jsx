import React, { useState, useEffect } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Modal, Row } from "react-bootstrap";
import {
  ADD_COUNTRY_AND_CURRENCY,
  UPDATE_COUNTRY_CURRENCY,
  ADD_PAYMENT_GATEWAY,
  UPDATE_PAYMENT_GATEWAY,
  GET_ALL_WEBSITES,
  GET_ALL_PAYMENTS,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function AddCountryPopups(props) {
  const {
    componentType,
    addCountryOpen,
    setAddCountryOpen,
    Heading,
    setStatus,
    selectedCountry,
    setData,
    selectedPayment,
    getData,
  } = props;

  const [acceptClick, setAcceptClick] = useState(false);

  const [countryName, setCountryName] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [paymentGateway, setPaymentGateway] = useState("Select");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [website, setWebsite] = useState("Select");
  const [active, setActive] = useState("Select");

  const handleAddCountryOpenClose = () => {
    setAddCountryOpen(false);
    setData(null);

    setCountryName("");
    setCurrencyName("");
    setPaymentGateway("Select");
    setPaymentDetails("");
    setWebsite("Select");
    setActive("Select");
  };

  useEffect(() => {
    if (selectedCountry) {
      setCountryName(selectedCountry.country_name || "");
      setCurrencyName(selectedCountry.currency_name || "");
      setPaymentGateway(selectedCountry.payment_gateway || "Select");
      setPaymentDetails(selectedCountry.payment_details || "");
      setWebsite(selectedCountry.website || "Select");
      setActive(selectedCountry.active || "Select");
    }

    if (selectedPayment) {
      setCountryName(selectedPayment.country_name || "");
      setCurrencyName(selectedPayment.currency_name || "");
      setPaymentGateway(selectedPayment.payment_gateway || "Select");
      setPaymentDetails(selectedPayment.payment_details || "");
      setWebsite(selectedPayment.website || "Select");
      setActive(selectedPayment.active || "Select");
    }
  }, [selectedCountry, selectedPayment]);
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
  const [allPayments, setAllPayments] = useState([]);
  const getPaymentWay = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_PAYMENTS, payload)
      .then((res) => {
        console.log("API Response:", res);
        setAllPayments(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPaymentWay();
  }, []);

  const handleCreateOrUpdateCountryCurrency = async () => {
    try {
      if (componentType === "CURRENCY") {
        const countryCurrencyUrl = selectedCountry
          ? UPDATE_COUNTRY_CURRENCY
          : ADD_COUNTRY_AND_CURRENCY;

        const requestData = {
          register_id: "reg-20230909114353315",
          country_name: countryName,
          currency_name: currencyName,
          payment_gateway: paymentGateway,
          payment_details: paymentDetails,
          website: website,
          active: active,
        };

        if (selectedCountry) {
          requestData.payment_id = selectedCountry.payment_id;
          requestData.p_id = selectedCountry.p_id;
        }

        const res = await call(countryCurrencyUrl, requestData);
        console.log("res____", res);
        getData();
        setAcceptClick(true);
        setAddCountryOpen(false);
        handleAddCountryOpenClose();
        setStatus((prev) => !prev);
        setCountryName("");
        setCurrencyName("");
        setPaymentGateway("Select");
        setPaymentDetails("");
        setWebsite("Select");
        setActive("Select");
        // }
      }

      // Logic to call ADD_PAYMENT_GATEWAY or UPDATE_PAYMENT_GATEWAY based on selectedPayment
      if (componentType === "PAYMENT") {
        const paymentUrl = selectedPayment
          ? UPDATE_PAYMENT_GATEWAY
          : ADD_PAYMENT_GATEWAY;

        const paymentData = {
          register_id: "reg-20230710182031623",
          payment_details: paymentDetails,
          country_name: countryName,
          currency_name: currencyName,
          payment_gateway: paymentGateway,
          website: website,
          active: active,
        };

        if (selectedPayment) {
          paymentData.pg_id = selectedPayment.pg_id;
          paymentData.p_id = selectedPayment.p_id;
        }

        const paymentRes = await call(paymentUrl, paymentData);

        getData();
        setAcceptClick(true);
        handleAddCountryOpenClose();
        setAddCountryOpen(false);
        setStatus((prev) => !prev);
        setCountryName("");
        setCurrencyName("");
        setPaymentGateway("Select");
        setPaymentDetails("");
        setWebsite("Select");
        setActive("Select");
        // }
      }

      // Check if neither selectedCountry nor selectedPayment is defined
      if (!selectedCountry && !selectedPayment) {
        setData(null);
        setData(null);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

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
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0">
                <div className="small-font my-1">Country Name *</div>
                <input
                  id="country_name"
                  type="text"
                  placeholder="Enter"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Currency Name *</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="currency_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={currencyName}
                  onChange={(e) => setCurrencyName(e.target.value)}
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Payment Gateway *</div>
                <select
                  name="payment_gateway"
                  value={paymentGateway}
                  onChange={(e) => setPaymentGateway(e.target.value)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
                  <option value="All">All</option>
                  {allPayments.map((obj) => (
                    <option value={obj.pg_upi} selected>
                      {obj.pg_upi}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <div className="small-font my-1">Payment Details *</div>
              <textarea
                name="payment_details"
                type="text"
                id="payment_details"
                placeholder="Type Here....."
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
              ></textarea>
            </Row>
          </Container>
          <Container fluid className="my-2">
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
              <Col className="pe-0">
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
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={8}>
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-3 mx-2 my-3 w-50 all-none"
                  onClick={handleCreateOrUpdateCountryCurrency}
                >
                  {selectedCountry
                    ? "Update"
                    : selectedPayment
                    ? "Update"
                    : "Create"}
                </button>
              </Col>
            </Row>
          </Container>
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
