// import React from "react"; 
// import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
// import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
// import { useEffect,useState} from "react";
// import { ADD_SECURITY_QUESTIONS } from "../../config/endpoints";
// import { call } from "../../config/axios";

// function AddReasonPopup(props) {
//   const {
//     rejectPopupOpen,
//     SetRejectpopupOpen,
//     Heading,
//     firstSelect,
//     firstTextarea,
//   } = props;
//   const [acceptClick, setAcceptClick] = useState(false);

//   const handleClosePopup = () => {
//     SetRejectpopupOpen(false);
//   };
//   const handleAcceptClickPopupOpen = () => {
//     setAcceptClick(true);
//     SetRejectpopupOpen(false);
//   };
  
//   return (
//     <div className="modal fade bd-example-modal-lg container mt-5">
//       <Modal
//         size="lg"
//         show={rejectPopupOpen}
//         onHide={handleClosePopup}
//         centered
//         className="match-share-modal payment-modal"
//       >
//         <Modal.Header closeButton>
//           <div className="px-4 mt-3">
//             <h6 className="text-start">{Heading}</h6>
//           </div>
//         </Modal.Header>                   
//         <Modal.Body className="px-5">
//           <Container fluid className="my-2">
//             <Row>
//               <Col className="ps-0" xs={8}>
//                 <div className="small-font my-1">{firstSelect} *</div>
//                 <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
//                   <option selected>Select</option>
//                   <option>www.texch.com</option>
//                   <option>www.we2call.com</option>
//                   <option>www.ravana.com</option>
//                   <option>www.brahama.com</option>
//                 </select>
//               </Col>
//               <Col className="pe-0">
//                 <div className="small-font my-1">In Active *</div>
//                 <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
//                   <option selected>Select</option>
//                   <option>Yes</option>
//                   <option>No</option>
//                 </select>
//               </Col>
//             </Row>
//           </Container>
//           <Container fluid className="my-2">
//             <Row xs={12}>
//               <div className="small-font my-1">{firstTextarea} *</div>
//               <textarea
//                 type="text"
//                 placeholder="Type Here....."
//                 className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
//               ></textarea>
//             </Row>
//           </Container>

//           <Container>
//             <Row>
//               <Col xs={8}>
//                 <button
//                   type="submit"
//                   className="add-button  small-font rounded px-4 py-3 mx-2 my-3 w-50 all-none"
//                   onClick={() => handleAcceptClickPopupOpen()}
//                 >
//                   Create
//                 </button>
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//       </Modal>
//       <MatchSubmitPopup
//         header={"Ticket Upgraded Successfully"}
//         state={acceptClick}
//         setState={setAcceptClick}
//       />
//     </div>
//   );
// }

// export default AddReasonPopup;



import React, { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { ADD_SECURITY_QUESTIONS } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";

function AddReasonPopup(props) {
  const {
    rejectPopupOpen,
    SetRejectpopupOpen,
    Heading,
    firstSelect,
    firstTextarea,
  } = props;

  const [acceptClick, setAcceptClick] = useState(false);
  const [formData, setFormData] = useState({
    register_id: "reg-20230710182031623", 
    question: "",
    active: "Select",
    description: "",
  });

  const handleClosePopup = () => {
    SetRejectpopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateClick = async () => {
    try {
      const res = await call(ADD_SECURITY_QUESTIONS, formData);
      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAcceptClick(true);
        SetRejectpopupOpen(false);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={rejectPopupOpen}
        onHide={handleClosePopup}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="px-4 mt-3">
            <h6 className="text-start">{Heading}</h6>
          </div>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0" xs={8}>
                <div className="small-font my-1">{firstSelect} *</div>
                <input
                  type="text"
                  name="question"
                  placeholder="Enter question here"
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                  value={formData.question}
                  onChange={handleInputChange}
                />
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">In Active *</div>
                <select
                  name="active"
                  value={formData.active}
                  onChange={handleInputChange}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row xs={12}>
              <div className="small-font my-1">{firstTextarea} *</div>
              <textarea
                name="description"
                placeholder="Enter description here"
                value={formData.description}
                onChange={handleInputChange}
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
              ></textarea>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col xs={8}>
                <Button
                  type="submit"
                  variant="primary"
                  className="add-button small-font rounded px-4 py-3 mx-2 my-3 w-50 all-none"
                  onClick={handleCreateClick}
                >
                  Create
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default AddReasonPopup;

