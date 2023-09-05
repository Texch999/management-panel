import Table from "./../table/Table";
import { AiOutlineEye } from "react-icons/ai";
function OwnerStatement() {
  const OWNER_ROW_DATA = [
    {
      userName: (
        <div className="d-flex flex-column">
          <div>Srinivas</div>
          <div className="role-color">Director</div>
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
          <div className="role-color">Director</div>
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
          <div className="role-color">Director</div>
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
  const OWNER_COLUMN_DATA = [
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
      <div className="package-bg rounded">
        <div className="row p-3">
          <div className="col d-flex align-items-center">
            <h6 className="h6 mb-0 font-grey">
              Downline Balance Statement/Owner
            </h6>
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <select className="w-25 medium-font font-grey p-2 package-bg rounded outline-none">
              <option>ALL</option>
              <option>Texch</option>
              <option>We2Call</option>
              <option>Raavana</option>
            </select>
          </div>
        </div>
        <div>
          <Table data={OWNER_ROW_DATA} columns={OWNER_COLUMN_DATA} />
          <div className="th-color d-flex align-items-center justify-content-center">
            TOTAL
          </div>
          <div className="th-color d-flex align-items-center justify-content-center">
            PAGINATION
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerStatement;
