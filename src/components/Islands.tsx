/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;

const BubbleText = styled(StyledSpan)`
  font-size: 2vh;
`;

const IslandWrapper = styled.div`
  text-align: center;
  padding-top: 10%;
`;

const IslandContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
`;

const Island = styled.div`
  display: flex;
  justify-content: center;
`;

const LeftIsland = styled.div`
  background-color: rgba(0, 92, 24, 0.4);
  position: absolute;
  padding: 5vh;
  top: -60%;
  width: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.7);
  border-radius: 15%;
`;

const MiddleIsland = styled(LeftIsland)`
  background-color: rgba(191, 10, 10, 0.5);
  top: -40%;
`;

const RightIsland = styled(LeftIsland)`
  background-color: rgba(209, 180, 33, 0.5);
`;

const IslandImage = styled.img`
  width: 70%;
`;

const IslandImageTranslated = styled(IslandImage)`
  transform: translateY(10vh);
`;

function Islands() {
  const island1Ref = useRef(null);
  const island2Ref = useRef(null);
  const island3Ref = useRef(null);

  const [isImage1Hover, setIsImage1Hover] = React.useState(false);
  const [isImage2Hover, setIsImage2Hover] = React.useState(false);
  const [isImage3Hover, setIsImage3Hover] = React.useState(false);

  const handleMouseOverImage1 = () => {
    setIsImage1Hover(true);
  };

  const handleMouseOutImage1 = () => {
    setIsImage1Hover(false);
  };

  const handleMouseOverImage2 = () => {
    setIsImage2Hover(true);
  };

  const handleMouseOutImage2 = () => {
    setIsImage2Hover(false);
  };

  const handleMouseOverImage3 = () => {
    setIsImage3Hover(true);
  };

  const handleMouseOutImage3 = () => {
    setIsImage3Hover(false);
  };

  useEffect(() => {
    gsap.to(island1Ref.current, {
      y: 50,
      x: 20,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
    gsap.to(island2Ref.current, { y: 30, yoyo: true, repeat: -1, duration: 3 });
    gsap.to(island3Ref.current, {
      y: 20,
      x: -10,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
  }, []);

  return (
    <IslandWrapper style={{ textAlign: "center", paddingTop: "10%" }}>
      <StyledSpan>Guilds</StyledSpan>
      <IslandContainer>
        <Island ref={island1Ref}>
          {isImage1Hover && (
            <LeftIsland>
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </LeftIsland>
          )}
          <IslandImage
            onMouseOver={handleMouseOverImage1}
            onMouseOut={handleMouseOutImage1}
            src="/images/Assets/island1.png"
            alt="Island"
          />
        </Island>
        <Island ref={island2Ref}>
          {isImage2Hover && (
            <MiddleIsland>
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </MiddleIsland>
          )}
          <IslandImageTranslated
            onMouseOver={handleMouseOverImage2}
            onMouseOut={handleMouseOutImage2}
            src="/images/Assets/island2.png"
            alt="Island"
          />
        </Island>
        <Island ref={island3Ref}>
          {isImage3Hover && (
            <RightIsland>
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </RightIsland>
          )}
          <IslandImage
            onMouseOver={handleMouseOverImage3}
            onMouseOut={handleMouseOutImage3}
            src="/images/Assets/island3.png"
            alt="Island"
          />
        </Island>
      </IslandContainer>
    </IslandWrapper>
  );
}

export default Islands;
