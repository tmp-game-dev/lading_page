import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/action-creators";
import { State } from "../redux";
import { textShortener } from '../utils/strings'



const StyledSpan = styled.span`
  font-size: 7vh;
  font-family: test;
  color: transparent;
  text-shadow: 0 0 0px rgb(255, 255, 255), 0 0 10px rgb(0, 0, 0),
    0 0 15px rgb(61, 33, 14);
`;

const BoardText = styled(StyledSpan)`
  font-size: 2vh;
`;

const AccountText = styled(StyledSpan)`
  font-family: jolly;
  font-size: 2.5vh;
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.7);
  border: 1px solid black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 6.3vh;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-image: url(/images/Assets/header3.png);
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100% 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  color: white;
  align-items: center;
`;

const LogoContainer = styled.div``;

const ItemsContainer = styled.div`
  display: flex;
  gap: 4vh;
  padding-right: 25vh;
`;

const ActionContainer = styled.div``;

const ButtonStyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.3vh;
  gap: 1vh;
`;


const ButtonIcon = styled.img``;

function Navbar() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state: State) => state.blockchain);

  const handleConnectWallet = () => {
    dispatch(connect());
  };




  return (
    <Header>
      <Container>
        <LogoContainer>
          <BoardText>Tady bude logo</BoardText>
        </LogoContainer>
        <ItemsContainer>
          <BoardText>Zalozka</BoardText>
          <BoardText>Zalozka</BoardText>
          <BoardText>Zalozka</BoardText>
          <BoardText>Zalozka</BoardText>
          <BoardText>Zalozka</BoardText>
        </ItemsContainer>
        <ActionContainer>
          <Button onClick={handleConnectWallet}>
            <ButtonStyledContainer>
              <ButtonIcon src="/images/Assets/metamask.png" alt="Metamask" />
              <AccountText>{blockchain.account!= null ? textShortener({ charsStart: 6, charsEnd: 10 })(blockchain.account): "Connect Metamask"}</AccountText>
            </ButtonStyledContainer>
          </Button>
        </ActionContainer>
      </Container>
    </Header>
  );
}

export default Navbar;
