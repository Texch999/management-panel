// import React, { useEffect, useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
// import { FaLocationDot, FaTrophy } from "react-icons/fa6";
// import { MdStadium } from "react-icons/md";
// import Table from "../table/Table";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdDateRange } from "react-icons/md";
// import { BiTimeFive } from "react-icons/bi";
// import moment from "moment";
// import { MdOutlineEdit } from "react-icons/md";
// import { GET_MATCHES_DATA, GET_ALL_WEBSITES } from "../../config/endpoints";
// import { CREATE_OFFLINE_MATCHES } from "../../config/endpoints";
// import { call } from "../../config/axios";

// function Creatematch(props){
// const {selectedMatch,showMatchOpen,setShowMatchOpen} =props
//   const [createMatch, setcreateMatch] = useState({});
//   const [Error, setError] = useState(false);
//   const handleSubmitMatch = async () => {
//     if (
//       !createMatch.series_name ||
//       !createMatch.sports_name ||
//       !createMatch.team1 ||
//       !createMatch.team2 ||
//       !createMatch.match_place ||
//       !createMatch.stadium ||
//       !createMatch.date ||
//       !createMatch.time ||
//       !createMatch.match_type
//     ) {
//       return setError("Missing Required feilds");
//     } else {
//       console.log("createMatch", createMatch);
//       await call(CREATE_OFFLINE_MATCHES, {
//         register_id: "company",
//         series_name: createMatch.series_name,
//         account_role: "company",
//         team1: createMatch.team1,
//         team2: createMatch.team2,
//         sport_name: createMatch.sports_name,
//         client_name: createMatch.client_name,
//         match_place: createMatch.match_place,
//         stadium: createMatch.stadium,
//         gender: createMatch.gender === "Female" ? "F" : "M",
//         date: createMatch.date,
//         time: createMatch.time,
//         game_object: {
//           first_innings_fancy_overs: getOvers(createMatch?.match_type, "first"),
//           second_innings_fancy_overs: getOvers(
//             createMatch?.match_type,
//             "second"
//           ),
//           match_type: createMatch?.match_type,
//         },
//       }).then((res) => {
//         console.log("------------>", res.data);
//       });
//     }
//   };
//   useEffect(() => {
//     setcreateMatch();
//   }, []);

//   const handelChange = (e) => {
//     setcreateMatch({ ...createMatch, [e.target.name]: e.target.value });
//   };

//   const top_cricket_countries = [
//     {
//       headName: "Team1",
//       name: "team1",
//     },
//     {
//       headName: "Team2",
//       name: "team2",
//     },
//   ];

//   const sportsDropdowns = [
//     {
//       headName: "Sports Name",
//       keyValue: "sports_name",
//       options: <option value="cricket">Cricket</option>,
//     },
//   ];

//   const matchType = [
//     { name: "T10", first: [1, 4, 5], second: [2, 3] },
//     { name: "T20", first: [1, 4, 5], second: [2, 3] },
//     { name: "ODI", first: [1, 4, 5, 6, 9], second: [2] },
//     { name: "TEST", first: [], second: [] },
//   ];

//   const getOvers = (match_type, innings) => {
//     const results = matchType
//       ? matchType?.filter((i) => i.name === match_type)[0]
//       : "";
//     if (innings === "first") {
//       return results?.first;
//     } else {
//       return results?.second;
//     }
//   };

//   const MatchTypeDropdown = [
//     {
//       heading: "1st Inn",
//       cspan: "col",
//       name: "first_fancy",
//       overs: getOvers(createMatch?.match_type, "first"),
//     },
//     {
//       heading: "2nd Inn",
//       cspan: "col",
//       name: "second_fancy",
//       overs: getOvers(createMatch?.match_type, "second"),
//     },
//   ];

// //   const cols = [
// //     {
// //       header: "SERIES NAME",
// //       field: "seriesname",
// //     },
// //     {
// //       header: "TEAM",
// //       field: "team",
// //     },
// //     {
// //       header: "SPORTS NAME",
// //       field: "sportsname",
// //     },
// //     {
// //       header: "LINK LIVE SCOREBOARD",
// //       field: "livescoreboard",
// //     },
// //     {
// //       header: "MATCH PLACE",
// //       field: "matchplace",
// //     },
// //     {
// //       header: "DATE & TIME",
// //       field: "dateAndTime",
// //     },
// //     {
// //       header: "",
// //       field: "icon",
// //     },
// //   ];

//   //const [getMatches, setgetMatches] = useState([]);
// //   const [liveMatches, setLiveMatches] = useState([]);
// //   const [upcomingMatches, setUpcommingMatches] = useState([]);
// //   const [todayMatches, setTodayMatches] = useState([]);
// //   const getAllMatches = async () => {
// //     const payload = {
// //       register_id: "company",
// //       account_role: "company",
// //     };
// //     await call(GET_MATCHES_DATA, payload)
// //       .then((res) => {
// //         // setgetMatches(res?.data?.data);
// //         setLiveMatches(res?.data?.data?.liveMatches);
// //         setUpcommingMatches(res?.data?.data?.upCommingMatches);
// //         setTodayMatches(res?.data?.data?.todaysMatches);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   const allMatches = [...liveMatches, ...upcomingMatches, ...todayMatches];

// //   useEffect(() => {
// //     getAllMatches();
// //   }, []);

//   const [websiteNames, setwebsiteNames] = useState([]);
//   const getwebsiteNames = async () => {
//     const payload = {
//       register_id: "company",
//     };
//     await call(GET_ALL_WEBSITES, payload)
//       .then((res) => {
//         setwebsiteNames(res?.data?.data);
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     getwebsiteNames();
//   }, []);

// //   const modifiedCreatematchDetails = allMatches?.map((item) => ({
// //     team: (
// //       <div className="role-color">
// //         <span className="role-color">{item?.match_name}</span>{" "}
// //       </div>
// //     ),
// //     dateAndTime: (
// //       <div>
// //         {item?.date}<br /> <span>{item?.time}</span>{" "}
// //       </div>
// //     ),
// //     seriesname: item?.series_name,
// //     sportsname: item?.sport_name,
// //     matchplace: item?.match_place,
// //     icon: <AiOutlineEdit className="eye-icon-size" />,
// //   }));

//   return (
//     <div className="p-4 w-100">
//       <h6 className="h6 font-grey p-2">Edit MATCH</h6>
//       <div className="sidebar-bg rounded">
//         <div className="row gutter-1rem p-2">
//           <div className="col">
//             <div className="th-color small-font">Series Name</div>
//             <div className="sport-management-input d-flex ">
//               <input
//                 placeholder="Enter"
//                 className="w-90 th-color small-font p-1"
//                 name="series_name"
//                 id="series_name"
//                 value={createMatch?.series_name || ""}
//                 onChange={(e) => handelChange(e)}
//               />
//             </div>
//           </div>
//           {sportsDropdowns.map((item, index) => {
//             return (
//               <div key={index} className="col">
//                 <div className="th-color small-font">{item.headName}</div>
//                 <select
//                   className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
//                   name={item?.keyValue}
//                   onChange={(e) => handelChange(e)}
//                 >
//                   <option>Select</option>
//                   {item.options}
//                 </select>
//               </div>
//             );
//           })}
//           {top_cricket_countries.map((item, index) => {
//             return (
//               <div key={index} className="col">
//                 <div className="th-color small-font">{item.headName}</div>
//                 <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
//                   <input
//                     className="w-90 th-color small-font p-1"
//                     onChange={(e) => handelChange(e)}
//                     placeholder="Enter Team"
//                     name={item?.name}
//                     value={createMatch?.[item?.name] || ""}
//                   ></input>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="col">
//             <div className="th-color small-font">Match place</div>
//             <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
//               <input
//                 placeholder="Enter"
//                 className="w-90 th-color small-font p-1"
//                 name="match_place"
//                 value={createMatch?.match_place || ""}
//                 onChange={(e) => handelChange(e)}
//               />
//               <FaLocationDot className="bluecolor-text medium-font" />
//             </div>
//           </div>
//         </div>
//         <div className="row gutter-1rem mt-3 p-2">
//           <div className="col">
//             <div className="th-color small-font">Stadium</div>
//             <div className="sport-management-input d-flex p-1 th-color small-font">
//               <input
//                 placeholder="Enter"
//                 className="w-90 th-color small-font p-1"
//                 name="stadium"
//                 id="stadium"
//                 value={createMatch?.stadium || ""}
//                 onChange={(e) => handelChange(e)}
//               />
//             </div>
//           </div>
//           <div className="col">
//             <div className="th-color small-font">Gender</div>
//             <div className="sport-management-input d-flex p-1 th-color small-font p-1">
//               <select
//                 className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
//                 name="gender"
//                 id="gender"
//                 value={createMatch?.gender || ""}
//                 onChange={(e) => handelChange(e)}
//               >
//                 <option value="Male">Male</option>
//                 <option value="Female">FeMale</option>
//               </select>
//             </div>
//           </div>
//           <div className="col">
//             <div className="th-color small-font">Date</div>
//             <div className="sport-management-input d-flex p-1 th-color small-font">
//               <input
//                 className="w-100 m-auto th-color small-font p-1"
//                 type="date"
//                 name="date"
//                 value={createMatch?.date || ""}
//                 onChange={(e) => handelChange(e)}
//               ></input>
//               <MdDateRange className="bluecolor-text medium-font" />
//             </div>
//           </div>
//           <div className="col">
//             <div className="th-color small-font">Time</div>
//             <div className="sport-management-input d-flex p-1 th-color small-font">
//               <input
//                 className="w-100 m-auto th-color small-font p-1"
//                 name="time"
//                 type="time"
//                 value={createMatch?.time || ""}
//                 onChange={(e) => handelChange(e)}
//               ></input>
//               <BiTimeFive className="bluecolor-text medium-font" />
//             </div>
//           </div>
//           <div className="col">
//             <div className="th-color small-font">Websites</div>
//             <div className="sport-management-input d-flex p-1 th-color small-font p-1">
//               <select
//                 className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
//                 name="website_name"
//                 id="website_name"
//                 value={createMatch?.website_name || ""}
//                 onChange={(e) => handelChange(e)}
//               >
//                 <option>select</option>
//                 <option value="All">All</option>
//                 {websiteNames.map((obj) => (
//                   <option value={obj.web_url} selected>
//                     {obj.web_url}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className="row gutter-1rem mt-3 p-2 th-color small-font">
//           <div className="col">
//             <div className="th-color small-font">Match Type</div>
//             <select
//               className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
//               name="match_type"
//               onChange={(e) => handelChange(e)}
//             >
//               <option value="select">select</option>
//               <option value="T10">T10</option>
//               <option value="T20">T20</option>
//               <option value="ODI">ODI</option>
//               <option value="TEST">TEST</option>
//             </select>
//           </div>
//           {MatchTypeDropdown?.map((value, index) => {
//             return (
//               <div className={value.cspan}>
//                 <div className="th-color small-font">{value.heading}</div>
//                 <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
//                   <input
//                     className="w-90 th-color small-font "
//                     placeholder="Enter"
//                     name={value.name}
//                     value={value.overs}
//                     disabled
//                     onChange={(e) => handelChange(e)}
//                   ></input>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="col d-flex align-items-end th-color small-font">
//             {Error && <div className="danger">{Error}</div>}
//             <div
//               className="sport-management-input w-100 th-color small-font d-flex justify-content-center align-items-center bg-yellow"
//               onClick={() => handleSubmitMatch()}
//             >
//               Submit
//             </div>
//           </div>
//           <div className="col"></div>
//         </div>
//         {/* <hr className="hr-color" />
//         <div className=" medium-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
//           Ur Creating Matches
//         </div>

//         <Table columns={cols} data={modifiedCreatematchDetails} /> */}
//       </div>
//     </div>
//   );
// }

// export default Creatematch;
import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./styles.css";
import MatchSubmitPopup from "../../matchpopups/MatchSubmitPopup";
import { GET_ALL_WEBSITES, UPDATE_OFFER } from "../../config/endpoints";
import { call } from "../../config/axios";
import { FaRegCalendarAlt } from "react-icons/fa";
function OfferMessagePopup(props) {
    const {selectedMatch,showMatchOpen,setShowMatchOpen} =props
  const [createMatch, setCreateMatch] = useState({});
  const handleMatchClose = () => {
    setShowMatchOpen(false);
  };

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setCreateMatch({ ...createMatch, [e.target.name]: e.target.value });
  };

  const top_cricket_countries = [
    {
      headName: "Team1",
      name: "team1",
    },
    {
      headName: "Team2",
      name: "team2",
    },
  ];

  const [addMatchPopup, setAddMatchPopup] = useState(false);

  const handleUpdateMatch = async () => {
    let p_id = selectedMatch.p_id;
    let offer_id = selectedMatch.offer_id;
    const payload = {
      p_id,
      offer_id,
      ...createMatch,
    };

    await call(UPDATE_OFFER, payload)
      .then((res) => {
        if (res.status.data === 200) {
          setTimeout(() => {
            setAddMatchPopup(false);
            setShowMatchOpen(false);
          }, 2000);
        }
        if (res.data.error) {
          console.log("API Error...", res.data.message);
        } else {
          setAddMatchPopup(false);
          handleMatchClose();
          setCreateMatch({});
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (selectedMatch) {
        setCreateMatch({});
    }
  }, [selectedMatch]);

  const [websiteNames, setwebsiteNames] = useState([]);

  const getwebsiteNames = async () => {
    setCreateMatch(selectedMatch);
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        setwebsiteNames(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getwebsiteNames();
  }, [selectedMatch]);

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
                  placeholder="Type Here ............"
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                ></input>
              </Col>
              <Col>
                <div>
                  <div className="small-font my-2 clr-grey">Team</div>
                  <div className="w-100 custom-select small-font input-btn-bg px-2 py-2 all-none rounded all-none d-flex flex-row align-items-center justify-content-between">
                    <input
                      name="name"
                      type="text"
                      className="login-input all-none w-50"
                      value={createMatch?.name || ""}
                      onChange={(e) => handleChange(e)}
                    ></input>
                  </div>
                </div>
              </Col>
            </Row>
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
                    value={createMatch?.website_name || ""}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="select">select</option>
                    <option value="All">All</option>
                    {websiteNames.map((obj) => (
                      <option value={obj.web_url} selected>
                        {obj.web_url}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col>
                <div className="small-font my-2 clr-grey">Sports Name</div>
                <input
                  type="text"
                  name="country_name"
                  value={createMatch?.country_name || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter type"
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                ></input>
              </Col>
            </Row>
            <Col>   
              <div className="small-font my-2 clr-grey">Match Place</div>
              <textarea
                type="text"
                name="match_place"
                value={createMatch?.match_place || ""}
                onChange={(e) => handleChange(e)}
                placeholder="Type Here ............"
                className="w-100 custom-select small-font input-btn-bg rounded all-none p-2 h-85"
              ></textarea>
            </Col>
            <Row>
              <Col>
                <div className="small-font my-2 clr-grey">In-Active *</div>
                <select className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded">
                  Select
                  <option value="Select">Select</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </Col>
              <Col>
                <div className="small-font my-2 clr-grey">Date and Time *</div>
                <input
                  className="w-100 small-font login-inputs input-btn-bg px-2 py-3 all-none rounded"
                  name="create_at"
                  id="create_at"
                  value={createMatch?.create_at || ""}
                  onChange={(e) => handleChange(e)}
                  placeholder="UTC Time Stamp"
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
        header={"Upgraded  Successfully"}
        state={addMatchPopup}
        setState={setAddMatchPopup}
      />
    </div>
  );
}

export default OfferMessagePopup;
