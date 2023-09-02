import React from "react";
import "./style.css";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="header-div containaer-fluid home-bg px-4 py-2">
      <div>
        <form className="d-flex position-relative" role="search">
          <BiSearch className="d-flex td-color search-icon mt-1" />
          <input
            className="search-width rounded m-2 mb-0 py-2 px-5 text-white sidebar-bg medium-font"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
