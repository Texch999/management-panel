import React, { useState, useEffect } from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import Totalaccount from "../home/Totalaccount";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";
import { LuFileClock } from "react-icons/lu";
import { TbFileText } from "react-icons/tb";
import AddDirectorsPopup from "../Popups/AddDirectorsPopup";
import { GET_ADMIN_ACCOUNTS } from "../../config/endpoints";
import { call } from "../../config/axios";

function Adddirector() {
  const [getAllDirectors, setAllDirectors] = useState([]);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [filteredDirectors, setFilteredDirectors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);

  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = getAllDirectors.filter((res) =>
      res?.creator_role?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDirectors(filteredSearchText);
  };

  const cols = [
    {
      header: (
        <div className="d-flex justify-content-center align-items-center ">
          <div className="marginright-10">ROLE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "role",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">USER NAME</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "username",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">In USED</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "inused",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">WEBSITE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "website1Andwebsite2Andwebsite3",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">BILLING</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "billing",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">PROFIT/LOSS</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "profitloss",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">STATUS</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "status",
      clr: true,
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">ACTION</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "icon",
    },
  ];
  const getDirectors = async () => {
    const payload = {
      creator_id: "company",
    };
    await call(GET_ADMIN_ACCOUNTS, payload)
      .then((res) => {
        setAllDirectors(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDirectors();
  }, [status]);
  console.log("getAllDirectors=====>", getAllDirectors);

  const modifiedAdddirectorDetails = searchText.length
    ? filteredDirectors
        .filter((item) =>
          item?.creator_role.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            role: (
              <div className="role-color">
                <span className="role-color">{item?.creator_role}</span>{" "}
              </div>
            ),
            username: item?.account_role,
            inused: item?.country_name,
            website1Andwebsite2Andwebsite3: (
              <div>
                {item?.website_name} <br />
                <span>{item?.website_name}</span> <br />
                {item?.website_name}
                {""}
              </div>
            ),
            status : "Active", 
            // status:
            //   item?.is_active === "active" ? (
            //     <div className="font-green custom-active-button px-2">
            //       Active
            //     </div>
            //   ) : (
            //     <div className="custom-deactive-button px-2">InActive</div>
            //   ),
            icon: <MdOutlineEdit className="eye-icon-size" />,
          };
        })
    : getAllDirectors.map((item) => {
        return {
          role: (
            <div className="role-color">
              <span className="role-color">{item?.creator_role}</span>{" "}
            </div>
          ),
          username: item?.account_role,
          inused: item?.country_name,
          website1Andwebsite2Andwebsite3: (
            <div>
              {item?.website_name} <br /> <span>{item?.website_name}</span> <br />
              {item?.website_name}
              {""}
            </div>
          ),
          status : "Active",
          // status:
          //   item?.is_active === "active" ? (
          //     <div className="font-green custom-active-button px-2">Active</div>
          //   ) : (
          //     <div className="custom-deactive-button px-2">InActive</div>
          //   ),
          // icon: <AiOutlineSetting className="eye-icon-size" />,
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
        // heading="Add Director & SA"
        heading={`${selectedDirector ? "Update" : "Add"}  Director & SA`}
        firstTextBox="Select Website *"
        firstSelect="Time Zone"
        setStatus={setStatus}
        setSelectedDirector={setSelectedDirector}
      />
    </div>
  );
}

export default Adddirector;
