import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Islands from "./components/Islands";
import Boards from "./components/Boards";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import { State } from "./redux";

const Background = styled.div`
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  background-image: url(/images/background/background.png);
  background-size: cover;
  overflow-y: scroll;
  background-attachment: local;
  background-repeat: no-repeat;
`;

const BackgroundContainer = styled.div`
  height: 180.5vh;
`;

const Background2 = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  background-image: url(/images/background/Poust8k.webp);
  background-size: cover;
  overflow-y: scroll;
  background-attachment: local;
  background-repeat: no-repeat;
`;

const BackgroundContainer2 = styled.div`
  height: 400vh;
`;

function App() {
  const ref = useRef<any>(null);
  const [bottom, setBottom] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [fromBackground2, setFromBackground2] = useState<boolean>(false);
  const data = useSelector((state: State) => state.data);
  useEffect(() => {
    const preloadedImage = new Image();
    preloadedImage.src = "/images/background/Poust8k.webp";
  }, []);

  useEffect(() => {
    if (ref.current && fromBackground2) {
      if (!bottom) {
        ref.current.scrollTo(0, ref.current.clientHeight - 150);
        setFromBackground2(false);
      }
    }
  }, [bottom, fromBackground2]);

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setTimeout(() => {
          setBottom(true);
          if (ref.current !== null) {
            ref.current.scrollTo(0, 20);
          }
        }, 20);
      }
    }
  };

  const handleScrollTop = () => {
    if (ref.current) {
      // eslint-disable-next-line no-unused-vars
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      if (scrollTop === 0) {
        setTimeout(() => {
          setBottom(false);
          setFromBackground2(true);
        }, 20);
      }

      if (scrollTop > 1640) {
        setIsAnimating(true);
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {bottom ? (
        <>
          <Navbar />
          <Background2 ref={ref} onScroll={handleScrollTop}>
            <BackgroundContainer2>
            <img style={{position: "absolute",width: "15%",left: "70%",top: "75%"}} src={data.imageTokens[3]!== undefined ? data.imageTokens[0] : "/images/Assets/Drake2.png"} alt="Dragon"/>
            <img style={{position: "absolute",width: "15%",left: "20%",top: "15%"}} src={data.imageTokens[4]!== undefined ? data.imageTokens[0] : "/images/Assets/Drake2.png"} alt="Dragon"/>
              <Boards />
              <Video title="Gameplay" src="https://www.youtube.com/embed/03ZMw7Y9qMo" />
              <img style={{position: "absolute",width: "8%",left: "70%",top: "255%"}} src={data.imageTokens[5]!== undefined ? data.imageTokens[0] : "/images/Assets/animal.png"} alt="Animal"/>
              <img style={{position: "absolute",width: "8%",left: "20%",top: "365%"}} src={data.imageTokens[6]!== undefined ? data.imageTokens[0] : "/images/Assets/animal.png"} alt="Animal"/>
              <RoadMap isAnimating={isAnimating} />
              <Footer />
            </BackgroundContainer2>
          </Background2>
        </>
      ) : (
        <>
          <Navbar />
          <Background ref={ref} onScroll={handleScroll}>
            <BackgroundContainer>
              <img style={{position: "absolute",width: "9%",left: "15%",top: "70%"}} src={data.imageTokens[0]!== undefined ? data.imageTokens[0] : "/images/Assets/Drake.png"} alt="Dragon"/>
              <img style={{position: "absolute",width: "9%",left: "80%"}} src={data.imageTokens[1]!== undefined ? data.imageTokens[0] : "/images/Assets/Drake.png"} alt="Dragon"/>
              <img style={{position: "absolute",width: "15%",left: "50%",top: "130%"}} src={data.imageTokens[2]!== undefined ? data.imageTokens[0] : "/images/Assets/Drake2.png"} alt="Dragon"/>
              <Video title="Developers info" src="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
              <Islands />
            </BackgroundContainer>
          </Background>
        </>
      )}
    </>
  );
}

export default App;
