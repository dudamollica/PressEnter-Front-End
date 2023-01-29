import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../AppContext/auth";
import { principal, tertiary } from "../Constants/Colors";
import logoGif from "../Assets/logo.gif"
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../Assets/cart.png"


export default function Header() {
  const { cart, showSignIn, setShowSignIn } = useContext(AuthContext);


  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderStyle>
        <Link to="/"> <Logo src={logoGif} alt="Logo" /></Link>

        <input type="search" placeholder="Pesquise..." />
        <div
          onClick={() => {
            showSignIn ? setShowSignIn(false) : setShowSignIn(true)
            navigate("/")
          }
          }
        >
          <ion-icon name="person"></ion-icon>
          <span>Login/Cadastro</span>
        </div>
        <div>
          <ion-icon name="call"></ion-icon>
          <span>Suporte</span>
        </div>
        <Cartdiv
          onClick={() =>
            navigate("/cart")
          }
        >
          <Icon>
            <img src={Cart} alt="cart-icon" />
            <CounterStyle><p>{cart}</p></CounterStyle>
          </Icon>
          <span>Carrinho</span>
        </Cartdiv>
      </HeaderStyle>

      <Login showSignIn={showSignIn} setShowSignIn={setShowSignIn} />


    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 1;
`;

const Icon = styled.div`
  position: relative:
  heigth: 27px;
  width: 27px;
  padding-left: 15px;
  float:left;
  img{
    heigth: 27px;
    width: 27px;
  }
  :hover {
    color: white;
    cursor: pointer;
  }
`;

const Cartdiv = styled.div`
  position: relative;
`;

const Logo = styled.img`
  height: 90px;
  width: 210px;
`;

const HeaderStyle = styled.div`
  height: 90px;
  background-color: ${principal};
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    height: 7vh;
    width: 55vw;
    border-radius: 5px;
    padding-left: 7px;
    margin-left: 15px;
    margin-right: 15px;
    border: none;
    :focus{
      outline: none;
      border: 2px solid #CCCCCC;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      font-size: 20px;
      padding-left: 11px;
  }
    :focus::placeholder {
        color: transparent;
    }
  }
  div {
    color: ${tertiary};
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    margin-right: 13px;
    span {
      font-size: 17px;
    }
    :hover {
      cursor: pointer;
      span {
        color: white;
      }
    }
  }
`;

const CounterStyle = styled.div`
  position: absolute;
  top: -4px;
  right: 28px;
  background-color: orange;
  border-radius: 50%;
  width: 4px;
  height: 14px;
  font-size: 5px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  p{
    font-size: 13px;
    margin-left: 9px;
    font-weight: 700;
    margin-top: 0.5px;
  }
`;

