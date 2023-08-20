import React from "react";
import './style.css';

function Header() {
  return (
    <div className="containaer-fluid w-100 home-bg px-2">
      <div>
      <form className="d-flex" role="search">
            <input
              className="search-width m-2 mb-0 p-2 text-white sidebar-bg w-100 medium-font"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

          </form></div>
    </div>
    
  );
}

export default Header;



