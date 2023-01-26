import { useState, useContext } from "react";
import styled from "styled-components";
import Logo from "../Assets/logo.png";
import { AuthContext } from "../AppContext/auth";
import { principal, tertiary } from "../Constants/Colors";

export default function Header() {
  const { carCount } = useContext(AuthContext);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <HeaderContainer>
      <HeaderStyle>
        <img src={Logo} alt="Logo" />
        <input type="search" placeholder="Pesquise..." />
        <div
          onClick={() =>
            showSignIn ? setShowSignIn(false) : setShowSignIn(true)
          }
        >
          <ion-icon name="person"></ion-icon>
          <span>Olá fulano</span>
        </div>
        <div>
          <ion-icon name="call"></ion-icon>
          <span>Suporte</span>
        </div>
        <div>
          <ion-icon name="cart-outline"></ion-icon>
          <span>Carrinho</span>
        </div>
      </HeaderStyle>
      <EnterStyle showSignIn={showSignIn}>
        <div>
          <ion-icon name="person-outline"></ion-icon>
          Cadastrar
        </div>
        <div>
          <ion-icon name="enter-outline"></ion-icon>
          Entrar
        </div>
      </EnterStyle>

      <CounterStyle>{carCount}</CounterStyle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
`;

const HeaderStyle = styled.div`
  position: relative;
  height: 90px;
  background-color: ${principal};
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    height: 90px;
    width: 210px;
  }
  input {
    height: 50px;
    width: 550px;
    border-radius: 5px;
    padding-left: 7px;
    margin-left: 20px;
  }
  div {
    color: ${tertiary};
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "recursive";
    span {
      font-size: 20px;
    }
    :hover {
      color: white;
      cursor: pointer;
    }
  }
`;

const CounterStyle = styled.div`
  position: absolute;
  top: 20px;
  right: 36px;
  background-color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EnterStyle = styled.div`
  position: absolute;
  top: 70px;
  right: 240px;
  background-color: #f4f4f4;
  height: 70px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 25px;
  display: ${(props) => !props.showSignIn && "none"};
  color: gray;
  div {
    font-size: 20px;
    :hover {
      color: black;
      cursor: pointer;
    }
  }
`;
