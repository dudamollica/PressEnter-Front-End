import Header from "../Components/Header";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import { Link, useParams } from "react-router-dom";
import { secondary } from "../Constants/Colors";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage() {
  const { id } = useParams();
  const [info, setInfo] = useState([])

  useEffect(() => {
    const scroll = document.getElementById("1");
    scroll.scrollIntoView();

    const URL = `${process.env.REACT_APP_API_URL}/product/${id}`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setInfo(res.data);
    });
    promise.catch((err) => console.log(err.data));
  }, [id]);

  return (
    <>
      <Header />
      <PathProduct id="1">
        <Link to="/">
          <strong>Home</strong>
        </Link>
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <p>{info.category}</p>
      </PathProduct>

      <ProductStyle>
        <SecondImgStyle>
          <img src={info.img} alt="product-info" />
        </SecondImgStyle>
        <img src={info.img} alt="product-info2"/>

        <SepareteVertical />

        <InfoStyle>
          <h1>{info.product}</h1>
          <h2>Disponibilidade: Imediata</h2>

          <p>R${info.price}</p>
          <strong>R${info.discountPrice}</strong>
          <span>
            Em até 3x sem juros de <strong>R${(info.discountPrice / 3).toFixed(2)}</strong>
          </span>

          <ShopStyle>
            <div>
              <label>Quantidade</label>
              <input type="number" placeholder={1} min={1}></input>
            </div>
            <button>Comprar</button>
            <button>
              Adicionar ao<ion-icon name="cart-outline"></ion-icon>
            </button>
          </ShopStyle>
        </InfoStyle>
      </ProductStyle>
      <SepareteStyle />

      <DescriptionStyle>
        <h1>Descrição do produto</h1>
        <p>
          {info.description}
        </p>
      </DescriptionStyle>
      <SepareteStyle />

      <Slider titlePosition="productPage" title="MAIS VENDIDOS" />
      <Footer />
    </>
  );
}

const PathProduct = styled.div`
  display: flex;
  margin-top: 140px;
  margin-bottom: 30px;
  margin-left: 70px;
  font-size: 20px;
  color: black;
  a {
    text-decoration: none;
  }
  strong {
    font-weight: 700;
    color: black;
  }
  p {
    color: darkgray;
    text-decoration: underline;
  }
`;

const ProductStyle = styled.div`
  margin-left: 70px;
  display: flex;
  img {
    width: 35%;
    :hover {
      cursor: pointer;
    }
  }
`;

const SecondImgStyle = styled.div`
  border: 1px solid #c6d0ac;
  border-radius: 3px;
  height: 70px;
  width: 70px;
  margin-right: 30px;
  img {
    height: 70px;
    width: 70px;
  }
`;

const SepareteVertical = styled.div`
  width: 1px;
  background-color: #c6d0ac;
  margin-left: 50px;
`;

const InfoStyle = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  gap: 10px;
  margin-left: 50px;
  h1 {
    font-size: 40px;
  }
  h2 {
    color: ${secondary};
    font-size: 20px;
    font-weight: 400px;
    margin-bottom: 20px;
  }
  p {
    text-decoration-line: line-through;
    font-size: 20px;
    color: #5f5f5f;
  }
  span {
    font-size: 25px;
  }
  strong {
    font-size: 30px;
    color: ${secondary};
  }
`;

const ShopStyle = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
    color: #5f5f5f;
    gap: 7px;
    input {
      box-sizing: border-box;
      width: 100px;
      height: 50px;
      font-size: 20px;
      padding-left: 43px;
    }
  }
  button {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 23px;
    color: white;
    background-color: #4fa64f;
    border-color: #85c285;
    border-radius: 5px;
  }
`;

const SepareteStyle = styled.div`
  height: 1px;
  background-color: #c6d0ac;
  margin: 50px 20px;
`;

const DescriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 35px;
    font-weight: 700;
  }
  p {
    margin: 30px 20%;
    text-align: center;
    font-size: 20px;
    line-height: 25px;
  }
`;
