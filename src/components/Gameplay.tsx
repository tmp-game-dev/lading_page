import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;
const GamePlayWrapper = styled.div`
  margin-top: 25vh;
  text-align: center;
`;

const GamePlayBorder = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/Assets/border4.png);
  background-size: 50% 115%;
  background-repeat: no-repeat;
  background-position-x: center;
`;

const GamePlayContainer = styled.div`
  border-radius: 50px;
  width: 45%;
  height: 73%;
  padding-top: 9vh;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 25px;
`;

function Gameplay() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <GamePlayWrapper>
      <StyledSpan>Gameplay</StyledSpan>
      <GamePlayBorder>
        <GamePlayContainer>
          <StyledIframe
            title="Video"
            src="https://www.youtube.com/embed/03ZMw7Y9qMo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </GamePlayContainer>
      </GamePlayBorder>
    </GamePlayWrapper>
  );
}

export default Gameplay;
