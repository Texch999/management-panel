import PackageDetails from "./PackageDetails";
import PackageSelect from "./PackageSelect";
import "./styles.css";

function Packages() {
  return (
    <div className="p-4 w-98">
      <PackageDetails />
      <PackageSelect />
    </div>
  );
}

export default Packages;
