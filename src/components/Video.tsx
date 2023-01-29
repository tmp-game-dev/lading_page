import React from "react";

function Video() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div style={{marginTop: "35vh",textAlign: "center"}}>
        <span style={{fontSize: "4vh"}}>Developers info</span>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          display: "flex",
          backgroundImage: "url(/images/Assets/border.png)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
        }}
      />
    </div>
  );
}

export default Video;
