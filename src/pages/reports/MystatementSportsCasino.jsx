import React from "react";
import Table from "../table/Table";

function MystatementSportsCasino() {
  const MYSTATEMENTPACKAGE_DETAILS = [
    {
      name: "Srinivas",
      role: "Owner",
      chipsSports: <div className="fa-fileinvo-doll-icon">1000000</div>,
      valueofchipsRent: "250000",
      receivedmount: "200000",
      balanceamount: <div className="role-color">50000</div>,
      chipsCasino: <div className="fa-fileinvo-doll-icon">1000000</div>,
      valueofchips: "250000",
      receivedmount2: "200000",
      balanceamount2: <div className="role-color">50000</div>,
    },
  ];

  const cols = [
    {
      header: "USER NAME/ROLE",
      field: "nameAndRole",
    },
    {
      header: "CHIPS (D)SPORTS",
      field: "chipsSports",
    },
    {
      header: "VALUE OF CHIPS/RENT",
      field: "valueofchipsRent",
    },
    {
      header: "RECEIVED AMOUNT",
      field: "receivedmount",
    },
    {
      header: "BALANCE AMOUNT",
      field: "balanceamount",
    },
    {
      header: "CHIPS (D)CASINO",
      field: "chipsCasino",
    },
    {
      header: "VALUE OF CHIPS",
      field: "valueofchips",
    },
    {
      header: "RECEIVED AMOUNT",
      field: "receivedmount2",
    },
    {
      header: "BALANCE AMOUNT",
      field: "balanceamount2",
    },
  ];

  const modifiedMystatementpackageDetails = MYSTATEMENTPACKAGE_DETAILS.map(
    (item) => ({
      ...item,
      nameAndRole: (
        <div>
          {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
    })
  );
  return (
    <div>
    
        <div>
          <Table columns={cols} data={modifiedMystatementpackageDetails} />
        </div>
        <div className="th-color w-100 small-font p-3 d-flex justify-content-between">
          <div className="w-25">
            <div className="row">
              <div className="col">Total Sale Pkg Hours</div>
              <div className="col">500000</div>
            </div>
            <div className="row">
              <div className="col">Total Received Amount</div>
              <div className="col">400000</div>
            </div>
            <div className="row">
              <div className="col">Balance Amount</div>
              <div className="col">100000</div>
            </div>
            <div className="row">
              <div className="col">Total P/L</div>
              <div className="col fa-fileinvo-doll-icon">400000</div>
            </div>
          </div>
          <div className="w-25 d-flex align-items-end justify-content-end">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between">
                  <div className="w-50">Total Downline Sports Chips Balance</div>
                  <div className="red-text">400000</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="w-50">Total Downline Sports Chips Balance</div>
                  <div className="red-text">400000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default MystatementSportsCasino;
