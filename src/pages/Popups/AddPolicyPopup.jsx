import React, { useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
function AddPolicyPopup(props) {
  const { addPolicyOpen, setAddPolicyOpen } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  const [addPolicyData, setAddPolicyData] = useState({});
  const handleAcceptClickPopupOpen = () => {
    setAcceptClick(true);
    setAddPolicyOpen(false);
  };
  const handleAddPolicyClose = () => {
    setAddPolicyOpen(false);
  };

  const handleChange = (e) => {
    setAddPolicyData({ ...addPolicyData, [e.target.name]: e.target.value });
  };
  console.log(addPolicyData, "........dadad");
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={addPolicyOpen}
        onHide={handleAddPolicyClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="px-5 mt-3">
            <h6 className="text-start">Add Policy</h6>
          </div>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0">
                <div className="small-font my-1">Country Name *</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="country_name"
                  id="country_name"
                  value={addPolicyData[addPolicyData?.country_name || ""]}
                  onChange={(e) => handleChange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Show Website *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                  <option selected>Select</option>
                  <option>Phone Pe</option>
                  <option>NEFT/RTGS</option>
                  <option>UPI</option>
                  <option>Paytm</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">In Active *</div>
                <select
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                  onChange={(e) => handleChange(e)}
                  name="payment_type"
                >
                  {/* <option selected value="">
                    Select
                  </option> */}
                  <option value="phonepay">Phone Pe</option>
                  <option value="rtgs">NEFT/RTGS</option>
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
                placeholder="Type Here....."
                name="payment_details"
                id="payment_details"
                value={addPolicyData[addPolicyData?.payment_details || ""]}
                onChange={(e) => handleChange(e)}
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h15vh"
              ></textarea>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={8}>
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-3 my-3 w-50 all-none"
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
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default AddPolicyPopup;
