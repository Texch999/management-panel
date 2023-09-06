import React from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="header-div containaer-fluid home-bg d-flex align-items-center justify-content-center px-4">
      <div className="input-group mb-1 mt-3">
  <span className="input-group-text sidebar-bg serch-text-color" id="basic-addon1"><BiSearch/></span>
  <input type="text" className="form-control sidebar-bg serch-text-color" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    </div>
  );
}

export default Header;
