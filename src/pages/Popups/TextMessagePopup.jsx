import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { GET_ALL_WEBSITES, UPDATE_NOTIFICATION } from "../../config/endpoints";
import { call } from "../../config/axios";
import { FaRegCalendarAlt } from "react-icons/fa";
function TextMessage(props) {
  const { showBroadcastOpen, setShowBroadcastOpen, selectedBroadcast } = props;
  const [textmessage, setTextMessage] = useState({});
  const handleAddDirectorClose = () => {
    setShowBroadcastOpen(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setTextMessage({ ...textmessage, [e.target.name]: e.target.value });
  };

  const [addDirectorsPopup, setAddDirectorPopup] = useState(false);

  const handleUpdateNotification = async () => {
    let p_id = selectedBroadcast.p_id;
    let notification_id = selectedBroadcast.notification_id;
    const payload = {
      p_id,
      notification_id,
      ...textmessage,
    };

    await call(UPDATE_NOTIFICATION, payload)
      .then((res) => {
        if (res.status.data === 200) {
          setTimeout(() => {
            setAddDirectorPopup(false);
            setShowBroadcastOpen(false);
          }, 2000);
        }
        if (res.data.error) {
          console.log("API Error...", res.data.message);
        } else {
          setAddDirectorPopup(false);
          handleAddDirectorClose();
          setTextMessage({});
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (selectedBroadcast) {
      setTextMessage({});
    }
  }, [selectedBroadcast]);

  const [websiteNames, setwebsiteNames] = useState([]);

  const getwebsiteNames = async () => {
    setTextMessage(selectedBroadcast);
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        setwebsiteNames(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getwebsiteNames();
  }, [selectedBroadcast]);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        show={showBroadcastOpen}
        onHide={handleAddDirectorClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 mt-4">
            <h5 className="text-center mt-2 mb-4">Update Notifications</h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 px-4">
            <Row>
              <Col>
                <div className="small-font my-2 clr-grey">Title</div>
                <input
                  type="text"
                  name="event_name"
                  value={textmessage?.event_name || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="Type Here ............"
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                ></input>
              </Col>
              <Col>
                <div>
                  <div className="small-font my-2 clr-grey">Publish Date</div>
                  <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center justify-content-between">
                    <input
                      name="publish_date"
                      type="date"
                      className="login-input all-none w-50"
                      value={textmessage?.publish_date || ""}
                      onChange={(e) => handleChange(e)}
                    ></input>
                    <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <div className="clr-grey small-font my-2">
                    Select Website *
                  </div>
                  <select
                    className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                    name="website_name"
                    id="website_name"
                    value={textmessage?.website_name || ""}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="select">select</option>
                    <option value="All">All</option>
                    {websiteNames.map((obj) => (
                      <option value={obj.web_url} selected>
                        {obj.web_url}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col>
                <div className="small-font my-2 clr-grey">Type</div>
                <input
                  type="text"
                  name="country_name"
                  value={textmessage?.country_name || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter type"
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                ></input>
              </Col>
            </Row>
            <Col>
              <div className="small-font my-2 clr-grey">Description</div>
              <textarea
                type="text"
                name="description"
                value={textmessage?.description || ""}
                onChange={(e) => handleChange(e)}
                placeholder="Type Here ............"
                className="w-100 custom-select small-font input-btn-bg rounded all-none p-2 h-85"
              ></textarea>
            </Col>
            <Row>
              <Col>
                <div className="small-font my-2 clr-grey">In-Active *</div>
                <select className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded">
                  Select
                  <option value="Select">Select</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </Col>
              <Col>
                <div className="small-font my-2 clr-grey">Publish Time *</div>
                <input
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                  name="create_at"
                  id="create_at"
                  value={textmessage?.create_at || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="UTC Time Stamp"
                />
              </Col>
            </Row>
            <div className="d-flex justify-content-center w-100 my-4">
              <button
                className="add-button rounded px-2 py-3 w-50 medium-font"
                onClick={() => handleUpdateNotification()}
              >
                {selectedBroadcast ? "Update" : ""}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Upgraded  Successfully"}
        state={addDirectorsPopup}
        setState={setAddDirectorPopup}
      />
    </div>
  );
}

export default TextMessage;
