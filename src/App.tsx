import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Islands from "./components/Islands";
import Boards from "./components/Boards";
import Gameplay from "./components/Gameplay";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

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
              <Boards />
              <Gameplay />
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
              <Video />
              <Islands />
            </BackgroundContainer>
          </Background>
        </>
      )}
    </>
  );
}

export default App;
