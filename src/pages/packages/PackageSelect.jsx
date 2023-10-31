import React, { useState, useEffect } from "react";
import { GET_ALL_WEBSITES, GET_COUNTRY_AND_CURRENCY } from "../../config/endpoints";
import { call } from "../../config/axios";

function PackageSelect() {
  const [selectPackages, setSelectPackages] = useState([]);

  const handelChange = (e)=>{
    setSelectPackages({
      ...selectPackages,
      [e.target.name]:e.target.value
    })
  }

  const [websiteNames, setwebsiteNames] = useState([]);
  const getwebsiteNames = async () => {
    const payload = {
      register_id: "reg-20230710182031623",
    };
    await call(GET_ALL_WEBSITES, payload)
      .then((res) => {
        console.log("response=====>", res);
        setwebsiteNames(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getwebsiteNames();
  }, []);

  console.log("websiteNames", websiteNames);

  const [allCountries, setallCountries] = useState([]);
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
  useEffect(() => {
    getallCountries();
  }, []);
  console.log("allCountries", allCountries);

  return (
    <div className="row mt-3">
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Website</div>
          <select
            name="website_name"
            id="website_name"
            value={selectPackages?.website_name || ""}
            onChange={(e) => handelChange(e)}
            className="w-100 select-bg p-3 rounded medium-font"
          >
            <option value="select">selecte...</option>
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
          <select name="country_name"
                      id="country_name"
                      value={selectPackages?.country_name || ""}
                      onChange={(e) => handelChange(e)}
                      className="w-100 select-bg p-3 rounded medium-font" 
                    >
                      <option value="select">select..</option>
                      <option value="All">All</option>
                      {allCountries.map((obj) => (
                        <option value={obj.country_name} selected>
                          {obj.country_name}
                        </option>
                      ))}
            <option>Select</option>
            <option>India</option>
            <option>SriLanka</option>
          </select>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Edited Package</div>
          <select className="w-100 select-bg p-3 rounded medium-font">
            <option>Select</option>
            <option>Silver</option>
            <option>Standard</option>
          </select>
        </div>
      </div>
      <hr className="hr-line mt-3" />
    </div>
  );
}

export default PackageSelect;
