import React, { useEffect, useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container,  Modal, Row } from "react-bootstrap";
import { call } from "../../config/axios";
import { ADD_COUNTRY } from "../../config/endpoints";

function AddCountryPopups(props) {
  const { addCountryOpen, setAddCountryOpen } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  
  // const [countryName, setcountryName] = useState("");
  // const [currencyName, setcurrencyName] = useState("");
  // const [paymentDetails, setPaymentDetails] = useState("");
  // const [paymentGetway, setpaymentGetway] = useState("");
  // const [showWebsite, setshowWebsite] = useState("");
  // const [Inactive, setIsActive] = useState("");

  const [addCountry, setAddCountry] = useState({
    register_id: "reg-20230909114353315",
    country_name: "",
    currency_name: "",
    payment_gateway: "Select",
    payment_details: "",
    website: "Select",
    active: "Select",
  });

  const handleAcceptClickPopupOpen = () => {
    setAcceptClick(true);
    setAddCountryOpen(false);
  };
  const handleAddCountryOpenClose = () => {
    setAddCountryOpen(false);
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAddCountry({
      ...addCountry,
      [name]: value,
    });
  };
  const handelcreatecountry = async () => {
    // console.log(countryName);
    // console.log(currencyName);
    // console.log(paymentDetails);
    // console.log(paymentGetway);
    // console.log(showWebsite);
    // console.log(Inactive);'
    setAddCountryOpen(true);
    await call(ADD_COUNTRY, addCountry)
      .then((res) => {
        console.log("------->", res);
        setAddCountry(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setAddCountryOpen(false);
  };
  useEffect(() => {
    setAddCountry();
  }, []);

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
            <h6 className="text-start">
              Add Country,Currency and Payment Gateways
            </h6>
          </div>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0">
                <div className="small-font my-1">Country Name *</div>
                <input
                  name="country_name"
                  id="country_name"
                  type="text"
                  placeholder="Enter country name"
                  value={addCountry.country_name}
                  // value={addCountry[addCountry.country_name]}
                  // value={addCountry["country_name"] || ""}
                  onChange={handleChangeInput}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Currency Name *</div>
                <input
                  type="number"
                  placeholder="Enter"
                  name="currency_name"
                  id="currency_name"
                  value={addCountry.currency_name}
                  onChange={handleChangeInput}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Payment Gateway *</div>
                <select
                  name="payment_gateway"
                  id="payment_gateway"
                  // value={addCountry.payment_gateway}
                  value={addCountry["payment_gateway"] || ""}
                  onChange={handleChangeInput}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="">Select</option>
                  <option value="phone pe">Phone Pe</option>
                  <option value="neft">NEFT/RTGS</option>
                  <option value="upi">UPI</option>
                  <option value="paytm">Paytm</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <div className="small-font my-1">Payment Details *</div>
              <textarea
                type="text"
                name="payment_details"
                id="payment_details"
                value={addCountry.payment_details}
                placeholder="Type Here....."
                onChange={handleChangeInput}
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
              ></textarea>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0" xs={8}>
                <div className="small-font my-1">Show Website *</div>
                <select
                  name="showWebsite"
                  id="showWebsite"
                  value={addCountry.website}
                  onChange={handleChangeInput}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="">Select</option>
                  <option value="www.texch.com">www.texch.com</option>
                  <option value="www.we2call.com">www.we2call.com</option>
                  <option value="www.ravana.com">www.ravana.com</option>
                  <option value="www.brahama.com">www.brahama.com</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">In Active *</div>
                <select
                  name="status"
                  id="status"
                  value={addCountry.status}
                  onChange={handleChangeInput}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
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
                  onClick={() => handelcreatecountry()}
                >
                  Create
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
      />
    </div>
  );
}

export default AddCountryPopups;
