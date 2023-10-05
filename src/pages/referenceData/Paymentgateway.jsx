import React, { useState } from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect} from "react";
import { GET_ALL_PAYMENTS } from "../../config/endpoints";
import { call } from "../../config/axios";
import AddCountryPopups from "../Popups/AddCountryPopups";

function Paymentgateway() {
  const [allPayments, setAllPayments] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState();
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

  const [addCountryOpen, setAddCountryOpen] = useState(false);
  const handleAddCountryPopup = () => {
    setAddCountryOpen(true);
  };

  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = allPayments.filter((res) =>
      res?.pg_upi?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredQuestions(filteredSearchText);
  };

  const getPaymentWay = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_PAYMENTS, payload)
      .then((res) => {
        console.log("API Response:", res);
        // const responseArray=res?.data?.data
        // setAllPayments(responseArray.length>0?responseArray.filter((item)=>item.pg_upi!==""):[] )
        setAllPayments(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPaymentWay();
  }, [status]);

  // const modifiedPaymentgatewayDetails = allPayments.map((item) => ({
  //   ...item,
  //   gatewayname: (
  //     <div className="role-color">
  //       <span className="role-color">{item?.pg_name}</span>{" "}
  //     </div>
  //   ),
  //   country: <span>{item?.country_name}</span>,
  //   lastupdate: <span>{item?.update_at}</span>,
  //   currency: <span>{item?.currency_name}</span>,
  //   status: (
  //     <span>
  //       {item?.is_active === 1 ? <div>active</div> : <div>inactive</div>}
  //     </span>
  //   ),
  //   icon: <MdOutlineEdit className="eye-icon-size" />,
  // }));
  const modifiedPaymentgatewayDetails = searchText.length
    ? filteredQuestions
        .filter((item) =>
          item?.pg_upi.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            gatewayname: <div className="role-color">{item?.pg_upi}</div>,
            country: item?.country_name,
            currency: item?.currency_name,
            lastupdate: item?.update_at,
            status:
              item?.is_active === 1 ? (
                <div className="font-green custom-active-button px-2">Active</div>
              ) : (
                <div className="custom-deactive-butto px-2">InActive</div>
              ),
            icon: <MdOutlineEdit className="eye-icon-size" />
          };
        })
    : allPayments.map((item) => {
        return {
          gatewayname: <div className="role-color">{item?.pg_upi}</div>,
          country: item?.country_name,
          currency: item?.currency_name,
          lastupdate: item?.update_at,
          status:
            item?.is_active === 1 ? (
              <div className="font-green custom-active-button px-2">Active</div>
            ) : (
              <div className="custom-deactive-button px-2">InActive</div>
            ),
          icon: (
            <MdOutlineEdit
              className="eye-icon-size"
              onClick={() => {
                setSelectedPayment(item);
                handleAddCountryPopup();
              }}
            />
          ),
        };
      });
  return (
    <div className="p-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="h6 font-grey px-2 p-2 m-1">Payment Gateway</h6>
        <div className=" d-flex justify-content-end align-items-center">
          <div className="containaer-fluid w-30 m-2 d-flex align-items-center ">
            <form className="d-flex align-items-center" role="search">
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
          <div className="row d-flex justify-content-between m-2 align-items-center">
            <div
              className="active text-white medium-font align-items-center p-2 px-4"
              onClick={() => handleAddCountryPopup()}
            >
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
      <AddCountryPopups
        addCountryOpen={addCountryOpen}
        Heading={`${selectedPayment ? "Update" : "Add"} Payment Gateways`}
        setAddCountryOpen={setAddCountryOpen}
        setStatus={setStatus}
        selectedPayment={selectedPayment}
        setData={setSelectedPayment}
        getData={getPaymentWay}
        componentType="PAYMENT"
      />
    </div>
  );
}

export default Paymentgateway;
