import React, { useState, useEffect } from "react";
import { GET_ALL_PAYMENTS, GET_ALL_WEBSITES } from "../../config/endpoints";
import { call } from "../../config/axios";

function PackageSelect(props) {
  const { setSelectedPackage, setPackageInputs, packageInputs } = props;
  const [selectPackages, setSelectPackages] = useState([]);
  const handelChange = (e) => {
    setPackageInputs({
      ...packageInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = (e) => {
    setSelectedPackage(e.target.value);
  };

  const [websiteNames, setwebsiteNames] = useState([]);
  const getwebsiteNames = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        setwebsiteNames(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getwebsiteNames();
  }, []);

  const [allPayments, setAllPayments] = useState([]);
  const getPaymentWay = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_ALL_PAYMENTS, payload)
      .then((res) => {
        console.log("API Response:", res);
        setAllPayments(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPaymentWay();
  }, []);

  return (
    <div className="row mt-3">
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Website</div>
          <select
            name="website_name"
            id="website_name"
            value={packageInputs?.website_name || ""}
            onChange={(e) => handelChange(e)}
            className="w-100 select-bg p-3 rounded medium-font"
          >
            <option value="select">Select</option>
            <option value="All">All</option>
            {websiteNames.map((obj) => (
              <option value={obj.web_url} selected>
                {obj.web_url}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Country</div>
          <select
            name="country_name"
            id="country_name"
            value={packageInputs?.country_name || ""}
            onChange={(e) => handelChange(e)}
            className="w-100 select-bg p-3 rounded medium-font"
          >
            <option value="select">select..</option>
            <option value="All">All</option>
            {allPayments?.map((obj) => (
              <option value={obj.country_name} selected>
                {obj.country_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Edited Package</div>
          <select
            name="package_name"
            className="w-100 select-bg p-3 rounded medium-font"
            onChange={(e) => handleFilter(e)}
          >
            <option value="all">All</option>
            <option value="1">Standard</option>
            <option value="2">Silver</option>
            <option value="3">Gold</option>
            <option value="4">Diamond</option>
            <option value="5">Vip</option>
          </select>
        </div>
      </div>
      <hr className="hr-line mt-3" />
    </div>
  );
}

export default PackageSelect;
