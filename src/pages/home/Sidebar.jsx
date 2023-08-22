import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import { HiOutlineUserAdd } from "react-icons/hi";
import { LiaAdSolid } from "react-icons/lia";
import { LuCopyPlus } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { ImTicket } from "react-icons/im";
import { BsBank2 } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { LuFileBarChart } from "react-icons/lu";
import { LuHeartHandshake } from "react-icons/lu";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TbPackages } from "react-icons/tb";
import { RiUserShared2Line } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuFilePlus2 } from "react-icons/lu";
import { BsBroadcast } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { PiAirplaneTiltBold } from "react-icons/pi";
function Sidebar() {
  const location = useLocation();

  const sidebar = [
    {
      title: "Dashboard",
      path: "/",
      icon: "bi-grid",
    },
    {
      title: "Add Websites",
      path: "/addwebsites",
      icon: " bi-plus-circle",
    },
    {
      title: "Add Director/SA",
      path: "/adddirectors",
      reactIcon: <HiOutlineUserAdd />,
    },
    {
      title: "Add TT/Ads",
      path: "/addtt",
      reactIcon: <LiaAdSolid />,
    },
    {
      title: "Create Match",
      path: "/creatematch",
      reactIcon: <LuCopyPlus />,
    },
    {
      title: "Banking",
      path: "/banking",
      reactIcon: <BsBank2 />,
    },
    {
      title: "Tickets",
      path: "/tickets",
      reactIcon: <ImTicket />,
    },
    {
      title: "Reports",
      path: "/reportsts",
      reactIcon: <LuFileBarChart />,
      dataBsTarget: "#reports",
      ariaExpanded: "false",
      ariaControls: "reports",
      childMenu: [
        {
          title: "My Statement",
          path: "/mystatement",
          reactIcon: <GrDocumentText />,
        },
        {
          title: "Statement",
          path: "/statement",
          reactIcon: <GrDocumentText />,
        },
        {
          title: "Settlement",
          path: "/settlement",
          reactIcon: <LuHeartHandshake />,
        },
        {
          title: "Settlement-Statement",
          path: "/settlementstatement",
          reactIcon: <HiOutlineClipboardDocumentList />,
        },
      ],
    },
    {
      title: "Packages",
      path: "/packages",
      reactIcon: <TbPackages />,
    },
    {
      title: "Reference Data",
      path: "/reference",
      reactIcon: <RiUserShared2Line />,
      dataBsTarget: "#reference",
      ariaExpanded: "false",
      ariaControls: "reference",
      childMenu: [
        {
          title: "Country/Currency",
          path: "/countrycurrency",
          reactIcon: <AiOutlineGlobal />,
        },
        {
          title: "Payment Gateway",
          path: "/paymentgateway",
          reactIcon: <FaMoneyCheck />,
        },
        {
          title: "Rejection Reason",
          path: "/rejectionreason",
          reactIcon: <GoXCircle />,
        },
        {
          title: "Security Questions",
          path: "/securityquestions",
          reactIcon: <AiOutlineQuestionCircle />,
        },
        {
          title: "Policy Documents",
          path: "/policydocuments",
          reactIcon: <LuFilePlus2 />,
        },
      ],
    },
    {
      title: "Broadcasting Notifications",
      path: "/broadcasting",
      reactIcon: <BsBroadcast />,
    },
    {
      title: "Offers Management",
      path: "/offersmanagement",
      reactIcon: <BiSolidOffer />,
    },
    {
      title: "Tours/Tournaments",
      path: "/tourstournaments",
      reactIcon: <PiAirplaneTiltBold />,
    },
  ];

  return (
    <div className="d-flex justify-content-between flex-column sidebar-bg text-white p-1 vh-100">
      <div className="sidebar">
        <a href="" className="p-1 text-decoration-none text-white">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="text-white medium-font">Sseven</span>
        </a>
        <hr className="text-white mt-2"></hr>
        <ul className="nav nav-pills flex-column mt-2">
          {sidebar?.map(
            ({
              path,
              title,
              icon,
              reactIcon,
              childMenu,
              ariaControls,
              dataBsTarget,
            }) => {
              return (
                <div>
                  <li
                    className={
                      location?.pathname === path
                        ? "active nav-item p-2"
                        : "nav-item p-2"
                    }
                    key={path}
                  >
                    <Link
                      to={path}
                      className="p-1 text-white medium-font text-decoration-none"
                      data-bs-toggle={childMenu && "collapse"}
                      data-bs-target={dataBsTarget}
                      aria-expanded="false"
                      aria-controls={ariaControls}
                    >
                      <i className={`bi me-3 medium-font ${icon}`}>
                        {reactIcon && reactIcon}
                      </i>
                      <span className="text-white medium-font">{title}</span>
                    </Link>
                  </li>
                  <div className="collapse text-white" id={ariaControls}>
                    {childMenu?.map(({ path, title, icon, reactIcon }) => {
                      return (
                        <li
                          className={
                            location?.pathname === path
                              ? "active nav-item p-2"
                              : "nav-item p-2"
                          }
                          key={path}
                        >
                          <Link
                            to={path}
                            className="p-1 text-white medium-font text-decoration-none"
                          >
                            <i
                              className={`bi me-3 text-white medium-font ${icon}`}
                            >
                              {reactIcon && reactIcon}
                            </i>
                            <span className="text-white medium-font">
                              {title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
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
