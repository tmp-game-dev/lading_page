import React from "react";

function Navbar() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
        width: "100%",
        height: "6.3vh",
        zIndex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(/images/Assets/header3.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div style={{display: "flex",flexDirection: "row", width: "70%",justifyContent: "space-between", color: "white"}}>
        <div>Tady bude logo</div>
        <div style={{display: "flex", gap: "4vh", paddingRight: "25vh"}}>
          <span style={{ color: "white" }}>Test</span>
          <span style={{ color: "white" }}>Test</span>
          <span style={{ color: "white" }}>Test</span>
          <span style={{ color: "white" }}>Test</span>
          <span style={{ color: "white" }}>Test</span>
          <span style={{ color: "white" }}>Test</span>
          <span style={{ color: "white" }}>Test</span>
        </div>
        <div>Login na wallet</div>
      </div>
    </div>
  );
}

export default Navbar;
