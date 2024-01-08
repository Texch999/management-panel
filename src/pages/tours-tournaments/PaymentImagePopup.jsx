import React from "react";
import { ModalHeader } from "react-bootstrap";
import { Col, Container, Modal, Row } from "react-bootstrap";
// import { Document, Page } from "react-pdf";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Document, Page } from 'react-pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';

import "@react-pdf-viewer/core/lib/styles/index.css";

function PaymentImagePopup(props) {
  const {
    showScreenshotImg,
    setShowScreenshotImg,
    documentView,
    setDocumentView,
  } = props;

  console.log(documentView, "......imageurl");
  const fileName = documentView?.split("/").pop();
  const fileExtension = fileName?.split(".").pop();
  console.log(fileExtension, "........fileext");

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
        <Modal.Header closeButton></Modal.Header>
        {fileExtension === "pdf" ? (
          <div style={{height:"10vw", width:"10vw"}}>
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
