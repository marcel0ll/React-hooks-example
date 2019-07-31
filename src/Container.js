import React from "react";

const Container = ({ children }) => (
  <div
    style={{
      width: "50vw",
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {children}
  </div>
);

export default Container;
