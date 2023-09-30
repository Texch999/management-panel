import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import MatchDeclarationPopup from "../../matchpopups/MatchDeclarationPopup";
function PaymentSettelmentPopup(props) {
  const { showPaymentModal, setShowPaymentModal, role, buttonOne, buttonTwo } =
    props;
  const handlePaymentClose = () => {
    setShowPaymentModal(false);
  };
  const [paymentSubmitPopup, setPaymentSubmitPopup] = useState(false);
  const [paymentPopup, setPaymentPopup] = useState(false);
  const handlePaymentSubmitPopupOpen = () => {
    setPaymentSubmitPopup(true);
    setShowPaymentModal(false);
  };
  const handlePaymentPopupOpen = () => {
    setPaymentPopup(true);
    setPaymentSubmitPopup(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPaymentModal}
        onHide={handlePaymentClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 flex-columnn relative-position">
            <div className="text-center large-font mt-3 mb-2">
              Payment Settelment
            </div>
            <div className="p-2 rounded-top w-100 d-flex align-items-center justify-content-center">
              <div className="w-75 d-flex justify-content-center">
                <div className="ms-1 me-1">
                  <div className="w-100 small-font clr-yellow input-btn-bg py-1 px-2 rounded-pill">
                    Date:27/07/2023
                  </div>
                </div>
                <div className="ms-1 me-1">
                  <div className="w-100 small-font clr-yellow input-btn-bg py-1 px-2 rounded-pill">
                    Time:17:46:00 PM
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 p-4">
              <div className="d-flex flex-column">
                <div className="small-font my-2">Client Name *</div>
                <div className="d-flex flex-row w-100 custom-select small-font input-btn-bg rounded all-none align-items-center">
                  <select className="w-100 custom-select small-font input-btn-bg rounded all-none py-2 px-2">
                    <option selected>Select</option>
                    <option>Sangram</option>
                    <option>Ranjith</option>
                    <option>Srikanth</option>
                    <option>Upendra</option>
                    <option>Bhargavi</option>
                    <option>Jyothi Babu</option>
                  </select>
                </div>
              </div>

              <Container fluid className="my-2">
                <Row>
                  <Col className="ps-0">
                    <div className="small-font my-2">Balance</div>
                    <input
                      type="number"
                      placeholder="Balance"
                      className="w-100 custom-select small-font input-btn-bg rounded all-none py-2 px-2"
                    ></input>
                  </Col>
                  <Col className="pe-0">
                    <div className="small-font my-2">Net Balance</div>
                    <input
                      type="number"
                      placeholder="Net Balance"
                      className="w-100 custom-select small-font input-btn-bg rounded all-none py-2 px-2"
                    ></input>
                  </Col>
                </Row>
              </Container>
              <div className="d-flex flex-column mt-2 mb-2">
                <div className="small-font my-2">Payment Mode *</div>
                <div className="d-flex flex-row w-100 custom-select small-font input-btn-bg rounded align-items-center all-none">
                  <select className="w-100 custom-select small-font input-btn-bg rounded all-none  py-2 px-2">
                    <option selected>Payment Mode</option>
                    <option>Google Pay</option>
                    <option>Phone Pe</option>
                    <option>Paytm</option>
                    <option>UPI</option>
                    <option>Credit/Debit Card</option>
                    <option>NEFT/RTGS</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column w-100 mt-2">
                <div className="small-font my-2">Amount *</div>
                <div className="d-flex flex-row w-100 custom-select small-font input-btn-bg rounded align-items-center all-none  py-2 px-2">
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      className="w-100 custom-select small-font input-btn-bg rounded all-none "
                    ></input>
                </div>
              </div>
              <div className="d-flex justify-content-center w-100">
                <button
                  type="submit"
                  className="add-button mt-4 small-font rounded w-50 all-none py-2 "
                  onClick={() => handlePaymentSubmitPopupOpen()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Header>
      </Modal>
      <MatchDeclarationPopup
        header={"Settled Payment sai-offline-user 4000 are you sure?"}
        state={paymentSubmitPopup}
        setState={setPaymentSubmitPopup}
        handleSubmitPopupOpen={handlePaymentPopupOpen}
      />
      <MatchSubmitPopup
        header={"Payment Successfully Completed"}
        state={paymentPopup}
        setState={setPaymentPopup}
      />
    </div>
  );
}

export default PaymentSettelmentPopup;
