import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function AddDirectorsPopup(props) {
  const {
    showAddDirectorPopup,
    setShowAddDirectorPopup,
    heading,
    firstTextBox,
    firstSelect,
  } = props;
  const handleAddDirectorClose = () => {
    setShowAddDirectorPopup(false);
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
  const [addDirectorsPopup, setAddDirectorPopup] = useState(false);
  const handleAddDirectorPopup = () => {
    setAddDirectorPopup(true);
    setShowAddDirectorPopup(false);
  };
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
            <div className="d-flex flex-column">
              <div className="small-font mb-1">{firstTextBox}</div>
              <select className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none">
                <option selected>Select</option>
                <option>www.texch.com</option>
                <option>www.we2call.com</option>
                <option>www.ravana.com</option>
                <option>www.brahama.com</option>
              </select>
            </div>
            <div className="d-flex flex-column w-100 mt-2">
              <div className="small-font mb-1 mt-1">User ID *</div>
              <div className="w-100">
                <input
                  type="number"
                  placeholder="Enter Amount"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
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
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">Last Name *</div>
                  <input
                    type="number"
                    placeholder="Enter"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
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
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">{firstSelect}</div>
                  <select className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none">
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
                onClick={() => handleAddDirectorPopup()}
              >
                Create
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
