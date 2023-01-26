import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { secondary } from "../Constants/Colors";

export default function Product() {
  const [showShop, setShowShop] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <ProductStyle
      onClick={()=>navigate("/product")}
        showShop={showShop}
        onMouseOver={() => setShowShop(true)}
        onMouseOut={() => setShowShop(false)}
      >
        <img src="https://static3.tcdn.com.br/img/img_prod/460977/caneca_3d_capacete_darth_vader_star_wars_38235_1_e741db549f538f8222b6646cee49b3ed.jpeg" />
        <h2>Caneca 3D Capacete</h2>
        <p>R$99.99</p>
        <strong>R$49,95</strong>
        <span>
          Em até 3x sem juros <br></br>de R$29,97
        </span>
        <button>
          Adicionar ao <ion-icon name="cart-outline"></ion-icon>
        </button>
      </ProductStyle>
    </>
  );
}

const ProductStyle = styled.div`
    border-radius: 5px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      height: 230px;
      padding: 20px;
      width: 200px;
      flex-shrink: 0;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 25px;
    }
    p {
      text-decoration-line: line-through;
      font-size: 20px;
      color: #5f5f5f;
    }
    strong {
      font-size: 30px;
      color: ${secondary};
    }
    span {
      line-height: 23px;
      margin-bottom: 30px;
    }
    button {
      opacity: ${(props) => (!props.showShop ? "0" : "1")};
      margin-bottom: 10px;
      font-size: 25px;
      color:white;
      background-color:${secondary} ;
      border-color: ${secondary};
      border-radius: 5px;
    }
    :hover{
      cursor: pointer;
    }
  `;
