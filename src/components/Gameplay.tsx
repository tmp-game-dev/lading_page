import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;

function Gameplay() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div style={{ marginTop: "25vh", textAlign: "center" }}>
      <StyledSpan>Gameplay</StyledSpan>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "65vh",
          display: "flex",
          backgroundImage: "url(/images/Assets/border4.png)",
          backgroundSize: "50% 115%",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
        }}
      >
        <div
          style={{
            borderRadius: "50px",
            width: "45%",
            height: "73%",
            paddingTop: "9vh",
          }}
        >
          <iframe
            title="Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/03ZMw7Y9qMo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none", borderRadius: "25px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
