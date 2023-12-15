import React from "react";
import { ModalHeader } from "react-bootstrap";
import { Col, Container, Modal, Row } from "react-bootstrap";

function PaymentImagePopup(props) {
  const { showScreenshotImg, setShowScreenshotImg, imageurl } = props;
//   console.log(imageurl,'......imageurl')
  const handlePopupClose = () => {
    setShowScreenshotImg(false);
  };
  return (
    <div>
      <Modal
        size="md"
        show={showScreenshotImg}
        onHide={handlePopupClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
            <img src={imageurl} />
          {/* <img src={process.env.PUBLIC_URL + "./assets/dog_imge.jpg"} /> */}
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default PaymentImagePopup;
