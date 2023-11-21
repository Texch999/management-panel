import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { ADD_REASON_REJECTIONS, UPDATE_SETTINGS } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function AddReasonPopup(props) {
  const {
    rejectPopupOpen,
    SetRejectpopupOpen,
    Heading,
    firstSelect,
    firstTextarea,
    setStatus,
    selectedQuestion,
    setSelectedQuestion,
  } = props;

  console.log("securityQuestion=====>", selectedQuestion);

  const [acceptClick, setAcceptClick] = useState(false);
  const [formData, setFormData] = useState({
    p_id: "REJECT-REASON",
    register_id: "company",
    question: "",
    reason: "",
    active: "Select",
    description: "",
  });

  useEffect(() => {
    if (selectedQuestion) {
      setFormData({
        p_id: "REJECT-REASON",
        register_id: "company",
        question: selectedQuestion.question || "",
        reason: selectedQuestion.reason || "",
        active: selectedQuestion.is_active || "Select",
        description: selectedQuestion.description || "",
      });
    } else {
      // Clear the form when creating a new question
      setFormData({
        p_id: "REJECT-REASON",
        register_id: "company",
        question: "",
        reason: "",
        active: "Select",
        description: "",
      });
    }
  }, [selectedQuestion]);

  const handleClosePopup = () => {
    SetRejectpopupOpen(false);
    setSelectedQuestion("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateOrUpdateReasons = async () => {
    try {
      const url = selectedQuestion ? UPDATE_SETTINGS : ADD_REASON_REJECTIONS;
      const requestData = {
        p_id: "REJECT-REASON",
        register_id: "company",
        question: formData.question,
        reason: formData.reason,
        active: formData.active,
        description: formData.description,
      };

      if (selectedQuestion) {
        // If selectedQuestion is not null, it means we are updating an existing question
        requestData.s_id = selectedQuestion.s_id;
        requestData.p_id = selectedQuestion.p_id;
      }

      const res = await call(url, requestData);

      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAcceptClick(true);
        handleClosePopup();
        SetRejectpopupOpen(false);
        setStatus((prev) => !prev);
        setFormData({
          question: "",
          reason: "",
          active: "Select",
          description: "",
        });
      }
    } catch (err) {
      console.error("API Error:", err);
    }
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
              {firstSelect === "Reason" ? (
                <Col className="ps-0" xs={8}>
                  <div className="small-font my-1">{firstSelect} *</div>
                  <input
                    type="text"
                    name="reason"
                    placeholder="Enter Reason here"
                    className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
              ) : (
                <Col className="ps-0" xs={8}>
                  <div className="small-font my-1">{firstSelect} *</div>
                  <input
                    type="text"
                    name="question"
                    placeholder="Enter Question here"
                    className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                    value={formData.question}
                    onChange={handleInputChange}
                    required
                  />
                </Col>
              )}

              <Col className="pe-0">
                <div className="small-font my-1">In-Active *</div>
                <select className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded">
                  Select
                  <option value="Select">Select</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </Col>
            </Row>
          </Container>
          {Heading === "Add Reason" || "Update Reason" ? (
            <Container fluid className="my-2">
              <Row xs={12}>
                <div className="small-font my-1">{firstTextarea}</div>
                <textarea
                  name="description"
                  type="text"
                  placeholder="Enter description here"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
                ></textarea>
              </Row>
            </Container>
          ) : null}

          <Container>
            <Row>
              <Col xs={8}>
                <button
                  type="submit"
                  variant="primary"
                  className="add-button small-font rounded px-4 py-3 mx-2 my-3 w-50 all-none"
                  onClick={handleCreateOrUpdateReasons}
                >
                  {selectedQuestion ? "Update" : "Create"}
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

export default AddReasonPopup;
