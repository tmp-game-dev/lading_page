import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: 2vh;
  font-family: test;
  color: white;
`;

const FooterWrapper = styled.div`
  margin-top: 25vh;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30vh;
  padding-left: 15vh;
`;

const SocialMediaMenuWrapper = styled.div`
  display: flex;
  gap: 15vh;
  align-items: center;
`;

const SocialMediaIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vh;
`;
const SocialMediaIcon = styled.img`
  height: 5vh;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 3vh;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const NewsLetterWrapper = styled.div``;

const SubscribeWrapper = styled.div`
  background-image: url(/images/Assets/schranka2.png);
  background-size: 100% 100%;
  width: 25vh;
  position: relative;
  top: 0%;
  left: -60%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubscribeColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  padding-top: 3vh;
`;

const SubscribeEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubscribeEmailInput = styled.input``;

const SubscribeButton = styled.button`
  background-color: black;
  padding-top: 0.7vh;
  padding-bottom: 0.7vh;
`;

function Footer() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <FooterWrapper>
      <SocialMediaMenuWrapper>
        <SocialMediaIconWrapper>
          <SocialMediaIcon src="/images/Assets/fb.png" alt="facebook" />
          <SocialMediaIcon src="/images/Assets/ig.png" alt="instagram" />
          <SocialMediaIcon src="/images/Assets/link.png" alt="LinkedIn" />
          <SocialMediaIcon src="/images/Assets/tiktok.png" alt="TikTok" />
        </SocialMediaIconWrapper>
        <MenuWrapper>
          <Column>
            <StyledSpan>První sloupec</StyledSpan>
            <StyledSpan>První sloupec</StyledSpan>
            <StyledSpan>První sloupec</StyledSpan>
          </Column>
          <Column>
            <StyledSpan>Druhý sloupec</StyledSpan>
            <StyledSpan>Druhý sloupec</StyledSpan>
            <StyledSpan>Druhý sloupec</StyledSpan>
          </Column>
          <Column>
            <StyledSpan>Tretí sloupec</StyledSpan>
            <StyledSpan>Tretí sloupec</StyledSpan>
            <StyledSpan>Tretí sloupec</StyledSpan>
          </Column>
        </MenuWrapper>
      </SocialMediaMenuWrapper>
      <NewsLetterWrapper>
        <SubscribeWrapper>
          <SubscribeColumn>
            <SubscribeEmailWrapper>
              <StyledSpan>Email</StyledSpan>
              <SubscribeEmailInput type="text" id="fname" name="fname" />
            </SubscribeEmailWrapper>
            <SubscribeButton type="submit">
              <StyledSpan>Subscribe</StyledSpan>
            </SubscribeButton>
          </SubscribeColumn>
        </SubscribeWrapper>
      </NewsLetterWrapper>
    </FooterWrapper>
  );
}

export default Footer;
