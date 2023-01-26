import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondary } from "../Constants/Colors";

export default function Categories() {
  useEffect(() => {
    const scroll = document.getElementById("1");
    scroll.scrollIntoView();
  }, []);

  return (
    <>
      <CategoriesHeaderStyle>
        <div>
          <ion-icon name="list-outline"></ion-icon>
          <p id="1">Categorias</p>
        </div>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Almofadas</Link>
        <Link to="/category">Canecas</Link>
        <Link to="/category">Capachos e tapetes</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Almofadas</Link>
        <Link to="/category">Canecas</Link>
        <Link to="/category">Capachos e tapetes</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Almofadas</Link>
        <Link to="/category">Canecas</Link>
        <Link to="/category">Capachos e tapetes</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Almofadas</Link>
        <Link to="/category">Canecas</Link>
        <Link to="/category">Capachos e tapetes</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Acessórios Cozinha</Link>
        <Link to="/category">Almofadas</Link>
        <Link to="/category">Canecas</Link>
        <Link to="/category">Capachos e tapetes</Link>
        <Link to="/category">Acessórios Cozinha</Link>
      </CategoriesHeaderStyle>
    </>
  );
}

const CategoriesHeaderStyle = styled.div`
  width: 230px;
  box-sizing: border-box;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
  position: absolute;
  top: 90px;
  left: 0px;
  div {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  a {
    font-weight: 200;
    font-size: 18px;
    color: gray;
    text-decoration: none;
    :hover {
      color: ${secondary};
    }
  }
`;
