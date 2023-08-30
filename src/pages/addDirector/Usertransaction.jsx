import React, { useState } from "react";
import Table from "../table/Table";
import Totalaccount from '../home/Totalaccount';
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md";
import {AiOutlineSetting} from "react-icons/ai";
import {TbUserEdit} from "react-icons/tb";
import {LuFileClock} from "react-icons/lu";
import {TbFileText} from "react-icons/tb";
import Dropdown from 'react-bootstrap/Dropdown';
import {TbWorld} from "react-icons/tb";
import {MdPayment} from "react-icons/md";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2";
import { Images } from "../../images";
function Usertransaction() {
  const USERTRANSACTION_DETAILS = [
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2:"www.we2call.com",
      website3:" www.we2call.com",
      billing: "Cash-INR",
      profitloss:<div className="fa-fileinvo-doll-icon">500K</div>,
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className='eye-icon-size'/>
          <LuFileClock className="eye-icon-size"/>
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),  
  
    },
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2:"www.we2call.com",
      website3:" www.we2call.com",
      billing: "Cash-INR",
      profitloss:<div className="red-text">2K</div>,
      status: "In-active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className='eye-icon-size'/>
          <LuFileClock className="eye-icon-size"/>
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),     
    },
    {
      role: "SA",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2:"www.we2call.com",
      website3:" www.we2call.com",
      billing: "Cash-INR",
      profitloss:<div className="fa-fileinvo-doll-icon">500K</div>,
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className='eye-icon-size'/>
          <LuFileClock className="eye-icon-size"/>
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),     
    },
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2:"www.we2call.com",
      website3:" www.we2call.com",
      billing: "Cash-INR",
      profitloss:<div className="fa-fileinvo-doll-icon">500K</div>,
      status: "Active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className='eye-icon-size'/>
          <LuFileClock className="eye-icon-size"/>
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ), 

    },
    {
      role: "Director",
      username: "Srinivas",
      inused: "India--Hyderabad",
      website1: "www.we2call.com",
      website2:"www.we2call.com",
      website3:" www.we2call.com",
      billing: "Cash-INR",
      profitloss:<div className="red-text">20K</div>,
      status: "In-active",
      icon: (
        <div className="d-flex align-items-center justify-content-evenly">
          {" "}
          <TbFileText className='eye-icon-size'/>
          <LuFileClock className="eye-icon-size"/>
          <AiOutlineSetting className="eye-icon-size" />
          <TbUserEdit className="eye-icon-size" />
        </div>
      ),     
    },
  ];

  const cols = [
    {
      header: <div className='d-flex justify-content-center align-items-center '>
      <div className='marginright-10'>ROLE</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "role",
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>USER NAME</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "username",
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>In USED</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "inused",
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>WEBSITE</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "website1Andwebsite2Andwebsite3",
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>BILLING</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "billing",
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>PROFIT/LOSS</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "profitloss",
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>STATUS</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "status",
      clr: true,
    },
    {
      header: <div className='d-flex justify-content-center align-items-center'>
      <div className='marginright-10'>ACTION</div>
      <div>
      <div><MdKeyboardArrowUp className='fs-6'/></div><MdKeyboardArrowDown className='fs-6 margintop-10'/>
      </div>
      </div>,
      field: "icon",
    },
    
    
  ];

  const modifiedUsertransactionDetails = USERTRANSACTION_DETAILS.map(
    (item) => ({
      ...item,
      role: (
        <div className="role-color">
          <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
      website1Andwebsite2Andwebsite3: (
        <div>
          {item?.website1} <br /> <span>{item?.website2}</span> <br/>{item?.website3}{""}
        </div>
      ),
    })
  );
  const [active,setActive]=useState("Transaction")

  const handleActiveButton=(type)=>{
  setActive(type)
  console.log(type)
  }
  return (
    <div className="p-4 w-100">
       <div className="th-color medium-font p-1">userprofile/profile</div>
       <div>
       <img src={Images.ProfileBanner} className="w-100" />
       <div className="sidebar-bg th-color user-img-bg-br">dfdhgj</div>
       </div>
    <div><Totalaccount/></div>
    <div className="gutter-1rem p-2 d-flex align-items-center">
   
    <Dropdown>
    <TbWorld className="th-color world-icon align-items-center"/>
      <Dropdown.Toggle className="button-clr-unset button-padding dropdown-clr medium-font" id="dropdown-basic"
     >
        Websites/Limit
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        <div className={`d-flex table-header-box medium-font p-2 px-4 py-2 m-1 align-items-center
                        ${active==="Payment Gateway" && "dropdown-clr"}`}
        onClick={()=>handleActiveButton("Payment Gateway")}
        >
              <MdPayment className="medium-font"/>
              <div className="medium-font ps-2">
                Payment Gateway
              </div>
              </div>
              <div className={`d-flex table-header-box medium-font p-2 px-4 py-2 m-1 align-items-center
               ${active==="Transaction" && "dropdown-clr"}`} 
               onClick={()=>handleActiveButton("Transaction")}>
            <HiMiniArrowPathRoundedSquare className="medium-font"/>
              <div className="medium-font ps-2">
                Transaction
              </div>
              </div>
            
    
    </div>
    
    <div className="sidebar-bg rounded">
    <div className="d-flex align-items-center justify-content-between" >
          <div className=" medium-font font-weight-bold px-2 p-2 m-1 th-color">
            Transaction
          </div>
          <div className=" d-flex justify-conten-between m-1 px-2">
            <select
              className="form-select-option w-100 rounded p-2 px-3 m-1 mx-2 small-font"
              aria-label="Default select example"
            >
              <option selected>ALL</option>
              <option value="1">active</option>
            </select>
          </div>
          </div>

        <Table columns={cols} data={modifiedUsertransactionDetails} />
      </div>
    
    </div>
  );
}

export default Usertransaction;
