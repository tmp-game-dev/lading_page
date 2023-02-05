import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  // text-shadow: 0 0 0px rgba(157, 92, 49, 1), 0 0 10px rgba(150, 87, 45, 1),
  //   0 0 15px rgba(61, 33, 14, 1);
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;

const VideoWrapper = styled.div`
  margin-top: 25vh;
  text-align: center;
`;

const VideoBorder = styled.div`
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

const VideoContainer = styled.div`
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

function Video() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <VideoWrapper>
      <StyledSpan>Developers info</StyledSpan>
      <VideoBorder>
        <VideoContainer>
          <StyledIframe
            title="Video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoContainer>
      </VideoBorder>
    </VideoWrapper>
  );
}

export default Video;
