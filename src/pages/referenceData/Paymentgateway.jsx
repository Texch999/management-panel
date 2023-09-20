import React from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { GET_ALL_PAYMENTS } from "../../config/endpoints";
import { call } from "../../config/axios";

function Paymentgateway() {
  const [allPayments, setAllPayments] = useState([]);
  // const PAYMENTGATEWAY_DETAILS = [
  //   {
  //     gatewayname: "Google Pay",
  //     lastupdate: "18/08/2023",
  //     country: "India ",
  //     currency: "INR ₹",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     gatewayname: "Paytm",
  //     lastupdate: "18/08/2023",
  //     country: "India ",
  //     currency: "INR ₹",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     gatewayname: "QR Code",
  //     lastupdate: "18/08/2023",
  //     country: "India ",
  //     currency: "INR ₹",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     gatewayname: "Phone Pay",
  //     lastupdate: "18/08/2023",
  //     country: "India ",
  //     currency: "INR ₹",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  //   {
  //     gatewayname: "Google Pay",
  //     lastupdate: "18/08/2023",
  //     country: "India ",
  //     currency: "INR ₹",
  //     status: "Active",
  //     icon: <MdOutlineEdit className="eye-icon-size" />,
  //   },
  // ];

  const cols = [
    {
      header: "GATEWAY NAME",
      field: "gatewayname",
    },
    {
      header: "LASTUP DATE",
      field: "lastupdate",
    },
    {
      header: "COUNTRY",
      field: "country",
    },
    {
      header: "CURRENCY",
      field: "currency",
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
const getPaymentWay = async () => {
  const payload = {
    register_id: "reg-20230710182031623",
  };
    await call(GET_ALL_PAYMENTS,payload)
      .then((res) => {
        console.log("API Response:", res);
       setAllPayments(res?.data?.data);
      console.log("All Payments===>", allPayments);

      })
      .catch((err) => console.log(err));
  };
  console.log("AllPayment Gatways===>", allPayments);
  useEffect(() => {
    getPaymentWay();
  },[]);

  const modifiedPaymentgatewayDetails = allPayments.map((item) => ({
    ...item,
    gatewayname: (
      <div className="role-color">
        <span className="role-color">{item?.pg_name}</span>{" "}
      </div>
    ),
    country: <span>{item?.country_name}</span>,
    lastupdate: <span>{item?.update_at}</span>,
    currency: <span>{item?.currency_name}</span>,
    status: (
      <span>
        {item?.is_active === 1 ? <div>active</div> : <div>inactive</div>}
      </span>
    ),
  }));

  return (
    <div className="p-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="h6 font-grey px-2 p-2 m-1">
          Payment Gateway
        </h6>
        <div className=" d-flex justify-content-end align-items-center">
          <div className="containaer-fluid w-30 m-2 d-flex align-items-center ">
            <form className="d-flex align-items-center" role="search">
              <input
                className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="row d-flex justify-content-between m-2 align-items-center">
            <div className="active text-white medium-font align-items-center p-2 px-4">
              +Add New
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            All Currencies
          </div>
          <div className=" d-flex justify-conten-between m-1 px-2">
            <select
              className="form-select-option w-100 rounded p-2 px-3 m-1 mx-2 small-font"
              aria-label="Default select example"
            >
              <option selected>India</option>
              <option value="1">USA</option>
              <option value="2">Garmany</option>
              <option value="3">UK</option>
            </select>
          </div>
        </div>

        <Table columns={cols} data={modifiedPaymentgatewayDetails} />
      </div>
    </div>
  );
}

export default Paymentgateway;
