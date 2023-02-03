import React, { useRef, useState,useEffect } from "react";
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

function App() {
  const ref = useRef<any>(null);
  const [bottom, setBottom] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  
  useEffect(() => {
    const preloadedImage = new Image();
    preloadedImage.src = "/images/background/Poust8k.webp";
  }, []);


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
          if (ref.current !== null) {
            ref.current.scrollTo(0, clientHeight + 150);
          }
        }, 20);
      }

      if (scrollTop > 1640) {
        setIsAnimating(true)
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {bottom ? (
        <div>
          <Navbar />
          <Background2
            ref={ref}
            onScroll={handleScrollTop}
          >
            <div style={{ height: "400vh" }}>
              <Boards />
              <Gameplay />
              <RoadMap
                isAnimating={isAnimating}
              />
              <Footer />
            </div>
          </Background2>
        </div>
      ) : (
        <div>
          <Navbar />
          <Background
            ref={ref}
            onScroll={handleScroll}
          >
            <div style={{ height: "180.5vh" }}>
              <Video />
              <Islands />
            </div>
          </Background>
        </div>
      )}
    </>
  );
}

export default App;
