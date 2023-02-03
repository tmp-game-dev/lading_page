import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 2vh;
  font-family: test;
  color: white;
`;

function Footer() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div
      style={{
        marginTop: "25vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "30vh",
        paddingBottom: "5vh",
      }}
    >
      <div style={{display: "flex",gap: "15vh"}}>
        <div style={{ display: "flex", flexDirection: "row", gap: "2vh" }}>
          <img style={{ height: "5vh" }} src="/images/Assets/fb.png" alt="FB" />
          <img style={{ height: "5vh" }} src="/images/Assets/ig.png" alt="IG" />
          <img
            style={{ height: "5vh" }}
            src="/images/Assets/link.png"
            alt="LinkedIn"
          />
          <img
            style={{ height: "5vh" }}
            src="/images/Assets/tiktok.png"
            alt="TT"
          />
        </div>
        <div style={{ display: "flex", gap: "3vh" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <StyledSpan>První sloupec</StyledSpan>
            <StyledSpan>První sloupec</StyledSpan>
            <StyledSpan>První sloupec</StyledSpan>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <StyledSpan>Druhý sloupec</StyledSpan>
            <StyledSpan>Druhý sloupec</StyledSpan>
            <StyledSpan>Druhý sloupec</StyledSpan>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <StyledSpan>Tretí sloupec</StyledSpan>
            <StyledSpan>Tretí sloupec</StyledSpan>
            <StyledSpan>Tretí sloupec</StyledSpan>
          </div>
        </div>
      </div>
      <div>
        <p>NewsLetter Sub</p>
      </div>
    </div>
  );
}

export default Footer;
