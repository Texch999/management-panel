// import React, { useState } from "react";
// import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
// import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";

// function AddCountryPopups(props) {
//   const { addCountryOpen, setAddCountryOpen } = props;
//   const [acceptClick, setAcceptClick] = useState(false);
//   const handleAcceptClickPopupOpen = () => {
//     setAcceptClick(true);
//     setAddCountryOpen(false);
//   };
//   const handleAddCountryOpenClose = () => {
//     setAddCountryOpen(false);
//   };
//   return (
//     <div className="modal fade bd-example-modal-lg container mt-5">
//       <Modal
//         size="lg"
//         show={addCountryOpen}
//         onHide={handleAddCountryOpenClose}
//         centered
//         className="match-share-modal payment-modal"
//       >
//         <Modal.Header closeButton>
//           <div className="px-5 mt-3">
//             <h6 className="text-start">
//               Add Country,Currency and Payment Gateways
//             </h6>
//           </div>
//         </Modal.Header>
//         <Modal.Body className="px-5">
//           <Container fluid className="my-2">
//             <Row>
//               <Col className="ps-0">
//                 <div className="small-font my-1">Country Name *</div>
//                 <input
//                   type="text"
//                   placeholder="Enter"
//                   className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
//                 ></input>
//               </Col>
//               <Col className="pe-0">
//                 <div className="small-font my-1">Currency Name *</div>
//                 <input
//                   type="number"
//                   placeholder="Enter"
//                   className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
//                 ></input>
//               </Col>
//               <Col className="pe-0">
//                 <div className="small-font my-1">Payment Gateway *</div>
//                 <select className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
//                   <option selected>Select</option>
//                   <option>Phone Pe</option>
//                   <option>NEFT/RTGS</option>
//                   <option>UPI</option>
//                   <option>Paytm</option>
//                 </select>
//               </Col>
//             </Row>
//           </Container>
//           <Container fluid className="my-2">
//             <Row>
//               <div className="small-font my-1">Payment Details *</div>
//               <textarea
//                 type="text"
//                 placeholder="Type Here....."
//                 className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
//               ></textarea>
//             </Row>
//           </Container>
//           <Container fluid className="my-2">
//             <Row>
//               <Col className="ps-0" xs={8}>
//                 <div className="small-font my-1">Show Website *</div>
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

// export default AddCountryPopups;


// import React, { useState } from "react";
// import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
// import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
// import { ADD_COUNTRY_AND_CURRENCY } from "../../config/endpoints";
// import { call } from "../../config/axios";

// function AddCountryPopups(props) {
//   const { addCountryOpen, setAddCountryOpen,onGoBack } = props;
//   const [acceptClick, setAcceptClick] = useState(false);
//   const [formData, setFormData] = useState({
//     register_id: "reg-20230710182031623", 
//     country_name: "",
//     currency_name:"",
//     payment_gateway : "Select",
//     payment_details : "",
//     website:"Select",
//     active: "Select",
//   });
//   // const handleAcceptClickPopupOpen = () => {
//   //   setAcceptClick(true);
//   //   setAddCountryOpen(false);
//   // };
//   const handleAddCountryOpenClose = () => {
//     setAddCountryOpen(false);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleCreateClick = async () => {
//     try {
//       const res = await call(ADD_COUNTRY_AND_CURRENCY, formData);
//       if (res.data.error) {
//         console.error("API Error:", res.data.message);
//       } else {
//         setAcceptClick(true);
//         setAddCountryOpen(false);
//       }
//     } catch (err) {
//       console.error("API Error:", err);
//     }
//   };
//   return (
//     <div className="modal fade bd-example-modal-lg container mt-5">
//       <Modal
//         size="lg"
//         show={addCountryOpen}
//         onHide={handleAddCountryOpenClose}
//         centered
//         className="match-share-modal payment-modal"
//       >
//         <Modal.Header closeButton>
//           <div className="px-5 mt-3">
//             <h6 className="text-start">
//               Add Country,Currency and Payment Gateways
//             </h6>
//           </div>
//         </Modal.Header>
//         <Modal.Body className="px-5">
//           <Container fluid className="my-2">
//             <Row>
//               <Col className="ps-0">
//                 <div className="small-font my-1">Country Name *</div>
//                 <input
//                   type="text"
//                   name="country_name"
//                   placeholder="Enter"
//                   className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
//                   value={formData.country_name}
//                   onChange={handleInputChange}
//                 ></input>
//               </Col>
//               <Col className="pe-0">
//                 <div className="small-font my-1">Currency Name *</div>
//                 <input
//                   type="text"
//                   placeholder="Enter"
//                   name="currency_name"
//                   className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
//                   value={formData.currency_name}
//                   onChange={handleInputChange}
//                 ></input>
//               </Col>
//               <Col className="pe-0">
//                 <div className="small-font my-1">Payment Gateway *</div>
//                 <select
//                 name="active"
//                 value={formData.active}
//                 onChange={handleInputChange} 
//                 className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
//                   <option selected>Select</option>
//                   <option>Phone Pe</option>
//                   <option>NEFT/RTGS</option>
//                   <option>UPI</option>
//                   <option>Paytm</option>
//                 </select>
//               </Col>
//             </Row>
//           </Container>
//           <Container fluid className="my-2">
//             <Row>
//               <div className="small-font my-1">Payment Details *</div>
//               <textarea
//                 name="payment_details"
//                 type="text"
//                 placeholder="Type Here....."
//                 value={formData.payment_details}
//                 onChange={handleInputChange}
//                 className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
//               ></textarea>
//             </Row>
//           </Container>
//           <Container fluid className="my-2">
//             <Row>
//               <Col className="ps-0" xs={8}>
//                 <div className="small-font my-1">Show Website *</div>
//                 <select 
//                     name="payment_details"
//                     value={formData.website}
//                     onChange={handleInputChange}
//                     className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
//                   <option selected>Select</option>
//                   <option>www.texch.com</option>
//                   <option>www.we2call.com</option>
//                   <option>www.ravana.com</option>
//                   <option>www.brahama.com</option>
//                 </select>
//               </Col>
//               <Col className="pe-0">
//                 <div className="small-font my-1">In Active *</div>
//                 <select 
//                   name="active"
//                   value={formData.active}
//                   onChange={handleInputChange} 
//                   className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none">
//                   <option selected>Select</option>
//                   <option>Yes</option>
//                   <option>No</option>
//                 </select>
//               </Col>
//             </Row>
//           </Container>
//           <Container>
//             <Row>
//               <Col xs={8}>
//                 <button
//                   type="submit"
//                   className="add-button  small-font rounded px-4 py-3 mx-2 my-3 w-50 all-none"
//                   // onClick={() => handleAcceptClickPopupOpen()}
//                   onClick={handleCreateClick}
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
//         onGoBack={onGoBack}
//       />
//     </div>
//   );
// }

// export default AddCountryPopups;


import React, { useState } from "react";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { Col, Container, Dropdown, Modal, Row } from "react-bootstrap";
import { ADD_COUNTRY_AND_CURRENCY } from "../../config/endpoints";
import { call } from "../../config/axios";

function AddCountryPopups(props) {
  const { addCountryOpen, setAddCountryOpen, setStatus,} = props;
  const [acceptClick, setAcceptClick] = useState(false);

  const [countryName, setCountryName] = useState("");
  const [currencyName, setCurrencyName] = useState("");
  const [paymentGateway, setPaymentGateway] = useState("Select");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [website, setWebsite] = useState("Select");
  const [active, setActive] = useState("Select");

  const handleAddCountryOpenClose = () => {
    setAddCountryOpen(false);
  };

  const handleCreateClick = async () => {
    try {
      const data = {
        register_id: "reg-20230909114353315",
        country_name: countryName,
        currency_name: currencyName,
        payment_gateway: paymentGateway,
        payment_details: paymentDetails,
        website: website,
        active: active
      };
      
      const res = await call(ADD_COUNTRY_AND_CURRENCY,data);
      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAcceptClick(true);
        setAddCountryOpen(false);
        setStatus((prev)=>!prev)
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={addCountryOpen}
        onHide={handleAddCountryOpenClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="px-5 mt-3">
            <h6 className="text-start">
              Add Country, Currency and Payment Gateways
            </h6>
          </div>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0">
                <div className="small-font my-1">Country Name *</div>
                <input
                  type="text"
                  name="country_name"
                  placeholder="Enter"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Currency Name *</div>
                <input
                  type="text"
                  placeholder="Enter"
                  name="currency_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-3 all-none rounded all-none"
                  value={currencyName}
                  onChange={(e) => setCurrencyName(e.target.value)}
                ></input>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">Payment Gateway *</div>
                <select
                  name="active"
                  value={paymentGateway}
                  onChange={(e) => setPaymentGateway(e.target.value)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
                  <option>Phone Pe</option>
                  <option>NEFT/RTGS</option>
                  <option>UPI</option>
                  <option>Paytm</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <div className="small-font my-1">Payment Details *</div>
              <textarea
                name="payment_details"
                type="text"
                placeholder="Type Here....."
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                className="w-100 custom-select small-font login-inputs input-btn-bg rounded h9vh"
              ></textarea>
            </Row>
          </Container>
          <Container fluid className="my-2">
            <Row>
              <Col className="ps-0" xs={8}>
                <div className="small-font my-1">Show Website *</div>
                <select
                  name="payment_details"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
                  <option>www.texch.com</option>
                  <option>www.we2call.com</option>
                  <option>www.ravana.com</option>
                  <option>www.brahama.com</option>
                </select>
              </Col>
              <Col className="pe-0">
                <div className="small-font my-1">In Active *</div>
                <select
                  name="active"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                  className="w-100 custom-select small-font input-btn-bg px-2 py-3 all-none rounded all-none"
                >
                  <option value="Select">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={8}>
                <button
                  type="submit"
                  className="add-button  small-font rounded px-4 py-3 mx-2 my-3 w-50 all-none"
                  onClick={handleCreateClick}
                >
                  Create
                </button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
        setStatus={setStatus}
      />
    </div>
  );
}

export default AddCountryPopups;
