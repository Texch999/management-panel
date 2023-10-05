import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { ADD_NOTIFICATIONS_TEXT_MESSAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { FaRegCalendarAlt } from "react-icons/fa";

function TextMessage() {
  const [textmessage, setTextMessage] = useState({});
  const handelTextMessage = async () => {
    console.log("click me.........", textmessage);
    if (
      !(
        textmessage?.country_name ||
        textmessage?.notification_type ||
        textmessage?.description ||
        textmessage?.user ||
        textmessage?.website_name
      )
    ) {
      return "missing required field";
    } else {
      await call(ADD_NOTIFICATIONS_TEXT_MESSAGES, {
        register_id: "reg-20230710182031623",
        country_name: textmessage.country_name,
        notification_type: textmessage.notification_type,
        website_name: textmessage.website_name,
        description: textmessage.description,
        start_date: textmessage.start_date,
        end_date: textmessage.end_date,
        publish_date: textmessage.publish_date,
        user: textmessage.user,
      }).then((res) => {
        console.log("------------>", res);
        setTextMessage(res?.data?.data);
      });
    }
  };
  useEffect(() => {
    setTextMessage();
  }, []);

  const handleChange = (e) => {
    //console.log(e.target.value, e.target.name);
    setTextMessage({ ...textmessage, [e.target.name]: e.target.value });
  };

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
                    <select
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                      name="website_name"
                      id="website_name"
                      value={textmessage?.website_name || ""}
                      onChange={(e) => handleChange(e)}
                    >
                      <option selected>Select</option>
                      <option value="www.texch.com">www.texch.com</option>
                      <option value="www.we2call.com">www.we2call.com</option>
                      <option value="www.ravana.com">www.ravana.com</option>
                      <option value="www.texchmaster.com">
                        www.texchmaster.com
                      </option>
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
                    <select
                      name="user"
                      value={textmessage?.user || ""}
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                      onChange={(e) => handleChange(e)}
                    >
                      {/* <option selected>Select</option> */}
                      <option selected>Select</option>
                      <option value="Demo">Demo</option>
                      <option value="Demo">Demo</option>
                      <option value="Demo">Demo</option>
                      <option value="Demo">Demo</option>
                    </select>
                  </div>
                </Col>
                <Col>
                  <div>
                    <div className="clr-grey small-font my-2">
                      Select Country *
                    </div>
                    <select
                      name="country_name"
                      value={textmessage?.country_name || ""}
                      className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                      onChange={(e) => handleChange(e)}
                    >
                      {/* <option selected>Select</option> */}
                      <option selected>Select</option>
                      <option value="Demo1">Demo1</option>
                      <option value="Demo2">Demo2</option>
                      <option value="Demo3">Demo3</option>
                      <option value="Demo4">Demo4</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Col>
                <div>
                  <div className="clr-grey small-font my-2">
                    Notification Type *
                  </div>
                  <select
                    name="notification_type"
                    value={textmessage?.notification_type || ""}
                    onChange={(e) => handleChange(e)}
                    className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                  >
                    {/* <option selected>Select</option> */}
                    <option selected>Select</option>
                    <option value="notification1">notification1</option>
                    <option value="notification2">notification2</option>
                    <option value="notification3">notification3</option>
                    <option value="notification4">notification4</option>
                  </select>
                </div>
              </Col>
            </Container>
          </Col>
          <Col className="pe-0">
            <div className="small-font my-2 clr-grey">Description</div>
            <textarea
              type="number"
              name="description"
              value={textmessage?.description || ""}
              onChange={(e) => handleChange(e)}
              placeholder="Type Here ............"
              className="w-100 custom-select small-font input-btn-bg rounded all-none py-3 px-2 h-85"
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
              <div className=" d-flex flex-row w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none align-items-center justify-content-between">
                <input
                  type="date"
                  className="login-input all-none w-50"
                  name="start_date"
                  value={textmessage?.start_date || ""}
                  onChange={(e) => handleChange(e)}
                ></input>
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">To</div>
              <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center justify-content-between">
                <input
                  name="end_date"
                  type="date"
                  className="login-input all-none w-50"
                  value={textmessage?.end_date || ""}
                  onChange={(e) => handleChange(e)}
                ></input>
                <FaRegCalendarAlt className="upload-icon p-1 font-size-30" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2 clr-grey">Publish Date</div>
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
      </Container>
      <div className="d-flex align-items-center flex-row px-3 mt-3">
        <input type="checkbox" />
        <div className="medium-font mx-2 clr-grey">Publish Now</div>
      </div>
      <div className="row w-100 d-flex flex-row justify-content-between my-3">
        <div className="col-sm d-flex flex-row">
          <button
            type="submit"
            className="add-button  medium-font rounded px-3 py-3 mx-2  all-none "
            onClick={() => handelTextMessage()}
          >
            Publish
          </button>
          <button
            type="submit"
            className="msg-deactive-button  medium-font rounded  mx-2 all-none px-3 py-3"
          >
            Save As Draft
          </button>
        </div>
        <div class="col-sm d-flex justify-content-end">
          <button
            type="submit"
            className="msg-deactive-button  medium-font rounded  mx-2 all-none px-3 py-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextMessage;
