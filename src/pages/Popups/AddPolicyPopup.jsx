import React, { useState, useEffect } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import {
  ADD_POLICY,
  UPDATE_POLICY,
  GET_ALL_WEBSITES,
} from "../../config/endpoints";
import { call } from "../../config/axios";
function AddPolicyPopup(props) {
  const {
    addPolicyOpen,
    setAddPolicyOpen,
    setStatus,
    setSelectedPolicy,
    selectedPolicy,
  } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [website, setWebsite] = useState("");
  const [policyDetails, setPolicyDetails] = useState("");
  const [active, setActive] = useState("Select");
  const [addPolicyData, setAddPolicyData] = useState("");

  const handleAddPolicyClose = () => {
    setAddPolicyOpen(false);
    setSelectedPolicy(null);
    setCountryName("");
    setPolicyDetails("");
    setWebsite("Select");
    setActive("Select");
  };
  useEffect(() => {
    if (selectedPolicy) {
      setCountryName(selectedPolicy.country_name || "");
      setPolicyDetails(selectedPolicy.policy_description || "");
      setWebsite(selectedPolicy.website_name || "Select");
      setActive(selectedPolicy.active || "Select");
    } else {
    }
  }, [selectedPolicy]);
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
  const handleCreateOrUpdatePolicy = async () => {
    try {
      const url = selectedPolicy ? UPDATE_POLICY : ADD_POLICY;
      const requestData = {
        register_id: "reg-20230710182031623",
        country_name: countryName,
        policy_description: policyDetails,
        website_name: website,
        active: active,
      };

      if (selectedPolicy) {
        requestData.policy_id = selectedPolicy.policy_id;
        requestData.p_id = selectedPolicy.p_id;
      }

      const res = await call(url, requestData);

      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAcceptClick(true);
        setAddPolicyOpen(false);
        handleAddPolicyClose();
        setStatus((prev) => !prev);
        setCountryName("");
        setPolicyDetails("");
        setWebsite("Select");
        setActive("Select");
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
                  id="country_name"
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
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
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
                  <option selected>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <div className="small-font my-1">Policy Details *</div>
              <textarea
                type="text"
                placeholder="Type Here....."
                id="payment_details"
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h15vh"
                name="policy_description"
                value={policyDetails}
                onChange={(e) => setPolicyDetails(e.target.value)}
              ></textarea>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={8}>
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-3 my-3 w-50 all-none"
                  onClick={handleCreateOrUpdatePolicy}
                >
                  {selectedPolicy ? "Update" : "Create"}
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
