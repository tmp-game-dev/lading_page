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

function Islands() {
  const island1Ref = useRef(null);
  const island2Ref = useRef(null);
  const island3Ref = useRef(null);

  useEffect(() => {
    gsap.to(island1Ref.current, {
      y: 50,
      x: 20,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
    gsap.to(island2Ref.current, { y: 0, yoyo: true, repeat: -1, duration: 3 });
    gsap.to(island3Ref.current, {
      y: 20,
      x: -10,
      yoyo: true,
      repeat: -1,
      duration: 3,
    });
  }, []);

  return (
    <div style={{textAlign: "center",paddingTop: "10%"}}>
      <StyledSpan>Guilds</StyledSpan>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "5%"
        }}
      >
        <img
          ref={island1Ref}
          src="/images/Assets/island1.png"
          alt="Island"
          style={{ width: "30%" }}
        />
        <img
          ref={island2Ref}
          src="/images/Assets/island2.png"
          alt="Island"
          style={{ width: "30%", transform: "translateY(10vh)" }}
        />
        <img
          ref={island3Ref}
          src="/images/Assets/island3.png"
          alt="Island"
          style={{ width: "30%" }}
        />
      </div>
    </div>
  );
}

export default Islands;
