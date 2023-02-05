/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-return-assign */
import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

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

const RoadMapWrapper = styled.div`
  margin-top: 25vh;
  text-align: center;
`;

const RoadMapContainer = styled.div`
  margin-top: 15vh;
  height: 125vh;
  padding-left: 0vh;
`;

const RoadMapImagesContainer = styled.div`
  height: 125vh;
  position: relative;
`;

const PopUpBubble = styled.div`
  background-color: rgba(217, 157, 106, 0.5);
  position: absolute;
  padding: 5vh;
  top: -2%;
  left: 30%;
  z-index: 3;
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

function RoadMap(props: { isAnimating: boolean }) {
  const { isAnimating } = props;
  const imageRefs: any = [];
  const [isImage1Hover, setIsImage1Hover] = React.useState(false);
  const [isImage2Hover, setIsImage2Hover] = React.useState(false);
  const [isImage3Hover, setIsImage3Hover] = React.useState(false);
  const [isImage4Hover, setIsImage4Hover] = React.useState(false);

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

  const handleMouseOverImage4 = () => {
    setIsImage4Hover(true);
  };

  const handleMouseOutImage4 = () => {
    setIsImage4Hover(false);
  };

  const animateImage = (imageRef: any, index: any) => {
    gsap.to(imageRef, { opacity: 1, duration: 1, delay: index * 0.1 });
  };

  React.useEffect(() => {
    if (isAnimating) {
      imageRefs.forEach(animateImage);
    }
  }, [isAnimating]);
  return (
    <RoadMapWrapper>
      <StyledSpan>Road Map</StyledSpan>
      <RoadMapContainer>
        <RoadMapImagesContainer
          style={{ height: "125vh", position: "relative" }}
        >
          <>
            <img
              ref={(ref) => (imageRefs[0] = ref)}
              onMouseOver={handleMouseOverImage1}
              onMouseOut={handleMouseOutImage1}
              src="/images/Assets/cedule.png"
              alt="kaktus"
              style={{
                width: "5%",
                height: "10%",
                position: "absolute",
                left: "15%",
                opacity: 0,
              }}
            />
            <img
              ref={(ref) => (imageRefs[60] = ref)}
              style={{
                position: "absolute",
                left: "16.6%",
                top: "12%",
                opacity: 0,
              }}
              src="/images/Assets/info4.png"
              alt="info"
            />
          </>
          {isImage1Hover && (
            <PopUpBubble>
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </PopUpBubble>
          )}
          <img
            ref={(ref) => (imageRefs[1] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "22%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[2] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "26%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[3] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "30%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[4] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "34%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[5] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "38%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[6] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "42%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[7] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "46%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[8] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "50%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[9] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "54%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[10] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "58%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[11] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "62%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[12] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "66%",
              top: "4%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[13] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "70%",
              top: "4.3%",
              transform: "rotate(97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[14] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "74%",
              top: "6.3%",
              transform: "rotate(-60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[15] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "77%",
              top: "10.8%",
              transform: "rotate(-30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[16] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "78%",
              top: "16.8%",
              transform: "rotate(-0deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[17] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "77%",
              top: "23%",
              transform: "rotate(30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[18] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "74%",
              top: "27.5%",
              transform: "rotate(60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[19] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "70%",
              top: "29.5%",
              transform: "rotate(-97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[20] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "66%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[21] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "62%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[22] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "58%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[23] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "54%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <div>
            <img
              ref={(ref) => (imageRefs[24] = ref)}
              src="/images/Assets/kaktus.png"
              onMouseOver={handleMouseOverImage2}
              onMouseOut={handleMouseOutImage2}
              alt="kaktus"
              style={{
                width: "5%",
                height: "10%",
                position: "absolute",
                left: "47%",
                top: "26.8%",
                opacity: 0,
              }}
            />
            <img
              ref={(ref) => (imageRefs[61] = ref)}
              style={{
                position: "absolute",
                left: "48.7%",
                top: "39%",
                opacity: 0,
              }}
              src="/images/Assets/info4.png"
              alt="info"
            />
          </div>
          {isImage2Hover && (
            <PopUpBubble style={{ top: "23%", left: "55%" }}>
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </PopUpBubble>
          )}
          <img
            ref={(ref) => (imageRefs[25] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "44%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[26] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "40%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[27] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "36%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[28] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "32%",
              top: "29.8%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[29] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "28%",
              top: "30.2%",
              transform: "rotate(-97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[30] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "24%",
              top: "32.2%",
              transform: "rotate(60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[31] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "21%",
              top: "36.7%",
              transform: "rotate(30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[32] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "20%",
              top: "42.9%",
              transform: "rotate(0deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[33] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "21%",
              top: "49.1%",
              transform: "rotate(-30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[34] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "24%",
              top: "53.6%",
              transform: "rotate(-60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[35] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "28%",
              top: "55.6%",
              transform: "rotate(97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[36] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "32%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <div>
            <img
              ref={(ref) => (imageRefs[37] = ref)}
              onMouseOver={handleMouseOverImage3}
              onMouseOut={handleMouseOutImage3}
              src="/images/Assets/buffalo.png"
              alt="kaktus"
              style={{
                width: "7%",
                height: "10%",
                position: "absolute",
                left: "34.5%",
                top: "53.3%",
                opacity: 0,
              }}
            />
            <img
              ref={(ref) => (imageRefs[62] = ref)}
              style={{
                position: "absolute",
                left: "37.2%",
                top: "65%",
                opacity: 0,
              }}
              src="/images/Assets/info4.png"
              alt="info"
            />
          </div>
          {isImage3Hover && (
            <PopUpBubble
              style={{
                top: "50%",
                left: "45%",
              }}
            >
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </PopUpBubble>
          )}
          <img
            ref={(ref) => (imageRefs[38] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "42%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[39] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "46%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[40] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "50%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[41] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "54%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[42] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "58%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[43] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "62%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[44] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "66%",
              top: "55.9%",
              transform: "rotate(90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[45] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "70%",
              top: "56.2%",
              transform: "rotate(97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[46] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "74%",
              top: "58.2%",
              transform: "rotate(-60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[47] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "77%",
              top: "62.7%",
              transform: "rotate(-30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[48] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "78%",
              top: "68.7%",
              transform: "rotate(-0deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[49] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "77%",
              top: "74.9%",
              transform: "rotate(30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[50] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "74%",
              top: "79.4%",
              transform: "rotate(60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[51] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "70%",
              top: "81.5%",
              transform: "rotate(-97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[52] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "66%",
              top: "81.8%",
              transform: "rotate(-90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[53] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "62%",
              top: "81.8%",
              transform: "rotate(-90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[54] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "58%",
              top: "81.8%",
              transform: "rotate(-90deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[55] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "54%",
              top: "82.2%",
              transform: "rotate(-97deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[56] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "50%",
              top: "84.2%",
              transform: "rotate(60deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[57] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "47%",
              top: "88.7%",
              transform: "rotate(30deg)",
              opacity: 0,
            }}
          />
          <img
            ref={(ref) => (imageRefs[58] = ref)}
            src="/images/Assets/Cesta.png"
            alt="cesta"
            style={{
              width: "1%",
              height: "5%",
              position: "absolute",
              left: "46%",
              top: "94.7%",
              transform: "rotate(0deg)",
              opacity: 0,
            }}
          />
          <div>
            <img
              ref={(ref) => (imageRefs[59] = ref)}
              onMouseOver={handleMouseOverImage4}
              onMouseOut={handleMouseOutImage4}
              src="/images/Assets/poklad.png"
              alt="kaktus"
              style={{
                width: "7%",
                height: "10%",
                position: "absolute",
                left: "43%",
                top: "100%",
                opacity: 0,
              }}
            />
            <img
              ref={(ref) => (imageRefs[63] = ref)}
              style={{
                position: "absolute",
                left: "46%",
                top: "113%",
                opacity: 0,
              }}
              src="/images/Assets/info4.png"
              alt="info"
            />
          </div>
          {isImage4Hover && (
            <PopUpBubble
              style={{
                top: "80%",
                left: "37%",
              }}
            >
              <BubbleText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer
              </BubbleText>
            </PopUpBubble>
          )}
        </RoadMapImagesContainer>
      </RoadMapContainer>
    </RoadMapWrapper>
  );
}

export default RoadMap;
