import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

function TextMessage() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="p-4">
      <Container fluid className="my-2">
        <Row>
          <Col className="ps-0">
            <Container>
              <Row>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select Website *
                    </div>
                    <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                      {/* <option selected>Select</option> */}
                      <option selected>NEFT/RTGS</option>
                      <option>UPI</option>
                      <option>Phone Pe</option>
                      <option>Google Pay</option>
                      <option>Paytm</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select User/Admin *
                    </div>
                    <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                      {/* <option selected>Select</option> */}
                      <option selected>NEFT/RTGS</option>
                      <option>UPI</option>
                      <option>Phone Pe</option>
                      <option>Google Pay</option>
                      <option>Paytm</option>
                    </select>
                  </div>
                </Col>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select Country *
                    </div>
                    <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                      {/* <option selected>Select</option> */}
                      <option selected>NEFT/RTGS</option>
                      <option>UPI</option>
                      <option>Phone Pe</option>
                      <option>Google Pay</option>
                      <option>Paytm</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Col>
                <div>
                  <div className="clr-grey small-font my-2">
                    Notification Type *
                  </div>
                  <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
                    {/* <option selected>Select</option> */}
                    <option selected>NEFT/RTGS</option>
                    <option>UPI</option>
                    <option>Phone Pe</option>
                    <option>Google Pay</option>
                    <option>Paytm</option>
                  </select>
                </div>
              </Col>
            </Container>
          </Col>
          <Col className="pe-0">
            <div className="small-font my-2 clr-grey">Description</div>
            <textarea
              type="number"
              placeholder="Type Here ............"
              className="w-100 custom-select small-font input-btn-bg rounded all-none py-3 px-2 h20vh"
            ></textarea>
          </Col>
        </Row>
      </Container>
      <hr className="hr-line my-2" />
      <div className="w-25">
        <div className="rounded-pill medium-font px-3 py-2 completed-btn w-50 text-center">
          Publish Details
        </div>
      </div>
      <Container fluid className="mt-2">
        <Row className="w-100">
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">Active From</div>
              <div className=" d-flex flex-row w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none align-items-center">
                <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">To</div>
              <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center">
                <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">Publish Date</div>
              <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center">
                <DatePicker
                  className="login-input all-none w-50"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="d-flex align-items-center flex-row px-3 mt-3">
        <input type="checkbox" />
        <div className="medium-font mx-2 clr-grey">Publish Now</div>
      </div>
      <div className="d-flex justify-content-between flex-row align-itms-center my-3 w-100">
        <div className="d-flex  flex-row justify-content-start w-50">
          <button
            type="submit"
            className="add-button  medium-font rounded px-5 py-3 mx-2 w-25 all-none"
          >
            Publish
          </button>
          <button
            type="submit"
            className="msg-deactive-button  medium-font rounded px-4 py-3 mx-2 w-25 all-none"
          >
            Save As Draft
          </button>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <button
            type="submit"
            className="msg-deactive-button  medium-font rounded px-4 py-3 mx-2 w-25 all-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextMessage;