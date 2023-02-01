import React, { useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Islands from "./components/Islands";
import Boards from "./components/Boards";
import Gameplay from "./components/Gameplay";
import RoadMap from "./components/RoadMap";

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

// const Image = styled.img`
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
//   display: block;
//   transition: opacity 500ms, transform 500ms;
// `;

// const StyledDiv = styled.div`
//   position: relative;
//   width: 100%;
//   height: 1500px;
//   display: block;
//   background-color: red;
// `;

function App() {
  const ref = useRef<any>(null);
  const [bottom, setBottom] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false);

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setTransition(true);
        setTimeout(() => {
          setBottom(true);
          setTransition(false);
          if (ref.current !== null) {
            ref.current.scrollTo(0, 20);
          }
        }, 500);
      }
    }
  };

  const handleScrollTop = () => {
    if (ref.current) {
      // eslint-disable-next-line no-unused-vars
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      if (scrollTop === 0) {
        setTransition(true);
        setTimeout(() => {
          setBottom(false);
          setTransition(false);
          if (ref.current !== null) {
            ref.current.scrollTo(0, clientHeight - 150);
          }
        }, 500);
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
            style={{
              opacity: transition ? 0 : 1,
              transform: `scale(${transition ? 1.5 : 1})`,
            }}
          >
            <div style={{ height: "400vh" }}>
              <Boards />
              <Gameplay/>
              <RoadMap/>
            </div>
          </Background2>
        </div>
      ) : (
        <div>
          <Navbar />
          <Background
            ref={ref}
            onScroll={handleScroll}
            style={{
              opacity: transition ? 0 : 1,
              transform: `scale(${transition ? 1.5 : 1})`,
            }}
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
