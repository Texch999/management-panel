import React from "react";
import OwnerStatement from "./OwnerStatement";
import DirectorStatement from "./DirectorStatement";
import SuperAdminStatement from "./SuperAdminStatement";

function Statement() {
  return (
    <div className="p-4">
      <h6 className="h6 font-grey">Statement</h6>
      {/* <OwnerStatement />
      <br />
      <DirectorStatement />
      <br /> */}
      <SuperAdminStatement />
    </div>
  );
}

export default Statement;
