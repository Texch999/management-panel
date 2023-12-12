import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { UPDATE_MATCH } from "../../config/endpoints";
import { call } from "../../config/axios";

function MatchPopup(props) {
  const { selectedMatch, showMatchOpen, setShowMatchOpen } = props;
  const [editMatchPopup, setEditMatchPopup] = useState(false);
  const [createMatch, setCreateMatch] = useState({});
  const handleMatchClose = () => {
    setShowMatchOpen(false);
  };

  console.log("Create Match===>", createMatch);

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setCreateMatch({ ...createMatch, [e.target.name]: e.target.value });
  };

  const handleUpdateMatch = async () => {
    let register_id = selectedMatch.register_id;
    let match_id = selectedMatch.match_id;
    const payload = {
      register_id,
      match_id,
      ...createMatch,
    };

    await call(UPDATE_MATCH, payload)
      .then((res) => {
        console.log("res======>", res);
        if (res?.status?.data === 201) {
          // setEditMatchPopup(true);
          setTimeout(() => {
            setEditMatchPopup(false);
            setShowMatchOpen(false);
          }, 2000);
        }
        if (res.data.error) {
          console.log("API Error...", res.data.message);
        } else {
          setEditMatchPopup(true);
          handleMatchClose();
          setShowMatchOpen(false);
          setCreateMatch({});
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (selectedMatch) {
      // Set the initial values from selectedMatch to createMatch
      setCreateMatch({
        series_name: selectedMatch.series_name || "",
        match_name: selectedMatch.match_name || "",
        match_place: selectedMatch.match_place || "",
        date: selectedMatch.date || "",
        time: selectedMatch.time || "",
      });
    }
  }, [selectedMatch]);
  console.log("selectedMatch====>", selectedMatch);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        show={showMatchOpen}
        onHide={handleMatchClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 mt-4">
            <h5 className="text-center mt-2 mb-4">Update Match</h5>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 px-4">
            <Row>
              <Col>
                <div className="small-font my-2 clr-grey">Series Name</div>
                <input
                  type="text"
                  name="series_name"
                  value={createMatch?.series_name || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Series name"
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                ></input>
              </Col>
              <Col>
                <div className="small-font my-2 clr-grey">Team</div>
                <input
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                  name="match_name"
                  type="text"
                  placeholder="Enter Series Name"
                  value={createMatch?.match_name || ""}
                  onChange={(e) => handleChange(e)}
                />
              </Col>
            </Row>

            <Col>
              <div className="small-font my-2 clr-grey">Match Place</div>
              <textarea
                type="text"
                name="match_place"
                value={createMatch?.match_place || ""}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Match Palce"
                className="w-100 custom-select small-font input-btn-bg rounded all-none p-2 h-85"
              ></textarea>
            </Col>
            <Row>
              <Col>
                <div className="small-font my-2 clr-grey">Date *</div>
                <input
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                  name="date"
                  id="date"
                  value={createMatch?.date || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="Please Enter Date"
                />
              </Col>
              <Col>
                <div className="small-font my-2 clr-grey">Time *</div>
                <input
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                  name="time"
                  id="time"
                  value={createMatch?.time || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="Please Enter Time"
                />
              </Col>
            </Row>
            <div className="d-flex justify-content-center w-100 my-4">
              <button
                className="add-button rounded px-2 py-3 w-50 medium-font"
                onClick={() => handleUpdateMatch()}
              >
                {selectedMatch ? "Update" : ""}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Match Updated Successfully"}
        state={editMatchPopup}
        setState={setEditMatchPopup}
      />
    </div>
  );
}

export default MatchPopup;
