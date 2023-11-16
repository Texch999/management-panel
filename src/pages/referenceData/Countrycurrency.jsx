import React, { useState, useEffect } from "react";
import Table from "../table/Table";
import { MdOutlineEdit } from "react-icons/md";
import AddCountryPopups from "../Popups/AddCountryPopups";
import { GET_COUNTRY_AND_CURRENCY } from "../../config/endpoints";
import { call } from "../../config/axios";

function Countrycurrency() {
  const [getallCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState(false);

  const searchContent = (value) => {
    setSearchText(value);
    const filteredSearchText = getallCountries.filter((res) =>
      res?.country_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCountries(filteredSearchText);
  };
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
      field: "icon",
      render: () => <p>Test</p>,
    },
  ];
  const getAllCountries = async () => {
    const payload = {
      register_id: "company",
    };
    await call(GET_COUNTRY_AND_CURRENCY, payload)
      .then((res) => {
        setAllCountries(res?.data?.data);
      })

      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllCountries();
  }, [status]);

  const modifiedCountrycurrencyDetails = searchText.length
    ? filteredCountries
        .filter((item) =>
          item?.country_name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map((item) => {
          return {
            countryname: <div className="role-color">{item?.country_name}</div>,
            currency: item?.currency_name,
            availableaccounts: item?.payment_details,
            showwebsites: item?.website,
            status:
              item?.active === "Yes" ? (
                <div className="font-green custom-active-button px-2">
                  Active
                </div>
              ) : (
                <div className="custom-deactive-button px-2">InActive</div>
              ),
            icon: <MdOutlineEdit className="eye-icon-size" />,
          };
        })
    : getallCountries.map((item) => {
        return {
          countryname: <div className="role-color">{item?.country_name}</div>,
          currency: item?.currency_name,
          availableaccounts: item?.payment_details,
          showwebsites: item?.website,
          status:
            item?.active === "Yes" ? (
              <div className="font-green custom-active-button px-2">Active</div>
            ) : (
              <div className="custom-deactive-button px-2">InActive</div>
            ),
          icon: (
            <MdOutlineEdit
              className="eye-icon-size"
              onClick={() => {
                setSelectedCountry(item);
                handleAddCountryPopup();
              }}
            />
          ),
        };
      });
  const [addCountryOpen, setAddCountryOpen] = useState(false);
  const handleAddCountryPopup = () => {
    setAddCountryOpen(true);
  };
  return (
    <div className="p-4 w-100 mt-8vh">
      <h6 className="h6 font-grey">Country Currency</h6>
      <div className="sidebar-bg rounded">
        <div className="d-flex align-items-center justify-content-between">
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            All Country/Currency
          </div>
          <div className=" d-flex align-items-center justify-content-end">
            <div className="containaer-fluid px-2 w-30">
              <form className="d-flex" role="search">
                <input
                  className="search-width p-2 text-white w-100 sidebar-bg borderr rounded small-font"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => searchContent(e.target.value)}
                />
              </form>
            </div>
            <div className="row justify-content-md-center m-2 p-1">
              <div
                className="active text-white col-md-auto small-font justify-content-between p-2 px-4 m-1"
                onClick={() => handleAddCountryPopup()}
              >
                +Add New
              </div>
            </div>
          </div>
        </div>

        <Table columns={cols} data={modifiedCountrycurrencyDetails} />
      </div>
      <AddCountryPopups
        addCountryOpen={addCountryOpen}
        Heading={`${
          selectedCountry ? "Update" : "Add"
        }  Country, Currency, and Payment Gateways`}
        // Heading={`${selectedCountry ? "Update Country, Currency, and Payment Gateways" : "Add Country, Currency, and Payment Gateways"} `}
        setAddCountryOpen={setAddCountryOpen}
        setStatus={setStatus}
        selectedCountry={selectedCountry}
        setData={setSelectedCountry}
        getData={getAllCountries}
        componentType="CURRENCY"
        // setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
}

export default Countrycurrency;
