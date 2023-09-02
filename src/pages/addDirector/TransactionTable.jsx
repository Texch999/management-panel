import Table from "../table/Table";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineEye, AiOutlineSetting } from "react-icons/ai";
import { TbUserEdit } from "react-icons/tb";
import { LuFileClock } from "react-icons/lu";
import { TbFileText } from "react-icons/tb";

function TransactionTable() {
  const USERTRANSACTION_DETAILS = [
    {
      username: "Srinivas",
      role: "Director",
      txnid: "trx-id-2023062707",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      purchase: "P-501",
      package: "H-100",
      purchase1: "SP-100000",
      chips: "CA-1000000",
      amount: <div className="fa-fileinvo-doll-icon">500000</div>,
      paid: <div className="fa-fileinvo-doll-icon">500000</div>,
      balance: "00.00",
      status: "Success",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      role: "Director",
      txnid: "trx-id-2023062707",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      purchase: "P-501",
      package: "H-100",
      purchase1: "SP-100000",
      chips: "CA-1000000",
      amount: <div className="fa-fileinvo-doll-icon">500000</div>,
      paid: <div className="fa-fileinvo-doll-icon">500000</div>,
      balance: "00.00",
      status: "Success",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      role: "Director",
      txnid: "trx-id-2023062707",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      purchase: "P-501",
      package: "H-100",
      purchase1: "SP-100000",
      chips: "CA-1000000",
      amount: <div className="fa-fileinvo-doll-icon">500000</div>,
      paid: <div className="fa-fileinvo-doll-icon">500000</div>,
      balance: "00.00",
      status: "Success",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      role: "Director",
      txnid: "trx-id-2023062707",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      purchase: "P-501",
      package: "H-100",
      purchase1: "SP-100000",
      chips: "CA-1000000",
      amount: <div className="fa-fileinvo-doll-icon">500000</div>,
      paid: <div className="fa-fileinvo-doll-icon">500000</div>,
      balance: "00.00",
      status: "Success",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
    {
      username: "Srinivas",
      role: "Director",
      txnid: "trx-id-2023062707",
      date: "01/08/2023 ",
      time: "11:46:00 AM",
      purchase: "P-501",
      package: "H-100",
      purchase1: "SP-100000",
      chips: "CA-1000000",
      amount: <div className="fa-fileinvo-doll-icon">500000</div>,
      paid: <div className="fa-fileinvo-doll-icon">500000</div>,
      balance: "00.00",
      status: "Success",
      icon: <AiOutlineEye className="eye-icon-size" />,
    },
  ];

  const cols = [
    {
      header: (
        <div className="d-flex justify-content-center align-items-center ">
          <div className="marginright-10">USER NAME ROLE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "usernameAndrole",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">TXN ID DATE & TIME</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "txnidAnddateAndtime",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">PURCHASE PACKAGE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "purchaseAndpackage",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">PURCHASE CHIPS</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "purchase1Andchips",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">AMOUNT</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "amount",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">PAID</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "paid",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">BALANCE</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "balance",
    },
    {
      header: (
        <div className="d-flex justify-content-center align-items-center">
          <div className="marginright-10">STATUS</div>
          <div>
            <div>
              <MdKeyboardArrowUp className="fs-6" />
            </div>
            <MdKeyboardArrowDown className="fs-6 margintop-10" />
          </div>
        </div>
      ),
      field: "statusAndicon",
      clr: false,
    },
  ];

  const modifiedUsertransactionDetails = USERTRANSACTION_DETAILS.map(
    (item) => ({
      ...item,
      usernameAndrole: (
        <div>
          {item?.username} <br />{" "}
          <span className="role-color">{item?.role}</span>{" "}
        </div>
      ),
      txnidAnddateAndtime: (
        <div>
          {item?.txnid} <br /> <span>{item?.date}</span>
          {item?.time}
          {""}
        </div>
      ),
      purchaseAndpackage: (
        <div>
          {item?.purchase} <br /> <span>{item?.package}</span>{" "}
        </div>
      ),
      purchase1Andchips: (
        <div>
          {item?.purchase1} <br /> <span>{item?.chips}</span>{" "}
        </div>
      ),
      statusAndicon: (
        <div className="d-flex flex-column align-items-center">
          <div className="green-bg p-1">{item?.status} </div>{" "}
          <div> {item?.icon} </div>
        </div>
      ),
    })
  );
  return (
    <div className="sidebar-bg rounded">
      <div className="d-flex align-items-center justify-content-between">
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
  );
}
export default TransactionTable;
