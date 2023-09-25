import React, { useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import { ADD_POLICY} from "../../config/endpoints"; 
import { call } from "../../config/axios";
function AddPolicyPopup(props) {
  const { addPolicyOpen, setAddPolicyOpen,setStatus } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [website, setWebsite] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [active, setActive] = useState("Select");
 
  const handleAddPolicyClose = () => {
    setAddPolicyOpen(false);
  };
  const handleCreatePolicy = async () => {
    try {
      const data = {
        register_id: "reg-20230710182031623",
        country_name: countryName,
        payment_description: paymentDetails,
        website_name: website,
        active: active
      };
      
      const res = await call(ADD_POLICY,data);
      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAcceptClick(true);
        setAddPolicyOpen(false);
        setStatus((prev)=>!prev)
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
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
                  name="country_name"
                  placeholder="Enter"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Show Website *</div>
                <select
                  value={website}
                  name="website_name"
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                  <option value="Select">Select</option>
                  <option>www.texch.com</option>
                  <option>www.we2call.com</option>
                  <option>www.ravana.com</option>
                  <option>www.brahama.com</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">In Active *</div>
                <select 
                  name="active"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                   className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                  <option selected>Select</option>
                  <option>Yes</option>
                  <option>No</option>
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
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h15vh"
                name="payment_details"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
              ></textarea>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={8}>
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-3 my-3 w-50 all-none"
                  onClick={handleCreatePolicy}
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
        setStatus={setStatus}
      />
    </div>
  );
}

export default AddPolicyPopup;
