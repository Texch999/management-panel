import Table from "./../table/Table";
import { AiOutlineEye } from "react-icons/ai";

function SuperAdminUsersTable() {
  const SUPER_ADMIN_USERS_ROW_DATA = [
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">User</div>
        </div>
      ),
      buySportsChips: 20000000,
      withdrawChips: <div className="role-color">500000</div>,
      exposer: <div className="font-orange">500000</div>,
      walletBalance: <div className="role-color">500000</div>,
      withdrawWallet: <div className="role-color">500000</div>,
      profitLoss: <div className="font-green">500000</div>,
      viewDownline: <AiOutlineEye className="eye-icon" />,
    },
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">User</div>
        </div>
      ),
      buySportsChips: 20000000,
      withdrawChips: <div className="role-color">500000</div>,
      exposer: <div className="font-orange">500000</div>,
      walletBalance: <div className="role-color">500000</div>,
      withdrawWallet: <div className="role-color">500000</div>,
      profitLoss: <div className="font-green">500000</div>,
      viewDownline: <AiOutlineEye className="eye-icon" />,
    },
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">User</div>
        </div>
      ),
      buySportsChips: 20000000,
      withdrawChips: <div className="role-color">500000</div>,
      exposer: <div className="font-orange">500000</div>,
      walletBalance: <div className="role-color">500000</div>,
      withdrawWallet: <div className="role-color">500000</div>,
      profitLoss: <div className="font-green">500000</div>,
      viewDownline: <AiOutlineEye className="eye-icon" />,
    },
  ];
  const SUPER_ADMIN_USERS_COLUMN_DATA = [
    {
      header: "USER NAME/ROLE",
      field: "userName",
    },
    {
      header: "BUY CHIPS(D)SPORTS/CASINO",
      field: "buySportsChips",
    },
    {
      header: "WITHDRAW CHIPS(W)SPORTS/CASINO",
      field: "withdrawChips",
    },
    {
      header: "EXPOSER",
      field: "exposer",
    },
    {
      header: "WALLET BALANCE",
      field: "walletBalance",
    },
    {
      header: "A(WITHDRAW+WALLET BAL)",
      field: "withdrawWallet",
    },
    {
      header: "WITHDRAW CHIPS(W)SPORTS/CASINO",
      field: "profitLoss",
    },
    {
      header: "",
      field: "viewDownline",
    },
  ];
  return (
    <div>
      <Table
        data={SUPER_ADMIN_USERS_ROW_DATA}
        columns={SUPER_ADMIN_USERS_COLUMN_DATA}
      />
      <div className="th-color d-flex align-items-center justify-content-center">
        TOTAL
      </div>
      <div className="th-color d-flex align-items-center justify-content-center">
        PAGINATION
      </div>
    </div>
  );
}

export default SuperAdminUsersTable;
