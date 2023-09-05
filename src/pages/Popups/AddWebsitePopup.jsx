import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="w-100 p-4">
            <div className="w-100 text-center my-n5">
              <h5>Add Website</h5>
              <span className="samll-font">Add new website</span>
            </div>
            <div>
              <div className="text-start mx-2 my-2">Website URL</div>
              <div>
                <input
                  type="text"
                  className="w-100 input-btn-bg px-2 py-2 all-none"
                  placeholder="Enter Website URL "
                />
              </div>
            </div>
            <div className="d-flex justify-content-center w-100 my-4">
              <button className="add-button rounded px-2 py-3 w-50">Add</button>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleAddWebPopupClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddWebPopupClose}>
          Save changes
        </Button>
      </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default AddWebsitePopup;
