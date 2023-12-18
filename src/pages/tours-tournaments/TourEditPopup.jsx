import { Col, Container, Modal, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";

function TourEditPopup(props) {
  const { showEditPopup, setShowEditPopup, editTourDetails } = props;

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showEditPopup}
        onHide={setShowEditPopup}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <h4 className="align-items-center">Tour Details</h4>
        </Modal.Header>
        <div className="add-tours p-3 mt-3">
          <div className="sub-head medium-font mt-3">Tours</div>
          {editTourDetails &&
            editTourDetails.length > 0 &&
            editTourDetails.map((item, index) => {
              return (
                <div className="mb-3">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="font-grey col-2 mt-1"></div>
                  </div>
                  <div className="row font-grey medium-font gx-2">
                    <div className="col-2">
                      <div className="font-grey col-2 mt-1">Poster_img</div>
                      <div className=" tt-content-box p-2 ">
                        IMG4567959.jpg
                        <HiPhotograph className="ms-1 ions-clr" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="font-grey col-2 mt-1">Schedule_From</div>
                      <div className="tt-content-box p-2">
                        {item.schedule_from}
                      </div>
                    </div>
                    <div className="col">
                      <div className="font-grey col-2 mt-1">Tour_Title</div>
                      <div className="tt-content-box p-2">
                        {item.tour_title}
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="font-grey col-2 mt-1">Quotation</div>
                      <div className="tt-content-box p-2">
                        {item.quotations}
                      </div>
                    </div>
                    <div className="col-1 ">
                      <div className="font-grey col-2 mt-1">Country</div>
                      <div className="tt-content-box p-2">{item.country}</div>
                    </div>
                    <div className="col-2 ">
                      <div className="font-grey col-2 mt-1">Website</div>
                      <div className="tt-content-box p-2">{item.website}</div>
                    </div>
                  </div>
                  <div className="row justify-content-between mt-2">
                    <div className="col-1 d-flex">
                      <div className="open-button p-1">Open</div>
                    </div>
                    <div className="col-2">
                      <div className="row d-flex justify-content-between">
                        <div className="col-5">
                          <div className="black-button p-1">Block</div>
                        </div>
                        <div className="col-5 ">
                          <div className="edit-button p-1">Edit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal>
    </div>
  );
}

export default TourEditPopup;
