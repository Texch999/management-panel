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
        className="match-share-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="w-100 p-4">
            <div className="w-100 text-center mt-n5">
              <h5>Add Website</h5>
              <span>Add new website</span>
            </div>
            <div>
              <div className="text-start mx-2 my-2">Website URL</div>
              <div>
                <input type="text" className="w-100" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100 my-4">
            <button className="add-button rounded px-5 py-3">Add</button>
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
