import { FaSackDollar } from "react-icons/fa6";

function PackageDetails() {
  const PACKAGR_DETAILS_DATA = [
    {
      text: "Total Pkg Sale",
      amount: 203.378,
      profitLoss: "+6.32%",
      icon: <FaSackDollar />,
    },
    {
      text: "Total Users",
      amount: 20003.378,
      profitLoss: "",
      icon: <FaSackDollar />,
    },
    {
      text: "Non Uses Downline",
      amount: 333.653,
      profitLoss: "+8.12%",
      icon: <FaSackDollar />,
    },
    {
      text: "Total Discount",
      amount: 54500,
      profitLoss: "+3.54%",
      icon: <FaSackDollar />,
    },
  ];
  return (
    <div className="row">
      {PACKAGR_DETAILS_DATA?.map((item, index) => (
        <div className="col-sm-6 col-lg-3">
          <div className="package-bg rounded p-2 d-flex">
            <div className="row w-100">
              <div className="col-9">
                <div className="p-1">
                  <p className="font-grey">{item.text}</p>
                  <div className="d-flex">
                    <h5 className="font-grey">{item.amount}</h5>
                    <span className="font-green px-2">{item.profitLoss}</span>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <div className="dollar-icon-bg d-flex align-items-center justify-content-center">
                  <h5>{item.icon}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PackageDetails;
