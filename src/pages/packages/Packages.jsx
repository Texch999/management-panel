import { useState } from "react";
import PackageButtons from "./PackageButtons";
import PackageDetails from "./PackageDetails";
import PackageSelect from "./PackageSelect";
import "./styles.css";

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState("all");
  const [packageInputs, setPackageInputs] = useState({});

  console.log(selectedPackage, ".........selectedPackage");

  return (
    <div className="p-4 w-98">
      <PackageDetails />
      <PackageSelect
        setSelectedPackage={setSelectedPackage}
        packageInputs={packageInputs}
        setPackageInputs={setPackageInputs}
      />
      <PackageButtons
        selectedPackage={selectedPackage}
        packageInputs={packageInputs}
        setPackageInputs={setPackageInputs}
      />
    </div>
  );
}

export default Packages;
