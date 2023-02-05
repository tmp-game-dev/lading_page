import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;

const BoardText = styled(StyledSpan)`
  font-size: 2vh;
`;

const Container = styled.div`
  margin-top: 25vh;
  text-align: center;
`;

const BoardContainerLeft = styled.div`
  width: 30%;
  justify-content: center;
  position: relative;
  left: 15%;
  transform: rotate(-10deg);
  align-items: center;
  height: 45vh;
  display: flex;
  background-image: url(/images/Assets/Tabule.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  margin-top: 20vh;
`;

const BoardContainerRight = styled(BoardContainerLeft)`
  left: 55%;
  transform: rotate(10deg);
  margin-top: 0vh;
`;

const InsideBoardContainer = styled.div`
  margin: 5vh;
`;

function Boards() {
  return (
    <Container>
      <StyledSpan>Play and Earn</StyledSpan>
      <BoardContainerLeft>
        <InsideBoardContainer>
          <BoardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            standard dummy text ever since the 1500s, when an unknown printer
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer
          </BoardText>
        </InsideBoardContainer>
      </BoardContainerLeft>
      <BoardContainerRight>
        <InsideBoardContainer>
          <BoardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            standard dummy text ever since the 1500s, when an unknown printer
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer
          </BoardText>
        </InsideBoardContainer>
      </BoardContainerRight>
    </Container>
  );
}

export default Boards;
