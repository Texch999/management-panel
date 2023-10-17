import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaLocationDot, FaTrophy } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";
import Table from "../table/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { GET_MATCHES_DATA } from "../../config/endpoints";
import { CREATE_OFFLINE_MATCHES } from "../../config/endpoints";
import { call } from "../../config/axios";

function Creatematch() {
  const [createMatch, setcreateMatch] = useState({});
  const [sportsName, setsportsName] = useState(" ");
  const [Error, setError] = useState("");
  const handleSubmitMatch = async () => {
    if (
      !(
        createMatch.series_name ||
        createMatch.account_role ||
        createMatch.team1 ||
        createMatch.team2 ||
        sportsName ||
        createMatch.client_name ||
        createMatch.match_place ||
        createMatch.stadium ||
        createMatch.gender ||
        createMatch.date ||
        createMatch.time ||
        createMatch.game_object
      )
    ) {
      return setError("Missing Required feilds");
    } else {
      await call(CREATE_OFFLINE_MATCHES, {
        register_id: "reg-20230920132711772",
        series_name: createMatch.series_name,
        account_role: createMatch.account_role,
        team1: createMatch.team1,
        team2: createMatch.team2,
        sport_name: sportsName,
        client_name: createMatch.client_name,
        match_place: createMatch.match_place,
        stadium: createMatch.stadium,
        gender: createMatch.gender === "Male" ? "M" : "F",
        date: createMatch.date,
        time: createMatch.time,
        game_object: createMatch.game_object,
      }).then((res) => {
        console.log("------------>", res);
        setcreateMatch(res?.data);
      });
    }
  };
  useEffect(() => {
    setcreateMatch();
  }, []);

  console.log("......createMatch", createMatch);

  const handelChange = (e) => {
    console.log(e.target.value, e.target.name);
    setcreateMatch({ ...createMatch, [e.target.name]: e.target.value });
  };

  const top_cricket_countries = [
    "India",
    "Australia",
    "England",
    "New Zealand",
    "Pakistan",
    "South Africa",
    "Sri Lanka",
    "West Indies",
    "Bangladesh",
    "Zimbabwe",
  ];
  const sportsDropdowns = [
    {
      headName: "Sports Name",
      keyValue: "sports_name",
      options: <option value="cricket">Cricket</option>,
    },
    {
      headName: "Team1",
      keyValue: "team1",
      options: top_cricket_countries.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      }),
    },
    {
      headName: "Team2",
      keyValue: "team2",
      options: top_cricket_countries.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      }),
    },
  ];

  // const matchType =
  //   createMatch?.match_type === "10"
  //     ? [1, 3, 5, 8]
  //     : createMatch?.match_type === "20"
  //     ? [1, 3, 5, 8, 12, 15, 18]
  //     : createMatch?.match_type === "odi"
  //     ? [1, 3, 5, 8, 15, 20, 25]
  //     : createMatch?.match_type === "test"
  //     ? [50, 60]
  //     : "";

  const MatchTypeDropdown = [
    {
      heading: "1st Inn",
      cspan: "col",
      // overs: matchType,
    },
    {
      heading: "2nd Inn",
      cspan: "col",
      //overs: matchType,
    },
  ];

  const cols = [
    {
      header: "SERIES NAME",
      field: "seriesname",
    },
    {
      header: "TEAM",
      field: "team",
    },
    {
      header: "SPORTS NAME",
      field: "sportsname",
    },
    {
      header: "LINK LIVE SCOREBOARD",
      field: "livescoreboard",
    },
    {
      header: "MATCH PLACE",
      field: "matchplace",
    },
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    {
      header: "",
      field: "icon",
    },
  ];

  const [getMatches, setgetMatches] = useState([]);
  const getAllMatches = async () => {
    const payload = {
      register_id: "reg-20230920132711772",
      account_role: "admin",
    };
    await call(GET_MATCHES_DATA, payload)
      .then((res) => {
        console.log("..............res", res);
        setgetMatches(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllMatches();
  }, []);

  //console.log(".....getMatches", getMatches);

  const modifiedCreatematchDetails = getMatches.liveMatches?.map((item) => ({
    ...item,
    team: (
      <div className="role-color">
        <span className="role-color">{item?.match_name}</span>{" "}
      </div>
    ),
    dateAndTime: (
      <div>
        {item?.date} <br /> <span>{item?.time}</span>{" "}
      </div>
    ),
    seriesname: item?.series_name,
    sportsname: item?.sport_name,
    matchplace: item?.match_place,
    icon: <AiOutlineEdit className="eye-icon-size" />,
  }));

  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey p-2">CREATE MATCH</h6>
      <div className="sidebar-bg rounded">
        <div className="row gutter-1rem p-2">
          <div className="col">
            <div className="th-color small-font">Series Name</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter"
                className="w-90 th-color small-font p-1"
                name="series_name"
                id="series_name"
                value={createMatch?.series_name || ""}
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
          {sportsDropdowns.map((item, index) => {
            return (
              <div key={index} className="col">
                <div className="th-color small-font">{item.headName}</div>
                <select
                  className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
                  name={item?.keyValue}
                  value={createMatch?.item?.keyValue || ""}
                  onChange={(e) => handelChange(e)}
                >
                  {item.options}
                </select>
              </div>
            );
          })}

          <div className="col">
            <div className="th-color small-font">Match place</div>
            <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
              <input
                placeholder="Enter"
                className="w-90 th-color small-font p-1"
                name="match_place"
                value={createMatch?.match_place || ""}
                onChange={(e) => handelChange(e)}
              />
              <FaLocationDot className="bluecolor-text medium-font" />
            </div>
          </div>
        </div>
        <div className="row gutter-1rem mt-3 p-2">
          <div className="col">
            <div className="th-color small-font">Stadium</div>
            <div className="sport-management-input d-flex p-1 th-color small-font">
              <input
                placeholder="Enter"
                className="w-90 th-color small-font p-1"
                name="stadium"
                id="stadium"
                value={createMatch?.stadium || ""}
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
          <div className="col">
            <div className="th-color small-font">Gender</div>
            <div className="sport-management-input d-flex p-1 th-color small-font p-1">
              <select
                className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
                name="gender"
                id="gender"
                value={createMatch?.gender || ""}
                onChange={(e) => handelChange(e)}
              >
                <option value="Male">Male</option>
                <option value="Female">FeMale</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="th-color small-font">Date</div>
            <div className="sport-management-input d-flex p-1 th-color small-font">
              <input
                className="w-100 m-auto th-color small-font p-1"
                type="date"
                name="date"
                value={createMatch?.date || ""}
                onChange={(e) => handelChange(e)}
              ></input>
              <MdDateRange className="bluecolor-text medium-font" />
            </div>
          </div>
          <div className="col">
            <div className="th-color small-font">Time</div>
            <div className="sport-management-input d-flex p-1 th-color small-font">
              <input
                className="w-100 m-auto th-color small-font p-1"
                name="time"
                type="time"
                value={createMatch?.time || ""}
                onChange={(e) => handelChange(e)}
              ></input>
              <BiTimeFive className="bluecolor-text medium-font" />
            </div>
          </div>
          <div className="col"></div>
        </div>
        <div className="row gutter-1rem mt-3 p-2 th-color small-font">
          <div className="col">
            <div className="th-color small-font">Match Type</div>
            <select
              className="sport-management-input d-flex p-1 th-color small-font w-100 sport-management-select"
              name="match_type"
              onChange={(e) => handelChange(e)}
            >
              <option value="10">T10</option>
              <option value="20">T20</option>
              <option value="odi">ODI</option>
              <option value="test">TEST</option>
            </select>
          </div>
          {MatchTypeDropdown.map((item, index) => {
            return (
              <div className={item.cspan}>
                <div className="th-color small-font">{item.heading}</div>
                <div className="sport-management-input d-flex justify-content-between p-1 th-color small-font">
                  <input
                    className="w-90 th-color small-font "
                    placeholder="Enter"
                    value={createMatch?.match_type ? item.overs : ""}
                  ></input>
                </div>
              </div>
            );
          })}
          <div className="col d-flex align-items-end th-color small-font">
            {Error && <div className="danger">{Error}</div>}
            <div
              className="sport-management-input w-100 th-color small-font d-flex justify-content-center align-items-center bg-yellow"
              onClick={() => handleSubmitMatch()}
            >
              Submit
            </div>
          </div>
          <div className="col"></div>
        </div>
        <hr className="hr-color" />
        <div className=" medium-font font-weight-bold px-2 p-2 pt-0 mt-0 th-color">
          Ur Creating Matches
        </div>

        <Table columns={cols} data={modifiedCreatematchDetails} />
      </div>
    </div>
  );
}

export default Creatematch;
