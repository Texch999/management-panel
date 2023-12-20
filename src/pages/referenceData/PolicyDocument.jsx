import React, { useState, useEffect } from "react";
import Table from "../table/Table";
import AddPolicyPopup from "../Popups/AddPolicyPopup";
import {
  GET_ALL_POLICY_DOCUMENTS,
  POLICY_DOCUMENT_ACTIVE_INACTIVE,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { MdOutlineEdit } from "react-icons/md";
function PolicyDocument() {
  const [addPolicyOpen, setAddPolicyOpen] = useState(false);
  const [allPolicyDocuments, setAllPolicyDocuments] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState();
  const [active, setActive] = useState(false);

  const handlePolicyOpen = () => {
    setAddPolicyOpen(true);
  };
  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = allPolicyDocuments?.filter((res) =>
      res?.country_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuestions(filteredSearchText);
  };
  
  const getallPolicyDocuments = async () => {
    const payload = {
      register_id: "company",
      website_name: "www.we2call.com",
    };
    await call(GET_ALL_POLICY_DOCUMENTS, payload)
      .then((res) => {
        setAllPolicyDocuments(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const cols = [
    {
      header: "COUNTRY NAME",
      field: "countryname",
    },

    {
      header: "SHOW WEBSITES",
      field: "showwebsites",
    },

    {
      header: "STATUS",
      field: "status",
      clr: true,
    },
    {
      header: "Action",
      field: "icon",
    },
  ];

  const handleBlockUnBlock = async (item) => {
    const payload = {
      policy_id: item,
      active: !active,
    };
    await call(POLICY_DOCUMENT_ACTIVE_INACTIVE, payload)
      .then((res) => {
        if (res.status === 200) {
          setActive((prev) => !prev);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getallPolicyDocuments();
  }, [active]);

  const modifiedPolicydocumentDetails = searchText.length
    ? filteredQuestions
        .filter((item) =>
          item?.country_name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            countryname: <div className="role-color">{item?.country_name}</div>,
            showwebsites: item?.website_name,
            // status:
            //   item?.active === true ? (
            //     <div className="font-green custom-active-button px-2">
            //       Active
            //     </div>
            //   ) : (
            //     <div className="custom-deactive-button px-2">InActive</div>
            //   ),
            status: (
              <div
                className={
                  item?.active === true
                    ? "font-green custom-active-button px-2"
                    : "custom-deactive-button px-2"
                }
                onClick={() => handleBlockUnBlock(item?.policy_id)}
              >
                {item?.active ? "Active" : "InActive"}
              </div>
            ),
            icon: <MdOutlineEdit className="eye-icon-size" />,
          };
        })
    : allPolicyDocuments?.map((item) => {
        return {
          countryname: <div className="role-color">{item?.country_name}</div>,
          showwebsites: item?.website_name,
          status: (
            <div
              className={
                item?.active
                  ? "font-green custom-active-button px-2"
                  : "custom-deactive-button px-2"
              }
              onClick={() => handleBlockUnBlock(item?.policy_id)}
            >
              {item?.active ? "Active" : "InActive"}
            </div>
          ),
          icon: (
            <MdOutlineEdit
              className="eye-icon-size"
              onClick={() => {
                console.log("testetestste");
                setSelectedPolicy(item);
                handlePolicyOpen();
              }}
            />
          ),
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
                  onChange={(e) => searchContent(e.target.value)}
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
        Heading={`${selectedPolicy ? "Update Policy" : "Add Policy"}`}
        setStatus={setStatus}
        selectedPolicy={selectedPolicy}
        setSelectedPolicy={setSelectedPolicy}
      />
    </div>
  );
}

export default PolicyDocument;
