import React from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="header-div containaer-fluid d-flex align-items-center p-3">
      <div className="input-group  mt-3 w-75">
  <span className="input-group-text sidebar-bg serch-text-color" id="basic-addon1"><BiSearch/></span>
  <input type="text" className="form-control sidebar-bg serch-text-color" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
    </div>
  );
}

export default Header;
