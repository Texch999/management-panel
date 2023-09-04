import React from 'react';
import Table from "../table/Table";

function ChipsReportHeader() {
    const MYSTATEMENT_DETAILS = [
        {
          name: "Srinivas",
          role: "EZUGI",
          loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
          totalamount: "10000",
          paidamount: "10000",
          balanceamount: <div className="red-text">0.00</div>,
          saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
          balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
          downlinebal: <div className="red-text">200000</div>,
        },
        {
          name: "Srinivas",
          role: "EZUGI",
          loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
          totalamount: "10000",
          paidamount: "10000",
          balanceamount: <div className="red-text">0.00</div>,
          saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
          balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
          downlinebal: <div className="red-text">200000</div>,
        },
        {
          name: "Srinivas",
          role: "EZUGI",
          loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
          totalamount: "10000",
          paidamount: "10000",
          balanceamount: <div className="red-text">0.00</div>,
          saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
          balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
          downlinebal: <div className="red-text">200000</div>,
        },
        {
          name: "Srinivas",
          role: "EZUGI",
          loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
          totalamount: "10000",
          paidamount: "10000",
          balanceamount: <div className="red-text">0.00</div>,
          saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
          balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
          downlinebal: <div className="red-text">200000</div>,
        },
        {
          name: "Srinivas",
          role: "EZUGI",
          loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
          totalamount: "10000",
          paidamount: "10000",
          balanceamount: <div className="red-text">0.00</div>,
          saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
          balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
          downlinebal: <div className="red-text">200000</div>,
        },
        {
          name: "Srinivas",
          role: "EZUGI",
          loadingchips: <div className="fa-fileinvo-doll-icon">500000</div>,
          totalamount: "10000",
          paidamount: "10000",
          balanceamount: <div className="red-text">0.00</div>,
          saleschips: <div className="fa-fileinvo-doll-icon">400000</div>,
          balancechips: <div className="fa-fileinvo-doll-icon">100000</div>,
          downlinebal: <div className="red-text">200000</div>,
        },
      ];
    
      const cols = [
        {
          header: "COMPANY NAME",
          field: "nameAndRole",
        },
        {
          header: "LOADING CHIPS",
          field: "loadingchips",
        },
    
        {
          header: "TOTAL AMOUNT",
          field: "totalamount",
        },
    
        {
          header: "PAID AMOUNT",
          field: "paidamount",
        },
        {
          header: "BALANCE AMOUNT",
          field: "balanceamount",
        },
        {
          header: "SALES CHIPS",
          field: "saleschips",
        },
        {
          header: "BALANCE CHIPS",
          field: "balancechips",
        },
        {
          header: "DOWNLINE BAL CHIPS",
          field: "downlinebal",
        },
      ];
    
      const modifiedMystatementDetails = MYSTATEMENT_DETAILS.map((item) => ({
        ...item,
        nameAndRole: (
          <div>
            {item?.name} <br /> <span className="role-color">{item?.role}</span>{" "}
          </div>
        ),
      }));
  return (
    <div>
        <div className="sidebar-bg rounded mt-1">
        <div className="d-flex justify-content-between align-items-center px-4">
          <div className="d-flex justify-content-between align-items-center w-20">
            <span className="th-color small-font">Owner reports</span>
            <span className="active text-white small-font p-2">
              Chips Report
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between w-40">
            <span className="small-font th-color">My Statement</span>
            <div className="accounts-box small-font p-2">Packages</div>
            <div className="accounts-box small-font p-2">Sports/Casino</div>
            <div className=" d-flex m-1">
              <select
                className="form-select-option w-100 rounded p-2 px-4 m-1 small-font"
                aria-label="Default select example"
              >
                <option selected>All</option>
                <option value="1">T Exch</option>
                <option value="1">We2Call</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Table columns={cols} data={modifiedMystatementDetails} />
        </div>
      </div>
    </div>
  )
}

export default ChipsReportHeader