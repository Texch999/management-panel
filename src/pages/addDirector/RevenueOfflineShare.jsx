import React, { useEffect, useState } from "react";
import { BsFiles } from "react-icons/bs";
import { TbWorldUp } from "react-icons/tb";
import RevenueOfflineTable from "./RevenueOfflineTable";
import TotalPaidBalanceTable from "./TotalPaidBalanceTable";
import { UPDATE_PACKAGES } from "../../config/endpoints";
import RevenueOfflineHourlyTable from "./RevenueOfflineHourlyTable";
import { call } from "../../config/axios";
import {
  GET_ALL_USERS,
  WEBSITES_ACTIVE_INACTIVE,
} from "../../config/endpoints";
function RevenueOfflineShare(props) {
  const { adminPayload } = props;
  const [allDirectors, setAllDirectors] = useState([]);
  const [active, setActive] = useState("");
  const getDirectors = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_USERS, payload)
      .then((res) => {
        setAllDirectors(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };

  const handleBlockUnBlock = async (item, active) => {
    console.log(item, !active, "===>item,===>active");
    const payload = {
      register_id: item,
      website_status: !active,
    };
    await call(WEBSITES_ACTIVE_INACTIVE, payload)
      .then((res) => {
        setActive(!active);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDirectors();
  }, [active]);
  const filteredData = allDirectors?.filter(
    (item) => item.register_id === adminPayload.id
  );
  console.log(filteredData, "===>filteredData");

  return (
    <div className="sidebar-bg rounded w-100">
      <div className="d-flex justify-content-between align-items-center p-3">
        <div className="small-font">
          <TbWorldUp className="th-color" />
          <span className="th-color px-1">T Exchange |</span>
          <span className="role-color px-1">www.texch.com</span>
          <BsFiles className="th-color" />
        </div>
        <div className=" d-flex align-items-center justify-content-center th-color small-font">
          <div className="p-1">Inactive</div>
          <div
            className="form-check form-switch d-flex align-items-center justify-content-evenly"
            onClick={() => {
              handleBlockUnBlock(
                filteredData[0]?.register_id,
                filteredData[0]?.website_status
              );
            }}
          >
            <input
              className="form-check-input button-input-clr"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div className="p-1">Active</div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="p-3">
        <div className="th-color w-fit-content rounded-pill empty-bg-br small-font p-1 px-2">
          Revenue Sharing
        </div>
      </div>
      <div className="row p-3">
        <div className="col-2">
          <div className="th-color small-font py-1">Package Discount</div>
          <div className="sport-management-input d-flex p-1 th-color small-font">
            <input className="w-90 th-color small-font p-1" />
          </div>
        </div>
        {/* <div className="col-2">
        <div className="th-color small-font py-1">Topup Hours Discount</div>
        <div className="sport-management-input d-flex p-1 th-color small-font">
          <input className="w-90 th-color small-font p-1" />
        </div>
      </div> */}
        <div className="col-2 d-flex align-items-end th-color small-font py-1">
          <div className="sport-management-input w-100 th-color small-font d-flex justify-content-center align-items-center bg-yellow">
            Updated
          </div>
        </div>
      </div>
      <hr className="hr-line mt-2" />
      <div className="row w-100 py-3">
        <div className="col-8 d-flex flex-column">
          <>
            <RevenueOfflineTable />
            <RevenueOfflineHourlyTable />
          </>
        </div>
        <div className="col-4">
          <TotalPaidBalanceTable />
        </div>
      </div>
    </div>
  );
}

export default RevenueOfflineShare;