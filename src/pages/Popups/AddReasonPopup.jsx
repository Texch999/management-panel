import React, { useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";

function AddReasonPopup(props) {
  const {
    rejectPopupOpen,
    SetRejectpopupOpen,
    Heading,
    firstSelect,
    firstTextarea,
  } = props;
  const [acceptClick, setAcceptClick] = useState(false);

  const handleClosePopup = () => {
    SetRejectpopupOpen(false);
  };
  const handleAcceptClickPopupOpen = () => {
    setAcceptClick(true);
    SetRejectpopupOpen(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={rejectPopupOpen}
        onHide={handleClosePopup}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="px-4 mt-3">
            <h6 className="text-start">{Heading}</h6>
          </div>
        </Modal.Header>                   
        <Modal.Body className="px-5">
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0" xs={8}>
                <div className="small-font my-1">{firstSelect} *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                  <option selected>Select</option>
                  <option>www.texch.com</option>
                  <option>www.we2call.com</option>
                  <option>www.ravana.com</option>
                  <option>www.brahama.com</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">In Active *</div>
                <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                  <option selected>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row xs={12}>
              <div className="small-font my-1">{firstTextarea} *</div>
              <textarea
                type="text"
                placeholder="Type Here....."
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
              ></textarea>
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
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default AddReasonPopup;
