import React, { useState, useEffect } from "react";
import Table from "../table/Table";
import AddPolicyPopup from "../Popups/AddPolicyPopup";
import { GET_POLICY_DOCUMENT } from "../../config/endpoints";
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
  const handlePolicyOpen = () => {
    setAddPolicyOpen(true);
  };

  const [getPolicy, setgetpolicy] = useState([]);
  const getPolicyDocument = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_POLICY_DOCUMENT, payload)
      .then((res) => {
        console.log("response==========>", res);
        setgetpolicy(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const modifiedPolicydocumentDetails = getPolicy.map((item) => ({
    ...item,
    countryname: (
      <div className="role-color">
        <span className="role-color">{item?.field}</span>{" "}
      </div>
    ),
  }));

  useEffect(() => {
    getPolicyDocument();
  }, []);

  console.log("getPolicy", getPolicy);

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
      />
    </div>
  );
}

export default PolicyDocument;
