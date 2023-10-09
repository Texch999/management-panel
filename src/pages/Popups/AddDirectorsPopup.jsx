import React, { useState, useEffect } from "react";

import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { ACCOUNT_REGISTERATION,UPDATE_PROFILE} from "../../config/endpoints";
import { call } from "../../config/axios";
function AddDirectorsPopup(props) {
  const {
    showAddDirectorPopup,
    setShowAddDirectorPopup,
    heading,
    firstTextBox,
    firstSelect,
    selectedDirector,
    setStatus,
    setSelectedDirector
  } = props;

  console.log("selectedDirector====>", selectedDirector);

  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [lastName, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("Select");
  const [timezone, setTimeZone] = useState("");

  const handleAddDirectorClose = () => {
    setShowAddDirectorPopup(false);
    setFirstName("");
    setFirstName("");
    setWebsite("Select");
    setTimeZone("Select");
    setRole("Select");
  };
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  useEffect(() => {
    if (selectedDirector) {
      setUserId(selectedDirector.user_name || "");
      setFirstName(selectedDirector.first_name || "");
      setLastName(selectedDirector.last_name || "");
      setPhoneNumber(selectedDirector.mobile_no || "");
      setWebsite(selectedDirector.website || "Select");
      setTimeZone(selectedDirector.timezone || "Select");
      setRole(selectedDirector.account_role || "Select");
    }
  }, [selectedDirector]);
  const handleCreateOrUpdateDirector = async () => {
    try {
      const url = selectedDirector ? UPDATE_PROFILE : ACCOUNT_REGISTERATION;
      const requestData = {
        creator_id: "reg-20230913085731533",
        user_name: userId,
        first_name: firstName,
        last_name: lastName,
        mobile_no: phonenumber,
        website_name: website,
        time_zone: timezone,
        account_role:"client"
      };

      if (selectedDirector) {
        requestData.creator_id = selectedDirector.creator_id;
        requestData.account_role = selectedDirector.account_role;
      }
      console.log("url====> errwerwerwe",url,requestData);
 
      const res = await call(url, requestData);

      if (res.data.error) {
        console.error("API Error:", res.data.message);
      } else {
        setAddDirectorPopup(false);
        handleAddDirectorPopup();
        setStatus((prev) => !prev);
        setFirstName("");
        setLastName("");
        setWebsite("Select");
        setTimeZone("Select");
        setRole("Select");
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  };
  const [addDirectorsPopup, setAddDirectorPopup] = useState(false);
  const handleAddDirectorPopup = () => {
    setAddDirectorPopup(true);
    setShowAddDirectorPopup(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        show={showAddDirectorPopup}
        onHide={handleAddDirectorClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 mt-4">
            <h5 className="text-center mt-2 mb-4">{heading}</h5>
          </div>
        </Modal.Header>
        <Modal.Body>
        
          <div className="w-100 px-4">
          {/* <Row className="d-flex">
               <div className="small-font my-1">Role *</div>
                <Col className="col-6">
                  <select
                    value={role}
                    name="account_role"
                    onChange={(e) => setRole(e.target.value)}
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    <option selected>Select</option>
                    <option> Director </option>
                    <option> SuperAdmin</option>
                  </select>
                </Col>
          </Row> */}
           <Container fluid className="my-2">
              <Row>
              <Col className="col-6">
                 <div className="small-font my-1">Role *</div>
                  <select
                    value={role}
                    name="account_role"
                    onChange={(e) => setRole(e.target.value)}
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    <option selected>Select</option>
                    <option> Director </option>
                    <option> SuperAdmin</option>
                  </select>
                </Col>
                <Col className="col-6">
                <div className="small-font my-1">Select Country *</div>
                  <select
                    value={role}
                    name="account_role"
                    onChange={(e) => setRole(e.target.value)}
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  > 
                   <option selected>Select </option>
                    <option> Demo </option>
                    <option> Demo </option>
                  </select>
                </Col>
              </Row>
            </Container>
            <div className="d-flex flex-column">
              <div className="small-font mb-1">{firstTextBox}</div>
              <select
                value={website}
                name="website_name"
                onChange={(e) => setWebsite(e.target.value)}
                className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none"
              >
                <option selected>Select</option>
                <option>www.texch.com</option>
                <option>www.we2call.com</option>
                <option>www.ravana.com</option>
                <option>www.brahama.com</option>
              </select>
            </div>
            <div className="d-flex flex-column w-100 mt-2">
              <div className="small-font mb-1 mt-1">User ID *</div>
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Enter UserId"
                  name="user_name"
                  className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                ></input>
              </div>
            </div>
            <Container fluid className="my-2">
              <Row>
                <Col className="ps-0">
                  <div className="small-font my-1">Password *</div>
                  <div className="d-flex justify-content-between flex-row aligin-items-center input-btn-bg w-100 rounded">
                    <input
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                      name="confirm password"
                      placeholder="Enter"
                      className="w-100 custom-select login-inputs small-font input-btn-bg px-2 py-2 all-none rounded all-none"
                    ></input>
                    <button
                      onClick={togglePassword}
                      className="all-none input-btn-bg"
                    >
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">Confirm Password *</div>
                  <div className="d-flex justify-content-between flex-row aligin-items-center input-btn-bg w-100 rounded">
                    <input
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                      name="password"
                      placeholder="Re-enter"
                      className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    ></input>
                    <button
                      onClick={togglePassword}
                      className="all-none input-btn-bg"
                    >
                      {passwordType === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-2">
              <Row>
                <Col className="ps-0">
                  <div className="small-font my-1">First Name *</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="first_name"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">Last Name *</div>
                  <input
                    type="text"
                    placeholder="Enter"
                    name="last_name"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </Col>
              </Row>
            </Container>
            <Container fluid className="my-2">
              <Row>
                <Col className="ps-0">
                  <div className="small-font my-1">Phone *</div>
                  <input
                    type="number"
                    placeholder="Enter"
                    name="mobile_no"
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                    value={phonenumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </Col>
                <Col className="pe-0">
                  <div className="small-font my-1">{firstSelect}</div>
                  <select
                    value={timezone}
                    name="time_zone"
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
                  >
                    <option selected>Select</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                    <option> UTC+5:30 (India)</option>
                  </select>
                </Col>
              </Row>
              
            </Container>
            <div className="d-flex justify-content-center w-100 my-4">
              <button
                className="add-button rounded px-2 py-3 w-50 medium-font"
                // onClick={() => handleAddDirectorPopup()}
                onClick={handleCreateOrUpdateDirector}
              >
                {/* Create */}
                {selectedDirector ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <MatchSubmitPopup
        header={"Successfully Completed"}
        state={addDirectorsPopup}
        setState={setAddDirectorPopup}
      />
    </div>
  );
}

export default AddDirectorsPopup;




// import React, { useState, useEffect } from "react";
// import { Button, Col, Container, Modal, Row } from "react-bootstrap";
// import "./styles.css";
// import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
// import { ACCOUNT_REGISTERATION } from "../../config/endpoints";
// import { call } from "../../config/axios";
// function AddDirectorsPopup(props) {
//   const {
//     showAddDirectorPopup,
//     setShowAddDirectorPopup,
//     heading,
//     firstTextBox,
//     firstSelect,
//     selectedDirector,
//     setStatus
//   } = props;

//   console.log("selectedDirector====>", selectedDirector);

//   const [isProcessing, setIsProcessing] = useState(false);
//   const [err, setErr] = useState("");

//   const [inputData, setInputData] = useState({});
//   const [isVisible, setIsVisible] = useState(false);
//   const [userRole, setUserRole] = useState(false);
//   const [isPackageSelect, setIsPackageSelect] = useState("");
//   const [selectedUserRole, setSelectedUserRole] = useState("");

//   const handleAddDirectorClose = () => {
//     setShowAddDirectorPopup(false);
//     // setFirstName("");
//     // setFirstName("");
//     // setWebsite("Select");
//     // setTimeZone("Select");
//     // setRole("Select");
//   };
//   const [passwordType, setPasswordType] = useState("password");
//   const [passwordInput, setPasswordInput] = useState("");
//   const handlePasswordChange = (evnt) => {
//     setPasswordInput(evnt.target.value);
//   };
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text");
//       return;
//     }
//     setPasswordType("password");
//   };
//   // useEffect(() => {
//   //   if (selectedDirector) {
//   //     setUserId(selectedDirector.user_id || "");
//   //     setFirstName(selectedDirector.first_name || "");
//   //     setLastName(selectedDirector.last_name || "");
//   //     setPhoneNumber(selectedDirector.mobile_no || "");
//   //     setWebsite(selectedDirector.website || "Select");
//   //     setTimeZone(selectedDirector.timezone || "Select");
//   //     setRole(selectedDirector.account_role || "Select");
//   //   }
//   // }, [selectedDirector]);
//   // const handleCreateOrUpdateDirector = async () => {
//   //   try {
//   //     const url = selectedDirector ? "" : ACCOUNT_REGISTERATION;
//   //     const requestData = {
//   //       creator_id: "reg-20230913085731533",
//   //       user_id: userId,
//   //       first_name: firstName,
//   //       last_name: lastName,
//   //       mobile_no: phonenumber,
//   //       website_name: website,
//   //       time_zone: timezone,
//   //       account_role:"client"
//   //     };

//   //     if (selectedDirector) {
//   //       requestData.creator_id = selectedDirector.creator_id;
//   //       requestData.account_role = selectedDirector.account_role;
//   //     }
//   //     console.log("url====>", url);

//   //     const res = await call(url, requestData);

//   //     if (res.data.error) {
//   //       console.error("API Error:", res.data.message);
//   //     } else {
//   //       setAddDirectorPopup(false);
//   //       handleAddDirectorPopup();
//   //       setStatus((prev) => !prev);
//   //       setFirstName("");
//   //       setLastName("");
//   //       setWebsite("Select");
//   //       setTimeZone("Select");
//   //       setRole("Select");
//   //     }
//   //   } catch (err) {
//   //     console.error("API Error:", err);
//   //   }
//   // };

//   const admininputs = [
//     { size: "12", name: "first_name", placeholder: "Name" },
//     { size: "6", name: "user_name", placeholder: "User Id" },
//   ];
//   const passwordCretion = [
//     { name: "password", placeholder: "Password" },
//     { name: "confirm_password", placeholder: "Confirm Password" },
//   ];
//   const share = [
//     { name: "share", placeholder: "Share" },
//     { name: "my_share", placeholder: "My Share" },
//   ];
//   const sharePercentage = [
//     { percent: "%", share: "Share" },
//     { percent: "%", share: "Plotform Share" },
//   ];
//   let userRoles = [
//     { label: "Super Admin", value: "superadmin" },
//     { label: "Admin", value: "admin" },
//     { label: "Sub Admin", value: "subadmin" },
//     { label: "Super Master", value: "supermaster" },
//     { label: "Master", value: "master" },
//     { label: "Agent", value: "agent" },
//   ];
//   const [addDirectorsPopup, setAddDirectorPopup] = useState(false);
//   const handleAddDirectorPopup = () => {
//     setAddDirectorPopup(true);
//     setShowAddDirectorPopup(false);
//   };
//   return (
//     <div className="modal fade bd-example-modal-lg container mt-5">
//       <Modal
//         show={showAddDirectorPopup}
//         onHide={handleAddDirectorClose}
//         centered
//         className="match-share-modal payment-modal"
//       >
//         <Modal.Header closeButton>
//           <div className="w-100 mt-4">
//             <h5 className="text-center mt-2 mb-4">{heading}</h5>
//           </div>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="w-100 px-4">
//             <div className="d-flex flex-column">
//               <div className="small-font mb-1">{firstTextBox}</div>
//               <select
//                 value={website}
//                 name="website_name"
//                 onChange={(e) => setWebsite(e.target.value)}
//                 className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none"
//               >
//                 <option selected>Select</option>
//                 <option>www.texch.com</option>
//                 <option>www.we2call.com</option>
//                 <option>www.ravana.com</option>
//                 <option>www.brahama.com</option>
//               </select>
//             </div>
//             <div className="d-flex flex-column w-100 mt-2">
//               <div className="small-font mb-1 mt-1">User ID *</div>
//               <div className="w-100">
//                 <input
//                   type="number"
//                   placeholder="Enter UserId"
//                   name="user_id"
//                   className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                   value={userId}
//                   onChange={(e) => setUserId(e.target.value)}
//                 ></input>
//               </div>
//             </div>
//             <Container fluid className="my-2">
//               <Row>
//                 <Col className="ps-0">
//                   <div className="small-font my-1">Password *</div>
//                   <div className="d-flex justify-content-between flex-row aligin-items-center input-btn-bg w-100 rounded">
//                     <input
//                       type={passwordType}
//                       onChange={handlePasswordChange}
//                       value={passwordInput}
//                       name="confirm password"
//                       placeholder="Enter"
//                       className="w-100 custom-select login-inputs small-font input-btn-bg px-2 py-2 all-none rounded all-none"
//                     ></input>
//                     <button
//                       onClick={togglePassword}
//                       className="all-none input-btn-bg"
//                     >
//                       {passwordType === "password" ? (
//                         <i className="bi bi-eye-slash"></i>
//                       ) : (
//                         <i className="bi bi-eye"></i>
//                       )}
//                     </button>
//                   </div>
//                 </Col>
//                 <Col className="pe-0">
//                   <div className="small-font my-1">Confirm Password *</div>
//                   <div className="d-flex justify-content-between flex-row aligin-items-center input-btn-bg w-100 rounded">
//                     <input
//                       type={passwordType}
//                       onChange={handlePasswordChange}
//                       value={passwordInput}
//                       name="password"
//                       placeholder="Re-enter"
//                       className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                     ></input>
//                     <button
//                       onClick={togglePassword}
//                       className="all-none input-btn-bg"
//                     >
//                       {passwordType === "password" ? (
//                         <i className="bi bi-eye-slash"></i>
//                       ) : (
//                         <i className="bi bi-eye"></i>
//                       )}
//                     </button>
//                   </div>
//                 </Col>
//               </Row>
//             </Container>
//             <Container fluid className="my-2">
//               <Row>
//                 <Col className="ps-0">
//                   <div className="small-font my-1">First Name *</div>
//                   <input
//                     type="text"
//                     placeholder="Enter"
//                     name="first_name"
//                     className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   ></input>
//                 </Col>
//                 <Col className="pe-0">
//                   <div className="small-font my-1">Last Name *</div>
//                   <input
//                     type="text"
//                     placeholder="Enter"
//                     name="last_name"
//                     className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   ></input>
//                 </Col>
//               </Row>
//             </Container>
//             <Container fluid className="my-2">
//               <Row>
//                 <Col className="ps-0">
//                   <div className="small-font my-1">Phone *</div>
//                   <input
//                     type="number"
//                     placeholder="Enter"
//                     name="mobile_no"
//                     className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                     value={phonenumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   ></input>
//                 </Col>
//                 <Col className="pe-0">
//                   <div className="small-font my-1">{firstSelect}</div>
//                   <select
//                     value={timezone}
//                     name="time_zone"
//                     onChange={(e) => setTimeZone(e.target.value)}
//                     className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                   >
//                     <option selected>Select</option>
//                     <option> UTC+5:30 (India)</option>
//                     <option> UTC+5:30 (India)</option>
//                     <option> UTC+5:30 (India)</option>
//                     <option> UTC+5:30 (India)</option>
//                     <option> UTC+5:30 (India)</option>
//                     <option> UTC+5:30 (India)</option>
//                     <option> UTC+5:30 (India)</option>
//                   </select>
//                 </Col>
//               </Row>
//               <Row className="d-flex">
//                 <Col className="ps-0 col-6">
//                   <div className="small-font my-1">Role *</div>
//                   <select
//                     value={role}
//                     name="account_role"
//                     onChange={(e) => setRole(e.target.value)}
//                     className="w-100 custom-select small-font login-inputs input-btn-bg px-2 py-2 all-none rounded all-none"
//                   >
//                     <option selected>Select</option>
//                     <option> Director </option>
//                     <option> SuperAdmin</option>
//                   </select>
//                 </Col>
//               </Row>
//             </Container>
//             <div className="d-flex justify-content-center w-100 my-4">
//               <button
//                 className="add-button rounded px-2 py-3 w-50 medium-font"
//                 // onClick={() => handleAddDirectorPopup()}
//                 onClick={handleCreateOrUpdateDirector}
//               >
//                 {/* Create */}
//                 {selectedDirector ? "Update" : "Create"}
//               </button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//       <MatchSubmitPopup
//         header={"Successfully Completed"}
//         state={addDirectorsPopup}
//         setState={setAddDirectorPopup}
//       />
//     </div>
//   );
// }

// export default AddDirectorsPopup;
