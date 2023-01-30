import { Link } from "react-router-dom";
import styled from "styled-components";
import { principal } from "../Constants/Colors";

export default function Footer() {
  return (
    <FooterStyle>
      <span>
        <ion-icon name="mail-outline"></ion-icon>
        <h1> RECEBA NOSSAS OFERTAS POR EMAIL </h1>
        <ion-icon name="mail-outline"></ion-icon>
      </span>
      <input placeholder="Escreva seu email aqui" />

      <div>
        <div>
          <h1>Categorias</h1>
          <Link to={"/category/Canecas"}>Canecas</Link>
          <Link to={"/category/Estatuas"}>Estatuas</Link>
          <Link to={"/category/Luminarias"}>Luminarias</Link>
          <Link to={"/category/Mochilas"}>Mochilas</Link>
          <Link to={"/category/Quadros"}>Quadros</Link>
          <Link to={"/category/Relogios"}>Relógios</Link>
        </div>
        <div>
          <h1>Conteúdo</h1>
          <p>Fale Conosco</p>
          <p>Política de Privacidade</p>
          <p>Prazos de Entrega</p>
          <p>Quem Somos</p>
          <p>Trocas e Devoluções</p>
          <p>Como Rastrear Meu Pedido</p>
        </div>
        <div>
          <h1>Atendimento</h1>
          <p>
            <ion-icon name="call-outline"></ion-icon>
            Telefone: (99) 99999-9999
          </p>
          <p>
            <ion-icon name="logo-whatsapp"></ion-icon>
            Whatsapp:(99) 99999-9999
          </p>
          <p>
            <ion-icon name="mail-outline"></ion-icon>
            E-mail: <br></br>pressenter@pressenter.com.br
          </p>
          <p>
            <ion-icon name="time-outline"></ion-icon>
            Atendimento: <br></br>seg-sex (9h-17h30)
          </p>
        </div>
        <div>
          <h1>Social</h1>
          <span><ion-icon name="logo-twitter"></ion-icon></span>
          <span><ion-icon name="logo-youtube"></ion-icon></span>
          <span><ion-icon name="logo-facebook"></ion-icon></span>
          <span><ion-icon name="logo-instagram"></ion-icon></span>
        </div>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  margin-top: 40px;
  height: 450px;
  width: 100%;
  padding-top: 45px;
  background-color: #1b1e23;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  overflow: hidden;
  span {
    display: flex;
    align-items: center;
    h1,
    ion-icon {
      font-size: 35px;
      color: white;
      padding: 5px;
    }
  }
  input {
    width: 700px;
    height: 40px;
    border-radius: 5px;
    border-color: white;
    margin-top: 25px;
    padding-left: 10px;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      h1 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      p,
      a, span{
        color: #dcdcdc;
        line-height: 25px;
        text-decoration: none;
        margin-bottom: 5px;
        ion-icon {
          margin-right: 5px;
        }
        :hover {
          cursor: pointer;
          color: white;
        }
      }
      span{
        ion-icon{
            font-size: 30px;
            :hover{
                color: ${principal};
            }
        }
      }
    }
  }
`;
 