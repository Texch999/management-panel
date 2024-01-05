import React, { useState, useEffect } from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import Totalaccount from "../home/Totalaccount";
import AddDirectorsPopup from "../Popups/AddDirectorsPopup";
import { GET_ALL_USERS } from "../../config/endpoints";
import { USERS_ACTIVE_INACTIVE } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useNavigate } from "react-router-dom";

function Adddirector() {
  const [getAllDirectors, setAllDirectors] = useState([]);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [filteredDirectors, setFilteredDirectors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [active, setActive] = useState();
  const navigate = useNavigate();
  const [reRender, setReRender] = useState(false);

  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = getAllDirectors.filter((res) =>
      res?.user_name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDirectors(filteredSearchText);
  };

  const cols = [
    {
      header: (
        <div className="d-flex justify-content-center align-items-center ">
          <div className="marginright-10">ROLE</div>
        </div>
      ),
      field: "role",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">USER NAME</div>
        </div>
      ),
      field: "username",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">In USED</div>
        </div>
      ),
      field: "inused",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">WEBSITE</div>
        </div>
      ),
      field: "website1Andwebsite2Andwebsite3",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">BILLING</div>
        </div>
      ),
      field: "billing",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">PROFIT/LOSS</div>
        </div>
      ),
      field: "profitloss",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">STATUS</div>
        </div>
      ),
      field: "status",
      clr: true,
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">ACTION</div>
        </div>
      ),
      field: "icon",
    },
  ];
  const getDirectors = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_USERS, payload)
      .then((res) => {
        setAllDirectors(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };

  const handleBlockUnBlock = async (item, active) => {
    const payload = {
      register_id: item,
      active: !active,
    };
    await call(USERS_ACTIVE_INACTIVE, payload)
      .then((res) => {
        setActive(!active);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDirectors();
  }, [active, reRender]);

  const modifiedAdddirectorDetails = searchText.length
    ? filteredDirectors
        .filter((item) =>
          item?.user_name?.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            role: (
              <div
                className="role-color"
                onClick={() => navigate(`/usertransaction/${item.register_id}`)}
              >
                <span className="role-color">{item?.account_role}</span>{" "}
              </div>
            ),
            username: item?.user_name,
            inused: item?.country_name,
            website1Andwebsite2Andwebsite3: item?.website_name,
            status:
              item?.active === true ? (
                <div className="font-green custom-active-button px-2">
                  Active
                </div>
              ) : (
                <div className="custom-deactive-button px-2">InActive</div>
              ),
            icon: <MdOutlineEdit className="eye-icon-size" />,
          };
        })
    : getAllDirectors?.map((item) => {
        return {
          role: (
            <div
              className="role-color"
              onClick={() => navigate(`/usertransaction/${item.register_id}`)}
            >
              <span className="role-color">{item?.account_role}</span>{" "}
            </div>
          ),
          username: item?.user_name,
          inused: item?.country_name,
          website1Andwebsite2Andwebsite3: item?.website_name,
          status:
            item?.active === true ? (
              <div
                className="font-green custom-active-button px-2"
                onClick={() => {
                  handleBlockUnBlock(item?.register_id, item?.active);
                }}
              >
                Active
              </div>
            ) : (
              <div
                className="custom-deactive-button px-2"
                onClick={() => {
                  handleBlockUnBlock(item?.register_id, item?.active);
                }}
              >
                InActive
              </div>
            ),
          icon: (
            <MdOutlineEdit
              className="eye-icon-size"
              onClick={() => {
                setSelectedDirector(item);
                handleAddDirectorPopup();
              }}
            />
          ),
        };
      });
  const [showAddDirectorPopup, setShowAddDirectorPopup] = useState(false);
  const handleAddDirectorPopup = () => {
    setShowAddDirectorPopup(true);
  };

  return (
    <div className="p-4 w-100">
      <div>
        <Totalaccount />
      </div>

      <div className="sidebar-bg rounded">
        <div className="d-flex row">
          <h6 className="h6 font-grey m-0 px-4 pt-3">
            Add Director/Super Admin
          </h6>
          <div className=" d-flex justify-conten-around">
            <div className="containaer-fluid ps-2 w-20">
              <form className="d-flex" role="search">
                <input
                  className="search-width m-1 mt-3 p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => searchContent(e.target.value)}
                />
              </form>
            </div>
            <div className="row justify-content-md-center mt-2 ms-1 p-1">
              <div
                className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1"
                onClick={() => handleAddDirectorPopup()}
              >
                +Add
              </div>
            </div>
          </div>
        </div>
        <Table columns={cols} data={modifiedAdddirectorDetails} />
      </div>
      <AddDirectorsPopup
        showAddDirectorPopup={showAddDirectorPopup}
        setShowAddDirectorPopup={setShowAddDirectorPopup}
        selectedDirector={selectedDirector}
        heading={`${selectedDirector ? "Update" : "Add"}  Director & SA`}
        firstTextBox="Select Website *"
        firstSelect="Time Zone"
        setStatus={setActive}
        setSelectedDirector={setSelectedDirector}
        setReRender={setReRender}
      />
    </div>
  );
}

export default Adddirector;
