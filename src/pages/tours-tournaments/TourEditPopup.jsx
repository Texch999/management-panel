import React, { useEffect, useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import { GET_ADMIN_ALL_ACCOUNTS, UPDATE_TOURS } from "../../config/endpoints";
import { call } from "../../config/axios";

function TourEditPopup(props) {
  const {
    isUpdate,
    setStatus,
    setShowEditPopup,
    showEditPopup,
    editTourDetails,
    setEditTourDetails,
  } = props;
  const [acceptClick, setAcceptClick] = useState(false);
  const [header, setHeader] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [allWebsites, setAllWebsites] = useState([]);

  const handleClose = () => {
    setShowEditPopup(false);
  };
  const handleOnchange = (e) => {
    setEditTourDetails({
      ...editTourDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAcceptClickPopupOpen = async () => {
    const payload = {
      tour_id: editTourDetails.tour_id,
      ...editTourDetails,
    };
    await call(UPDATE_TOURS, payload)
      .then((res) => {
        if (res?.data?.status === 200) {
          setAcceptClick(true);
          setHeader(res?.data?.message);
          setShowEditPopup(false);
          setStatus((prev) => !prev);
        }
      })
      .catch((error) => console.log(error, "...error"));
  };

  const gettingAllCountries = async () => {
    const payload = {};
    await call(GET_ADMIN_ALL_ACCOUNTS, payload)
      .then((res) => {
        setAllCountries([
          ...new Set(
            res?.data?.data
              .filter((item) => item.country_name !== undefined)
              .map((item) => item.country_name)
          ),
        ]);
        setAllWebsites([
          ...new Set(
            res?.data?.data
              .filter((item) => item.website_name !== undefined)
              .map((item) => item.website_name)
          ),
        ]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    gettingAllCountries();
  }, []);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={showEditPopup}
        onHide={handleClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="px-5 mt-3">
            <h5 className="text-start">
              {isUpdate === true ? "Update Tour" : "Tour Details"}
            </h5>
          </div>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0 pe-0">
                <div className="small-font my-1">Tour Title</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="tour_title"
                  value={editTourDetails.tour_title || ""}
                  onChange={(e) => handleOnchange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Tour Name</div>
                <select
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                  name="tour_name"
                  value={editTourDetails.tour_name || ""}
                  onChange={(e) => handleOnchange(e)}
                >
                  <option value="1.Take Part in Our Tour">
                    1.Take Part in Our Tour
                  </option>
                  ;<option value="2.Cricket Tour">2.Cricket Tour</option>;
                  <option value="3.Sports Tour">3.Sports Tour</option>;
                  <option value="4.Casino Tour">4.Casino Tour</option>;
                  <option value="5.Entertainment Tour">
                    5.Entertainment Tour
                  </option>
                  ;
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Website</div>
                <select
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                  name="website"
                  value={editTourDetails.website || ""}
                  onChange={(e) => handleOnchange(e)}
                >
                  {allWebsites &&
                    allWebsites.length > 0 &&
                    allWebsites.map((item) => {
                      if (item.length > 0) {
                        return <option value={item}>{item}</option>;
                      }
                    })}
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-1">
            <Row>
              <Col className="ps-0 pe-0">
                <div className="small-font my-1">Publish From</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="publish_from"
                  value={editTourDetails.publish_from || ""}
                  onChange={(e) => handleOnchange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Publish Upto</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="publish_upto"
                  value={editTourDetails.publish_upto || ""}
                  onChange={(e) => handleOnchange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Country</div>
                <select
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                  name="country"
                  value={editTourDetails.country || ""}
                  onChange={(e) => handleOnchange(e)}
                >
                  {allCountries &&
                    allCountries.length > 0 &&
                    allCountries.map((item) => {
                      if (item.length > 0) {
                        return <option value={item}>{item}</option>;
                      }
                    })}
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0 pe-0">
                <div className="small-font my-1">Schedule From</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="schedule_from"
                  value={editTourDetails.schedule_from || ""}
                  onChange={(e) => handleOnchange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Schedule Upto</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="schedule_upto"
                  value={editTourDetails.schedule_upto || ""}
                  onChange={(e) => handleOnchange(e)}
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                ></input>
              </Col>
              <Col className="pe-0 pb-4">
                <div className="small-font my-1">Status</div>
                <select
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                  name="status"
                  value={editTourDetails.status || ""}
                  onChange={(e) => handleOnchange(e)}
                >
                  {/* <option selected>Select</option> */}
                  <option value={"active"}>Active</option>
                  <option value={"inactive"}>InActive</option>
                </select>
              </Col>
            </Row>
          </Container>
          {isUpdate && (
            <div>
              <Container>
                <Row className="ps-0">
                  <Col xs={8}>
                    <button
                      type="submit"
                      className="add-button  small-font rounded ps-0 px-4 py-3  my-3 w-50 all-none"
                      onClick={() => handleAcceptClickPopupOpen()}
                    >
                      Update
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={header}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default TourEditPopup;
