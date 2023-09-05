import Table from "./../table/Table";
import { AiOutlineEye } from "react-icons/ai";

function SuperAdminTable() {
  const SUPER_ADMIN_ROW_DATA = [
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">Admin</div>
        </div>
      ),
      pkgAmount: 500000,
      buySportsChips: (
        <div className="d-flex flex-column">
          <div>100000</div>
          <div className="bluecolor-text">Fixed</div>
        </div>
      ),
      buyCasinoChips: (
        <div className="d-flex flex-column">
          <div>100000</div>
          <div className="bluecolor-text">5%</div>
        </div>
      ),
      rentFixed: <div className="font-green">5000</div>,
      shareRoyalty: <div className="font-green">5000</div>,
      totalAmount: <div className="font-green">5000</div>,
      paidAmount: <div className="font-green">5000</div>,
      balanceAmount: <div className="role-color">50000</div>,
      viewDownline: <AiOutlineEye className="eye-icon" />,
    },
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">Master</div>
        </div>
      ),
      pkgAmount: 500000,
      buySportsChips: (
        <div className="d-flex flex-column">
          <div>100000</div>
          <div className="bluecolor-text">Fixed</div>
        </div>
      ),
      buyCasinoChips: (
        <div className="d-flex flex-column">
          <div>100000</div>
          <div className="bluecolor-text">5%</div>
        </div>
      ),
      rentFixed: <div className="font-green">5000</div>,
      shareRoyalty: <div className="font-green">5000</div>,
      totalAmount: <div className="font-green">5000</div>,
      paidAmount: <div className="font-green">5000</div>,
      balanceAmount: <div className="role-color">50000</div>,
      viewDownline: <AiOutlineEye className="eye-icon" />,
    },
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">Sub A</div>
        </div>
      ),
      pkgAmount: 500000,
      buySportsChips: (
        <div className="d-flex flex-column">
          <div>100000</div>
          <div className="bluecolor-text">Fixed</div>
        </div>
      ),
      buyCasinoChips: (
        <div className="d-flex flex-column">
          <div>100000</div>
          <div className="bluecolor-text">5%</div>
        </div>
      ),
      rentFixed: <div className="font-green">5000</div>,
      shareRoyalty: <div className="font-green">5000</div>,
      totalAmount: <div className="font-green">5000</div>,
      paidAmount: <div className="font-green">5000</div>,
      balanceAmount: <div className="role-color">50000</div>,
      viewDownline: <AiOutlineEye className="eye-icon" />,
    },
  ];
  const SUPER_ADMIN_COLUMN_DATA = [
    {
      header: "USER NAME/ROLE",
      field: "userName",
    },
    {
      header: "PKG AMOUNT",
      field: "pkgAmount",
    },
    {
      header: "BUY SPORTS CHIPS",
      field: "buySportsChips",
    },
    {
      header: "BUY CASINO CHIPS",
      field: "buyCasinoChips",
    },
    {
      header: "RENT/FIXED",
      field: "rentFixed",
    },
    {
      header: "SHARE/ROYALTY",
      field: "shareRoyalty",
    },
    {
      header: "TOTAL AMOUNT",
      field: "totalAmount",
    },
    {
      header: "PAID",
      field: "paidAmount",
    },
    {
      header: "BALANCE",
      field: "balanceAmount",
    },
    {
      header: "VIEW DOWNLINE",
      field: "viewDownline",
    },
  ];
  return (
    <div>
      <Table data={SUPER_ADMIN_ROW_DATA} columns={SUPER_ADMIN_COLUMN_DATA} />
      <div className="th-color d-flex align-items-center justify-content-center">
        TOTAL
      </div>
      <div className="th-color d-flex align-items-center justify-content-center">
        PAGINATION
      </div>
    </div>
  );
}

export default SuperAdminTable;
