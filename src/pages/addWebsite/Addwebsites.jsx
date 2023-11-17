import React from "react";
import Table from "../table/Table";
import Totalaccount from "../home/Totalaccount";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import AddWebsitePopup from "../Popups/AddWebsitePopup";
import { useEffect, useState } from "react";
import { GET_ALL_WEBSITES } from "../../config/endpoints";
import { call } from "../../config/axios";
function Addwebsites() {
  const [allWebsites, setAllWebsites] = useState([]);
  const [filteredWebsites, setFilteredWebsites] = useState([]);
  const [status, setStatus] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = allWebsites.filter((res) =>
      res?.web_url?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredWebsites(filteredSearchText);
  };
  const cols = [
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">WEBSITE NAME</div>
        </div>
      ),
      field: "websitename",
    },
    // {
    //   header: (
    //     <div className="d-flex justify-content-center align-items-center">
    //       <div className="marginright-10">IS USED</div>
    //     </div>
    //   ),
    //   field: "isAndusedAndthree",
    // },
  ];
  const getAllWebsites = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        console.log("response====>", res);
        setAllWebsites(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllWebsites();
  }, [status]);

  const modifiedAddwebsiteDetails = searchText.length
    ? filteredWebsites
        .filter((item) =>
          item?.web_url?.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            websitename: <span>{item?.web_url}</span>,
            // isAndusedAndthree: (
            //   <div>
            //     {item?.is_used} <br /> <span>{item?.used}</span> <br />
            //     {item?.three}
            //     {""}
            //   </div>
            // ),
            // userAndfullAndname: (
            //   <div>
            //     {item?.user_name} <br /> <span>{item?.full}</span> <br />
            //     {item?.name}
            //   </div>
            // ),
            // role1Androle2Androle3: (
            //   <div className="role-color">
            //     {item?.account_role} <br /> <span>{item?.role2}</span> <br />
            //     {item?.role3}
            //     {""}
            //   </div>
            // ),
          };
        })
    : allWebsites.map((item) => {
        return {
          websitename: <span>{item?.web_url}</span>,
          isAndusedAndthree: (
            <div>
              {item?.is_used} <br /> <span>{item?.used}</span> <br />
              {item?.three}
              {""}
            </div>
          ),
          userAndfullAndname: (
            <div>
              {item?.user_name} <br /> <span>{item?.full}</span> <br />
              {item?.name}
            </div>
          ),
          role1Androle2Androle3: (
            <div className="role-color">
              {item?.account_role} <br /> <span>{item?.role2}</span> <br />
              {item?.role3}
              {""}
            </div>
          ),
        };
      });
  const [showAddWebPopup, setShowAddWebPopup] = useState(false);
  const handleShowAddWebPopup = () => {
    setShowAddWebPopup(true);
    console.log("click me!!!!");
  };
  return (
    <div className="p-4 w-100">
      <div>
        <Totalaccount />
      </div>

      <div className="sidebar-bg rounded">
        <div className="d-flex row">
          <h6 className="h6 font-grey m-0 px-4 pt-3">Add Website</h6>
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
            <div
              className="row justify-content-md-center mt-2 ms-1 p-1"
              onClick={() => handleShowAddWebPopup()}
            >
              <div className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1">
                +Add Website
              </div>
            </div>
          </div>
        </div>

        <Table columns={cols} data={modifiedAddwebsiteDetails} />
      </div>
      <AddWebsitePopup
        showAddWebPopup={showAddWebPopup}
        setShowAddWebPopup={setShowAddWebPopup}
        setStatus={setStatus}
      />
    </div>
  );
}

export default Addwebsites;
