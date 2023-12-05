import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./styles.css";
import { ADD_WEBSITE } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
function AddWebsitePopup(props) {
  const { showAddWebPopup, setShowAddWebPopup, setStatus } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  const [formData, setFormData] = useState({
    register_id: "company",
    web_url: "",
  });
  const handleAddWebPopupClose = () => {
    setShowAddWebPopup(false);
   
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCreateWebsite = async () => {
    try {
      const res = await call(ADD_WEBSITE,formData);
      if (res.data.status === 200) {
        setAcceptClick(true);
        setTimeout(() => {
          setAcceptClick(false);
          setShowAddWebPopup(false);
        }, 2000);
      }
      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAcceptClick(true);
        handleAddWebPopupClose()
        setShowAddWebPopup(false);
        setStatus((prev) => !prev);
        setFormData({
          web_url: "",
        });
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        show={showAddWebPopup}
        onHide={handleAddWebPopupClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 text-center mt-4">
            <h6>Add Website</h6>
            <span className="small-font">Add new website</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 p-4">
            <div>
              <div className="text-start mx-2 my-2 small-font">Website URL</div>
              <div>
                <input
                  type="text"
                  name="web_url"
                  className="w-100 input-btn-bg px-2 py-2 all-none rounded"
                  placeholder="Enter Website URL "
                  value={formData.web_url}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center w-100 my-4">
              <button
                className="add-button rounded px-2 py-2 w-50 medium-font"
                onClick={() => handleCreateWebsite()}
              >
                Add
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Website Added Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
        setStatus={setStatus}
      />
    </div>
  );
}

export default AddWebsitePopup;
