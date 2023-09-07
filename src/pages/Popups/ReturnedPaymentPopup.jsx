import React, { useRef, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import { MdUpload } from "react-icons/md";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
function ReturnedPaymentPopup(props) {
  const { showReturnPopup, setShowReturnPopup } = props;
  const handleReturnClose = () => {
    setShowReturnPopup(false);
  };
  const [paymentPopup, setPaymentPopup] = useState(false);
  const handleThankYouPopup = () => {
    setPaymentPopup(true);
    setShowReturnPopup(false);
  };
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const handlePaymentSection = () => {
    setShowPaymentSection(true);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showReturnPopup}
        onHide={handleReturnClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 p-4 flex-columnn relative-position">
            <div className="d-flex justify-content-start">
              <div className="w-25 small-font d-flex align-items-center ">
                Srinivas
                <button className="yellow-btn rounded clr-orange mx-2 px-2 py-1">
                  Director
                </button>
                <div className="rounded-pill small-font px-3 py-1 input-btn-bg">
                  we2call.com
                </div>
              </div>
            </div>
            <Container fluid className="my-1 w-100">
              <Row>
                <Col className="ps-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="text-start p-1">Casino Tour, Goa</div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
                <Col className="pe-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="p-1 text-start">31/08/2023</div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-1 w-100">
              <Row>
                <Col className="ps-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="p-1 text-start">31/08/2023</div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
                <Col className="pe-0">
                  <Dropdown
                    size="lg"
                    className="user-dropdown-toggle custom-button-drop small-font mt-2"
                  >
                    <Dropdown.Toggle className="w-100">
                      <div className="text-start p-1 font-grey">Enter Exp</div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
            <div className="w-100 custom-select small-font input-btn-bg px-3 py-2 my-3 all-none rounded all-none d-flex flex-row justify-content-between align-items-center">
              <div className="font-grey">Balance To Pay</div>
              <div>10000</div>
            </div>
            <button
              type="submit"
              className="add-button  small-font rounded px-4 py-2  w-100 all-none"
              onClick={() => handlePaymentSection()}
            >
              Confirm & Pay
            </button>
            {showPaymentSection && (
              <>
                {" "}
                <div>
                  <div className="grey-font small-font my-2">
                    Payment Mode *
                  </div>
                  <select className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none">
                    {/* <option selected>Select</option> */}
                    <option selected>NEFT/RTGS</option>
                    <option>UPI</option>
                    <option>Phone Pe</option>
                    <option>Google Pay</option>
                    <option>Paytm</option>
                  </select>
                </div>
                <div className="d-flex flex-column px-2 input-btn-bg rounded small-font font-grey my-2">
                  <div>
                    Name : <span> Jayanta Pal</span>
                  </div>
                  <div>
                    A/C No: <span> 34311236216 </span>
                  </div>
                  <div>
                    Bank: <span> SBI</span>
                  </div>
                  <div>
                    IFSC Code: <span> SBIN0000111 </span>
                  </div>
                </div>
                <div>
                  <div className="grey-font small-font my-2">
                    Upload Screenshot *
                  </div>
                  <div
                    className="w-100 custom-select small-font input-btn-bg px-2 py-2 my-2 all-none rounded all-none d-flex flex-row justify-content-between align-items-center"
                    onClick={handleUploadButtonClick}
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
                    <MdUpload className="upload-icon"/>
                  </div>
                </div>
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-2  w-100 all-none "
                  onClick={() => handleThankYouPopup()}
                >
                  Pay
                </button>
              </>
            )}
          </div>
        </Modal.Header>
      </Modal>
      <MatchSubmitPopup
        header={"Payment Successfully Completed"}
        state={paymentPopup}
        setState={setPaymentPopup}
      />
    </div>
  );
}

export default ReturnedPaymentPopup;
