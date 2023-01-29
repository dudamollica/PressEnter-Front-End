import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { secondary } from "../Constants/Colors";

export default function Product(props) {
  const {product, price, discountPrice, img} = props
  const [showShop, setShowShop] = useState(false);
  const navigate = useNavigate()
 
  return (
    <>
      <ProductStyle
      onClick={()=>navigate(`/product/${product}`)}
        showShop={showShop}
        onMouseOver={() => setShowShop(true)}
        onMouseOut={() => setShowShop(false)}
      >
        <img src={img} alt="product-img"/>
        <h2>{product}</h2>
        <p>R${price}</p>
        <strong>R${discountPrice}</strong>
        <span>
          Em até 3x sem juros <br></br>de R${(discountPrice/3).toFixed(2)}
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
    width:250px;
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
