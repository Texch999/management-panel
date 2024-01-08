import React from "react";
import { ModalHeader } from "react-bootstrap";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Document, Page } from "react-pdf";

function PaymentImagePopup(props) {
  const {
    showScreenshotImg,
    setShowScreenshotImg,
    documentView,
    setDocumentView,
  } = props;

  console.log(documentView, "......imageurl");
  // const fileExtensionForView = documentView?.split('.')
  // console.log(fileExtensionForView[1],'......view')
  const fileName = documentView?.split('/').pop();
  
  // Get the file extension
  console.log(fileName,'........filename')
  const fileExtension = fileName?.split('.').pop();
  console.log(fileExtension,'........fileext')
  
  // return fileExtension;

  const handlePopupClose = () => {
    setDocumentView("");
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
        </Modal.Header>
        {fileExtension === "pdf" ? (
            <div>
              <Document file={documentView}>
                <Page pageNumber={1} />
              </Document>
            </div>
          ) : (
            <div>
              <img src={documentView} />
            </div>
          )}
      </Modal>
    </div>
  );
}

export default PaymentImagePopup;
