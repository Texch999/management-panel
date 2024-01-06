import React from "react";
import TotalPaidBalanceTable from "./TotalPaidBalanceTable";
import { Images } from "../../images";
import { GET_ADMIN_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect, useState } from "react";

function RevenueOfflineTable() {
  const register_id = localStorage.getItem("register_id");
  const [adminPackages, setAdminPackages] = useState([]);

  const standered = adminPackages?.filter(
    (item) => item?.package_name === "standard"
  );
  const standeredPackage = standered[0];

  const silver = adminPackages?.filter(
    (item) => item?.package_name === "silver"
  );
  const silverPackage = silver[0];

  const gold = adminPackages?.filter((item) => item?.package_name === "gold");
  const goldPackage = gold[0];

  const diamond = adminPackages?.filter(
    (item) => item?.package_name === "diamond"
  );
  const diamondPackage = diamond[0];

  const vip = adminPackages?.filter((item) => item?.package_name === "vip");
  const vipPackage = vip[0];

  const purchaseboxes = [
    {
      header: (
        <div className="d-flex align-items-center justify-content-between">
          <div>{standeredPackage?.package_name}</div>
          <img src={Images.Standard} className="diamond-img-size" />
        </div>
      ),
      cssClass: "bal-bg-box box-border-radius p-3",
      buytext: "Buy",
      buyvalue: standeredPackage?.no_of_packages || 0,
      saletext: "Sale",
      salevalue: standeredPackage?.used_packages || 0,
      baltext: "Bal",
      balvalue:
        standeredPackage?.no_of_packages ||
        0 - standeredPackage?.used_packages ||
        0,
    },
    {
      header: (
        <div className="d-flex align-items-center justify-content-between">
          <div>{silverPackage?.package_name}</div>
          <img src={Images.Silver} className="diamond-img-size" />
        </div>
      ),
      cssClass: "total-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: silverPackage?.no_of_packages || 0,
      saletext: "Sale",
      salevalue: silverPackage?.used_packages || 0,
      baltext: "Bal",
      balvalue:
        silverPackage?.no_of_packages || 0 - silverPackage?.used_packages || 0,
    },
    {
      header: (
        <div className="d-flex align-items-center justify-content-between">
          <div>{goldPackage?.package_name}</div>
          <img src={Images.Gold} className="diamond-img-size" />
        </div>
      ),
      cssClass: "paid-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: goldPackage?.no_of_packages || 0,
      saletext: "Sale",
      salevalue: goldPackage?.used_packages || 0,
      baltext: "Bal",
      balvalue:
        goldPackage?.no_of_packages || 0 - goldPackage?.used_packages || 0,
    },
    {
      header: (
        <div className="d-flex align-items-center justify-content-between">
          <div>{diamondPackage?.package_name}</div>
          <img src={Images.Diamond} className="diamond-img-size" />
        </div>
      ),
      cssClass: "diamond-box-bg box-border-radius p-3",
      buytext: "Buy",
      buyvalue: diamondPackage?.no_of_packages || 0,
      saletext: "Sale",
      salevalue: diamondPackage?.used_packages || 0,
      baltext: "Bal",
      balvalue:
        diamondPackage?.no_of_packages ||
        0 - diamondPackage?.used_packages ||
        0,
    },
    {
      header: (
        <div className="d-flex align-items-center justify-content-between">
          <div>{vipPackage?.package_name}</div>
          <img src={Images.Vip} className="diamond-img-size" />
        </div>
      ),
      cssClass: "balance-cls box-border-radius p-3",
      buytext: "Buy",
      buyvalue: vipPackage?.no_of_packages || 0,
      saletext: "Sale",
      salevalue: vipPackage?.used_packages || 0,
      baltext: "Bal",
      balvalue:
        vipPackage?.no_of_packages || 0 - vipPackage?.used_packages || 0,
    },
  ];

  // const totalboxes = [
  //   {
  //     header: "Total Amount",
  //     value: "10000",
  //   },
  //   {
  //     header: "Paid Amount",
  //     value: "10000",
  //   },
  //   {
  //     header: "Balance",
  //     value: "10000",
  //   },
  //   {
  //     header: "Send Reminder",
  //     value: "10000",
  //   },
  // ];

  const getAdminPackages = async () => {
    await call(GET_ADMIN_PACKAGES, { register_id })
      .then((res) => {
        setAdminPackages(res?.data?.data?.bulk_subscriptions);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAdminPackages();
  }, []);

  return (
    <div>
      <div className="px-3 mt-2">
        <div className="th-color w-fit-content rounded-pill sports-casino-bg-br small-font p-1 px-2">
          Total Purchase & Payment
        </div>
      </div>
      <div className="px-3 mt-1">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <div className="row">
              {purchaseboxes?.map((item, index) => {
                return (
                  <div className=" col" key={index}>
                    <div className="th-color small-font py-1">
                      {item.header}
                    </div>
                    <div
                      className={`${item.cssClass} text-white small-font p-2`}
                    >
                      <div className="d-flex justify-content-between">
                        <div>{item.buytext}</div>
                        <div>{item.buyvalue}</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>{item.saletext}</div>
                        <div>{item.salevalue}</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>{item.baltext}</div>
                        <div>{item.balvalue}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueOfflineTable;
