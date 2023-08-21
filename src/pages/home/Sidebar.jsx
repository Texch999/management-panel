import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";

import { LiaAdSolid } from "react-icons/lia";
import { LuCopyPlus } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
function Sidebar() {
  const [active, SetActive] = useState(1);
const location = useLocation();

  const sidebar = [
    {
      title: "Dashboard",
      path: "/",
      index: 0,
      icon: "bi-grid"
    },
    {
      title: "Add Websites",
      path: "/addwebsites",
      index: 1,
      icon: "bi-plus-circle"

    },
    {
      title: "Add Director/SA",
      path: "/adddirectors",
      index: 2,
      icon: "fa-user-plus"

    },
    {
      title: "Add TT/Ads",
      path: "/addtt",
      index: 3,
      reactIcon: <LiaAdSolid />

    },
    {
      title: "Create Match",
      path: "/creatematch",
      index: 4,
      reactIcon: <LuCopyPlus />

    },
    {
      title: "Banking",
      path: "/banking",
      index: 5,
      icon: "fa-university"

    },
    {
      title: "Tickets",
      path: "/tickets",
      index: 6,
      icon: "fa-ticket"

    }
  ]

  return (
    <div className="d-flex justify-content-between flex-column sidebar-bg text-white p-1 vh-100">
      <div className="sidebar">
        <a href="" className="p-1 text-decoration-none text-white">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="text-white fs-1">Sseven</span>
        </a>
        <hr className="text-white mt-2"></hr>
        <ul className="nav nav-pills flex-column mt-2">
          {
            sidebar?.map(({path, title, icon, reactIcon})=>{
              return (
                <li
                className={location?.pathname === path ? "active nav-item p-2" : "nav-item p-2"}
                key={path}
              >
                <Link to={path} className="p-1 text-white text-decoration-none">
      
                  <i className={`bi me-3 fs-6 ${icon}`}>
                    {reactIcon && reactIcon}
                  </i>
                  <span className="text-white fs-8">{title}</span>
                </Link>
              </li>
              )
            })
          }
          {/* <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(1)}
          >
            <Link to="/" className="p-1 text-white text-decoration-none">
              <i className="bi bi-grid me-3 fs-6"></i>
              <span className="text-white fs-8">Dashboard</span>
            </Link>
          </li>
          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(2)}
          >
            <Link
              to="/addwebsites"
              className="p-1 text-white text-decoration-none "
            >
              <i className="bi bi-plus-circle me-3 fs-6"></i>
              <span className="text-white fs-8">Add Websites</span>
            </Link>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(3)}
          >
            <Link
              to="/adddirectors"
              className="p-1 text-white text-decoration-none"
            >
              <i className="fa fa-user-plus me-3 fs-6"></i>
              <span className="text-white fs-8">Add Director/SA</span>
            </Link>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(4)}
          >
            <Link to="/addtt" className="p-1 text-white text-decoration-none">
              <i className="me-3 fs-4">
                <LiaAdSolid></LiaAdSolid>
              </i>
              <span className="text-white fs-8">Add TT/Ads</span>
            </Link>
          </li>
          <li
            className={active === 5 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(5)}
          >
            <Link
              to="/creatematch"
              className="p-1 text-white text-decoration-none"
            >
              <i className="me-3 fs-5">
                <LuCopyPlus></LuCopyPlus>
              </i>
              <span className="text-white fs-8">Create Match</span>
            </Link>
          </li>
          <li
            className={active === 6 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(6)}
          >
            <Link to="/banking" className="p-1 text-white text-decoration-none">
              <i className="fa fa-university me-3 fs-6"></i>
              <span className="text-white fs-9">Banking</span>
            </Link>
          </li>
          <li
            className={active === 7 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(7)}
          >
            <Link to="tickets" className="p-1 text-white text-decoration-none">
              <i className="fa fa-ticket me-3 fs-5"></i>
              <span className="text-white fs-8">Tickets</span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div>
        <hr className="text-white mt-2"></hr>
        <div className="nav-item p-2">
          <a href="" className="p-1 text-decoration-none text-white">
            <i className="bi bi-person-circle me-3 fs-5"></i>
            <span className="text-white fs-8">name</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
