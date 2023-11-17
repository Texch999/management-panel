import React from "react";
import { useState, useEffect } from "react";
import {
  GET_COUNTRY_AND_CURRENCY,
  GET_ALL_WEBSITES,
} from "../../config/endpoints";
import { call } from "../../config/axios";
function PackageSelect(props) {
  const { setSelectedPackage, packageInputs, setPackageInputs } = props;
  const [websiteNames, setwebsiteNames] = useState([]);
  const [allCountries, setallCountries] = useState([]);

  const handlePackageInput = (e) => {
    setPackageInputs({ ...packageInputs, [e.target.name]: e.target.value });
  };

  const getwebsiteNames = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
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

  const getallCountries = async () => {
    const payload = {
      register_id: "reg-20230909114353315",
    };
    await call(GET_COUNTRY_AND_CURRENCY, payload)
      .then((res) => {
        console.log("res", res);
        setallCountries(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const handleFilter = (e) => {
    console.log("e=======>",e)
    setSelectedPackage(e.target.value);
  };
  useEffect(() => {
    getallCountries();
  }, []);

  return (
    <div className="row mt-3">
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Website</div>
          <select
            name="website_name"
            value={packageInputs?.website_name || ""}
            onChange={(e) => handlePackageInput(e)}
            className="w-100 select-bg p-3 rounded medium-font"
          >
            <option value="">Select</option>
            <option value="All">All</option>
            {websiteNames.map((obj) => (
              <option value={obj.web_url}>{obj.web_url}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Country</div>
          <select
            name="country_name"
            value={packageInputs?.country_name || ""}
            onChange={(e) => handlePackageInput(e)}
            className="w-100 select-bg p-3 rounded medium-font"
          >
            <option value="">Select</option>
            <option value="All">All</option>
            {allCountries.map((obj) => (
              <option value={obj.country_name}>{obj.country_name}</option>
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
            // name="package_name"
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
