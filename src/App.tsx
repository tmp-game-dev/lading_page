import React, {useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 500ms, transform 500ms;
`;

const Image2 = styled(Image)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  transition: opacity 500ms, transform 500ms;
`;


const NewContentDiv = styled.div`
  position: absolute;
  width: 100%;
  background-color: red;
  overflow: scroll;
  top: 200vh;
  left: 0;
  height: 10vh;
`;

function App() {
  const ref = useRef<any>(null);
  const [bottom, setBottom] = useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(false);
  const [zommie, setZommie] = useState<boolean>(false);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(2.0);
  const [bottomPage, setBottomPage] = useState<boolean>(false);


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
    if (opacity > 0 && ref.current) {
      setOpacity(opacity - 0.2);
    }
    if (opacity <= 0 && ref.current) {
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      if (scrollTop === 0) {
        setTransition(true);
        setZommie(false);
        setTimeout(() => {
          setBottom(false);
          setTransition(false);
          if (ref.current !== null) {
            ref.current.scrollTo(0, clientHeight - 550);
          }
        }, 500);
      }

      if (scrollTop + clientHeight === scrollHeight) {
        setZommie(true);
      }
    }
  };

  const handleWheel = (e: any) => {
    if (ref.current) {
      const { scrollTop, clientHeight, scrollHeight } = ref.current;

      if (opacity === 1) {
        setBottomPage(true);
      }
      if (opacity > 0) {
        if (e.deltaY < 0 && scrollTop > 0) {
          console.log("UP");
          setOpacity(opacity - 0.2);
          setScale(0.2 + scale);
        }
      }
      if (opacity < 1) {
        if (e.deltaY > 0) {
          console.log("Dolůůů");
        }
        if (
          e.deltaY > 0 &&
          scrollTop + clientHeight === scrollHeight &&
          !bottomPage
        ) {
          console.log("down");
          setOpacity(0.2 + opacity);
          setScale(scale - 0.2);
        }
        setBottomPage(false);
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {bottom ? (
        <>
          <Background
            ref={ref}
            onScroll={handleScrollTop}
            onWheel={handleWheel}
          >
            <Image
              src="/images/background/background2.png"
              alt="image"
              style={{
                opacity: transition ? 0 : 1,
                transform: `scale(${transition ? 1.5 : 1})`,
              }}
            />
            {zommie && (
                <Image2
                  src="/images/background/background3T.png"
                  alt="image"
                  style={{
                    opacity,
                    display: opacity < 0.2 ? "none" : "block",
                    transform: `scale(${scale})`,
                  }}
                />
            )}
          </Background>
          <NewContentDiv>Hello</NewContentDiv>
        </>
      ) : (
        <Background ref={ref} onScroll={handleScroll}>
          <Image
            src="/images/background/background.png"
            alt="image"
            style={{
              opacity: transition ? 0 : 1,
              transform: `scale(${transition ? 1.5 : 1})`,
            }}
          />
        </Background>
      )}
    </>
  );
}

export default App;
