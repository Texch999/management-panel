import React, { useEffect, useState } from "react";
import TourTable from "../tourBanking/TourTable";
import { MdOutlineEdit } from "react-icons/md";
import AddTourPaymentGateway from "../tourBanking/AddTourPaymentGateway";
import { call } from "../../config/axios";
import { GET_TOUR_PAYMENT_GATEWAY } from "../../config/endpoints";

function Paymentgateway() {
  const [addCountryOpen, setAddCountryOpen] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const [renderingStatus, setRenderingStatus] = useState([])
  const [clickedCountry, setClickedCountry] = useState("All")
 
  console.log(clickedCountry,'......drop')
  
  const rendering = (inputData) => {
    setRenderingStatus(inputData);
  };
  // console.log(renderingStatus,'.......rendering')
  const getPaymentGateway = async () => {
    const payload = {};
    await call(GET_TOUR_PAYMENT_GATEWAY, payload)
      .then((res) => setPaymentGateway(res?.data?.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPaymentGateway();
  }, [renderingStatus]);

 

  const countryFilteredGateways = paymentGateway && paymentGateway.length>0 && paymentGateway.filter((item)=>{
    return item.country === clickedCountry
  })
  const finalGateways = clickedCountry === 'All' ? paymentGateway : countryFilteredGateways

  const PAYMENTGATEWAY_DETAILS =
    finalGateways && finalGateways.length > 0
      ? finalGateways.map((item) => {
          return {
            gatewayname: (
              <div style={{ color: "#ffba26" }}>{item.paymentGateway}</div>
            ),
            lastupdate: item.createdDate,
            country: item.country,
            currency: item.currency,
            status: (
              <div
                className={
                  item.status === "active"
                    ? "custom-active-button"
                    : "custom-deactive-button"
                }
              >
                {item.status}
              </div>
            ),
            icon: (
              <MdOutlineEdit
                className="eye-icon-size"
                onClick={() => {
                  setInputData(item);
                  setAddCountryOpen(true);
                  setisUpdate(true);
                }}
              />
            ),
          };
        })
      : [];

  const cols = [
    {
      header: "GATEWAY NAME",
      field: "gatewayname",
    },
    {
      header: "LAST UPDATE",
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

  const handleAddNewPopup = () => {
    setInputData([]);
    setAddCountryOpen(true);
    setisUpdate(false)
  };
  const dropDownCountries = [...new Set(paymentGateway.map((item)=>{
    return item.country}
    ))]
//   console.log(dropDownCountries,'.......drop')

  return (
    <div className="p-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="h6 font-grey px-2 p-2 m-1">Tours Payment Gateway</h6>
        <div className=" d-flex justify-content-end align-items-center">
          {/* <div className="containaer-fluid w-30 m-2 d-flex align-items-center ">
            <form className="d-flex align-items-center" role="search">
              <input
                className="search-width p-2 text-white w-100 sidebar-bg borderr rounded medium-font"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div> */}
          <div className="row d-flex justify-content-between m-2 align-items-center">
            <div
              className="active text-white medium-font align-items-center p-2 px-4"
              onClick={() => handleAddNewPopup()}
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
              name="clickedCountry"
              // value={clickedCountry || "All"}
              onChange={(e)=>setClickedCountry(e.target.value)}
            >
              <option value={'All'} selected>All Countries</option>
              {dropDownCountries.map((item)=>(<option value={item}>{item}</option>))}
            </select>
          </div>
        </div>

        <TourTable columns={cols} data={PAYMENTGATEWAY_DETAILS} />
      </div>
      <AddTourPaymentGateway
        addCountryOpen={addCountryOpen}
        setAddCountryOpen={setAddCountryOpen}
        rendering={rendering}
        inputData={inputData}
        isUpdate={isUpdate}
        setInputData={setInputData}
      />
    </div>
  );
}

export default Paymentgateway;
