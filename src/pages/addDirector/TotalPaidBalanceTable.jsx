import React from "react";
import { GET_ADMIN_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useState, useEffect } from "react";

function TotalPaidBalanceTable() {
  const register_id = localStorage.getItem("register_id");
  const [adminPackages, setAdminPackages] = useState([]);

  const totalboxes = [
    {
      header: "Total Amount",
      value: adminPackages?.final_package_cost,
    },
    {
      header: "Paid Amount",
      value: adminPackages?.final_package_cost,
    },
    {
      header: "Balance",
      value: "0",
    },
    {
      header: "Send Reminder",
      value: "0",
    },
  ];

  const getAdminPackages = async () => {
    await call(GET_ADMIN_PACKAGES, { register_id })
      .then((res) => {
        setAdminPackages(res?.data?.data?.recent_bulk_summary);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAdminPackages();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="casino-box-bg w-75">
        {totalboxes.map((item, index) => {
          return (
            <div className="p-2 px-4" key={index}>
              <div className="th-color small-font py-1">{item.header}</div>
              <div className="small-font role-color casino-box-field-bg p-2">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TotalPaidBalanceTable;
