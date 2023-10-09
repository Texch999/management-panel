import React, { useState,useEffect } from "react";
import Table from "../table/Table";
import AddPolicyPopup from "../Popups/AddPolicyPopup";
import { GET_ALL_POLICY_DOCUMENTS } from "../../config/endpoints";
import { call } from "../../config/axios";

function PolicyDocument() {
  // const POLICYDOCUMENT_DETAILS = [
  //   {
  //     countryname: "India ",
  //     showwebsites: "www.texch.com",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     countryname: "USA ",
  //     showwebsites: "www.we2call",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     countryname: "India ",
  //     showwebsites: "www.ravanna.com",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     countryname: "Gemany ",
  //     showwebsites: "we2call.com",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     countryname: "India ",
  //     showwebsites: "www.texch.com",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  // ];
  const cols = [
    {
      header: "COUNTRY NAME",
      field: "country_name",
    },

    {
      header: "SHOW WEBSITES",
      field: "website_name",
    },

    {
      header: "STATUS",
      field: "is_active",
      clr: true,
    },
    {
      header: "Action",
      field: "icon",
    },
  ];

  const [addPolicyOpen, setAddPolicyOpen] = useState(false);
  const [allPolicyDocuments, setAllPolicyDocuments] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchText,setSearchText]=useState("");
  const [status, setStatus] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState();
  
  const handlePolicyOpen = () => {
    setAddPolicyOpen(true);
  };
const searchContent =(value) =>{
    setSearchText(value)
    const filteredSearchText= allPolicyDocuments.filter((res)=>
      res?.country_name.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilteredQuestions(filteredSearchText)
}
  const getallPolicyDocuments = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_POLICY_DOCUMENTS,payload)
      .then((res) => {
        console.log("response====>", res);
        setAllPolicyDocuments(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    getallPolicyDocuments();
  },[status]);
  const modifiedPolicydocumentDetails = searchText.length
  ? filteredQuestions
      .filter((item) =>
        item?.country_name.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((item) => {
        return {
          countryname: <div className="role-color">{item?.country_name}</div>,
          showwebsites:item?.website_name,
          status:
            item?.is_active === 1 ? (
              <div className="font-green">Active</div>
            ) : (
              <div className="custom-deactive-button px-2">InActive</div>
            ),
          icon: <MdOutlineEdit className="eye-icon-size" />,
        };
      })
  : allPolicyDocuments
      .map((item) => {
        return {
          countryname: <div className="role-color">{item?.country_name}</div>,
          showwebsites:item?.website_name,
          status:
            item?.is_active === 1 ? (
              <div className="font-green">Active</div>
            ) : (
              <div className="custom-deactive-button px-2">InActive</div>
            ),
          icon: <MdOutlineEdit className="eye-icon-size"  onClick={() => {
            console.log("testetestste");
            setSelectedPolicy(item);
            handlePolicyOpen();
          }}/>,
        };
      });
  return (
    <div className="p-4 w-100">
      <h6 className="h6 font-grey">Policy Document</h6>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            All Policy Document
          </div>
          <div className=" d-flex justify-content-end align-items-center">
            <div className="containaer-fluid px-2 w-30">
              <form className="d-flex" role="search">
                <input
                  className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchText} 
                  onChange={(e)=> searchContent(e.target.value)}
                />
              </form>
            </div>
            <div className="row justify-content-md-center m-2 p-1">
              <div
                className="active text-white col-md-auto medium-font justify-content-between p-2 px-4 m-1"
                onClick={() => handlePolicyOpen()}
              >
                +Add New
              </div>
            </div>
          </div>
        </div>
        <div>
          <Table columns={cols} data={modifiedPolicydocumentDetails} />
        </div>
      </div>
      <AddPolicyPopup
        addPolicyOpen={addPolicyOpen}
        setAddPolicyOpen={setAddPolicyOpen}
        setStatus={setStatus}
        selectedPolicy={selectedPolicy}
        setSelectedPolicy={setSelectedPolicy}
      />
    </div>
  );
}

export default PolicyDocument;
