import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;

function Boards() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div style={{ marginTop: "25vh", textAlign: "center" }}>
      <StyledSpan>Play and Earn</StyledSpan>
        <div
          style={{
            width: "30%",
            justifyContent: "center",
            position: "relative",
            left: "15%",
            transform: "rotate(-10deg)",
            alignItems: "center",
            height: "45vh",
            display: "flex",
            backgroundImage: "url(/images/Assets/Tabule.png)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            marginTop: "20vh",
          }}
        />
      <div
        style={{
          width: "30%",
          justifyContent: "center",
          position: "relative",
          left: "55%",
          transform: "rotate(10deg)",
          alignItems: "center",
          height: "45vh",
          display: "flex",
          backgroundImage: "url(/images/Assets/Tabule.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
        }}
      />
    </div>
  );
}

export default Boards;
