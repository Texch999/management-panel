import React from "react";
import Table from "../table/Table";

function Countrycurrency() {
  const COUNTRYCURRENCY_DETAILS = [
    {
      countryname: "India ",
      currency: "INR ₹",
      availableaccounts: "Bank Details, Wallet, QR Code",
      showwebsites: "www.texch.com www.we2call.com www.ravanna.com",
      status: "Active",
      action: "",
    },
    {
      countryname: "USA ",
      currency: "USD $",
      availableaccounts: "Bank Details, Wallet, QR Code",
      showwebsites: "www.texch.com www.we2call.com www.ravanna.com",
      status: "In-active",
      action: "",
    },
    {
      countryname: "India ",
      currency: "INR ₹",
      availableaccounts: "Bank Details, Wallet, QR Code",
      showwebsites: "www.texch.com www.we2call.com www.ravanna.com",
      status: "In-active",
      action: "",
    },
    {
      countryname: "Gemany ",
      currency: "EUR €",
      availableaccounts: "Bank Details, Wallet, QR Code",
      showwebsites: "www.texch.com www.we2call.com www.ravanna.com",
      status: "In-active",
      action: "",
    },
    {
      countryname: "India ",
      currency: "INR ₹",
      availableaccounts: "Bank Details, Wallet, QR Code",
      showwebsites: "www.texch.com www.we2call.com www.ravanna.com",
      status: "Aactive",
      action: "",
    },
  ];

  const cols = [
    {
      header: "COUNTRY NAME",
      field: "countryname",
    },
    {
      header: "CURRENCY",
      field: "currency",
    },
    {
      header: "AVAILABLE ACCOUNTS",
      field: "availableaccounts",
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
      field: "status_icon",
    },
  ];

  const modifiedCountrycurrencyDetails = COUNTRYCURRENCY_DETAILS.map(
    (item) => ({
      ...item,
      countryname: (
        <div className="role-color">
          <span className="role-color">{item?.countryname}</span>{" "}
        </div>
      ),
    })
  );

  return (
    <div className="p-4 w-100">
      <span className="th-color medium-font">Country Currency</span>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" small-font font-weight-bold px-2 p-2 m-1 th-color">
            All Country/Currency
          </div>
          <div className=" d-flex justify-conten-between">
            <div className="containaer-fluid px-2 w-20">
              <form className="d-flex" role="search">
                <input
                  className="search-width m-1 mt-3 p-2 text-white w-100 sidebar-bg borderr rounded small-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="row justify-content-md-center m-2 p-1">
              <div className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1">
                +Add New
              </div>
            </div>
          </div>
        </div>

        <Table columns={cols} data={modifiedCountrycurrencyDetails} />
      </div>
    </div>
  );
}

export default Countrycurrency;
