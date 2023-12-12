import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { GET_ALL_WEBSITES, UPDATE_OFFER } from "../../config/endpoints";
import { call } from "../../config/axios";
import { FaRegCalendarAlt } from "react-icons/fa";
function OfferMessagePopup(props) {
  const { showOfferOpen, setShowOfferOpen, selectedOffer } = props;
  const [textmessage, setTextMessage] = useState({});
  const handleOfferClose = () => {
    setShowOfferOpen(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setTextMessage({ ...textmessage, [e.target.name]: e.target.value });
  };

  const [addOfferssPopup, setAddOffersPopup] = useState(false);

  const handleUpdateOffer = async () => {
    let p_id = selectedOffer.p_id;
    let offer_id = selectedOffer.offer_id;
    const payload = {
      p_id,
      offer_id,
      ...textmessage,
    };

    await call(UPDATE_OFFER, payload)
      .then((res) => {
        if (res.status.data === 200) {
          setTimeout(() => {
            setAddOffersPopup(false);
            setShowOfferOpen(false);
          }, 2000);
        }
        if (res.data.error) {
          console.log("API Error...", res.data.message);
        } else {
          setAddOffersPopup(true);
          handleOfferClose();
          setTextMessage({});
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (selectedOffer) {
      setTextMessage({});
    }
  }, [selectedOffer]);

  const [websiteNames, setwebsiteNames] = useState([]);

  const getwebsiteNames = async () => {
    setTextMessage(selectedOffer);
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
  }, [selectedOffer]);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        show={showOfferOpen}
        onHide={handleOfferClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 mt-4">
            <h5 className="text-center mt-2 mb-4">Update Offer</h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 px-4">
            <Row>
              <Col>
                <div className="small-font my-2 clr-grey">Title</div>
                <input
                  type="text"
                  name="title"
                  value={textmessage?.title || ""}
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
                onClick={() => handleUpdateOffer()}
              >
                {selectedOffer ? "Update" : ""}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Offer Updated  Successfully"}
        state={addOfferssPopup}
        setState={setAddOffersPopup}
      />
    </div>
  );
}

export default OfferMessagePopup;
