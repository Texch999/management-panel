import React from "react";
import './style.css';
import {BiSearch} from "react-icons/bi";

function Header() {
  return (
    <div className="containaer-fluid w-100 home-bg px-4">
      <div>
     
      <form className="d-flex position-relative" role="search">
      <BiSearch className="td-color search-icon"/>
            <input
              className="search-width m-2 mb-0 py-2 px-5 text-white sidebar-bg w-100 medium-font"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

          </form></div>
    </div>
    
  );
}

export default Header;



