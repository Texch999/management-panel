import React from "react";

function PackageSelect() {
  return (
    <div className="row mt-3">
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Website</div>
          <select className="w-100 select-bg p-3 rounded medium-font">
            <option>Select Websites</option>
            <option>Texch</option>
            <option>We2Call</option>
          </select>
        </div>
      </div>
      <div className="col-3">
        <div>
          <div className="medium-font font-grey">Country</div>
          <select className="w-100 select-bg p-3 rounded medium-font">
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
    </div>
  );
}

export default PackageSelect;
