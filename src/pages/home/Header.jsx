import "./style.css";
import { BiSearch } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

function Header() {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  return (
    <div className="header-div containaer-fluid d-flex align-items-center p-3">
      <div className="input-group mb-2 mt-2 w-90">
        <span
          className="input-group-text sidebar-bg serch-text-color"
          id="basic-addon1"
        >
          <BiSearch />
        </span>
        <input
          type="text"
          className="form-control sidebar-bg serch-text-color"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <IoMdLogOut
        className="td-color font-1rem ms-2"
        onClick={() => handleClear()}
      />
    </div>
  );
}

export default Header;
