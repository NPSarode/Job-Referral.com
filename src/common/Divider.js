import React from "react";

const Divider = ({width = "100%", color="#3332"}) => {
  return (
    <div
      style={{
        width: width,
        // marginLeft: "2rem",
        // marginRight: "2rem",
        height: "1px",
        border: `1px solid ${color}`,
        display:"flex",
        alignItems: "center",
      }}
    />
  );
};

export default Divider;
