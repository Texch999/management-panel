import React, { useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import { call } from "../../config/axios";
import { ADD_TOUR_PAYMENT_GATEWAY } from "../../config/endpoints"

function AddCountryPopups(props) {
  const { addCountryOpen, setAddCountryOpen } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  const [inputData, setInputData] = useState({})

  const handleAcceptClickPopupOpen = () => {
    addingPaymentgateway();
  };

  const addingPaymentgateway = async()=>{
    const payload = {
        countryName: inputData.countryName,
        currencyName: inputData.currencyName,
        paymentGateway: inputData.paymentGateway,
        tourName: inputData.tour,
        website: inputData.website,
        status: inputData.status,
        creator: "company"
    }
    await call(ADD_TOUR_PAYMENT_GATEWAY, payload)
            .then((res)=>{
                if(res?.data?.statuscode==200){
                    setAcceptClick(true);
                    setAddCountryOpen(false);
                }
            })
            .catch((error)=>console.log(error))
  }

  const handleAddCountryOpenClose = () => {
    setAddCountryOpen(false);
  };

  const handleOnchange = (e) => {
    setInputData({...inputData, [e.target.name]:e.target.value})
  }
  console.log(inputData,'.......inputdata')
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
              <Col className="ps-0 pe-0">
                <div className="small-font my-1">Country Name *</div>
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  onChange={(e)=>handleOnchange(e)}
                  name="countryName"
                  value={inputData.countryName||""}
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Currency Name *</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="currencyName"
                  value={inputData.currencyName||""}
                  onChange={(e)=>handleOnchange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Payment Gateway *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                        name="paymentGateway"
                        onChange={(e)=>handleOnchange(e)}
                >
                  <option selected>Select</option>
                  <option value={'phonepay'}>PhonePay</option>
                  <option value={'neft'}>NEFT/RTGS</option>
                  <option value={'bhimupi'}>BHIMUPI</option>
                  <option value={'googlepay'}>GooglePay</option>
                  <option value={'paytm'}>Paytm</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-1">
            <Row>
            <Col className="ps-0 pe-0">
                <div className="small-font my-1">Select Tour *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                        name="tour"
                        onChange={(e)=>handleOnchange(e)}
                >
                  <option selected>Select</option>
                  <option value={'Take Part in Our Tour'}>Take Part in Our Tour</option>
                  <option value={'Cricket Tour'}>Cricket Tour</option>
                  <option value={'Sports Tour'}>Sports Tour</option>
                  <option value={'Casino Tour'}>Casino Tour</option>
                  <option value={'Entertainment Tour'}>Entertainment Tour</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Select Website *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                        name="website"
                        onChange={(e)=>handleOnchange(e)}
                >
                  <option selected>Select</option>
                  <option value={'www.we2call.com'}>www.we2call.com</option>
                  <option value={'www.texchange.com'}>www.texchange.com</option>
                  <option value={'www.sparkbook.com'}>www.sparkbook.com</option>
                  <option value={'www.sevenboundries.com'}>www.sevenboundries.com</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Status *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                        name="status"
                        onChange={(e)=>handleOnchange(e)}
                >
                  <option selected>Select</option>
                  <option value={'active'}>Active</option>
                  <option value={'inactive'}>InActive</option>
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
                  onClick={() => handleAcceptClickPopupOpen()}
                >
                  Create
                </button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Payment Gateway Added Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default AddCountryPopups;