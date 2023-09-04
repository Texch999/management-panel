function TopupHoursDiscount() {
  const TOPUP_HOURS_DATA = [
    {
      packagename: "Standard",
      members: 10,
    },
    {
      packagename: "Silver",
      members: 15,
    },
    {
      packagename: "Gold",
      members: 20,
    },
  ];
  return (
    <div className="W-100 medium-font font-grey package-bg p-3 package-radius">
      {TOPUP_HOURS_DATA?.map((item, index) => (
        <div key={index} className="mt-3">
          <div className="d-flex">
            <div className="row w-90">
              <div className="col-3">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Package & Features
                  </div>
                  <div className="medium-font package-heading-bg p-2 rounded mt-1 font-orange">
                    {item.packagename}
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Bulk Hours
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>200</span> <span>M</span>
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>100</span> <span>Y</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Limited Members
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    {item.members}
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Package Hours
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    40 Hours
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey">
                    4800 Hours
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Price
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>5000</span> <span>M</span>
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>45000</span> <span>Y</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <div className="medium-font package-btn-bg p-2 rounded font-white fw-semibold">
                    Discount
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>5%</span> <span>M</span>
                  </div>
                  <div className="medium-font package-btn-bg p-2 rounded mt-1 font-grey d-flex align-items-center justify-content-between">
                    <span>15%</span> <span>Y</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-10 d-flex align-items-center justify-content-end">
              <div className="blue-btn font-white p-2 px-3 rounded">Submit</div>
            </div>
          </div>
          <hr className="hr-line mt-3" />
        </div>
      ))}
    </div>
  );
}

export default TopupHoursDiscount;
