import React from "react";
import loding from "./loading.gif";

const spinnerr = () => {
  return (
    <div className="text-center">
      <img src={loding} style={{ marginTop: "20vh" }} alt="loading" />
    </div>
  );
};
export default spinnerr;
