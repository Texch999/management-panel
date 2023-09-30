import React from "react";
import { Modal } from "react-bootstrap";
import "./styles.css";
function AddWebsitePopup(props) {
  const { showAddWebPopup, setShowAddWebPopup } = props;
  const handleAddWebPopupClose = () => {
    setShowAddWebPopup(false);
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
                  className="w-100 input-btn-bg px-2 py-2 all-none rounded"
                  placeholder="Enter Website URL "
                />
              </div>
            </div>
            <div className="d-flex justify-content-center w-100 my-4">
              <button className="add-button rounded px-2 py-2 w-50 medium-font">Add</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddWebsitePopup;
