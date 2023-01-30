import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

export default function Slider(props) {

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const { titlePosition, title } = props;
  const [products, setProducts] = useState([]);
  shuffleArray(products)

  useEffect(() => {
    const URL = `http://localhost:5000/product`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setProducts((res.data).filter((p, index) => index <= 5));
    });
    promise.catch((err) => console.log(err.data));

  }, []);

  return (
    <MostSeenContainer titlePosition={titlePosition}>
      <h1>{title}</h1>
      <ImgContainer>
        {products.map((p, index) => (
          <Product key={`${index}a`}
            product={p.product}
            price={p.price}
            discountPrice={p.discountPrice}
            img={p.img}
          />
        ))}
      </ImgContainer>
    </MostSeenContainer>
  );
}

const MostSeenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "recursive";
  overflow: scroll;
  box-sizing: border-box;
  margin-top: 40px;
  h1 {
    font-size: 35px;
    position: absolute;
    left: ${(props) =>
      (props.titlePosition === "mainPage" && "50%") ||
      (props.titlePosition === "productPage" && "42%")};
  }
`;

const ImgContainer = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  display: flex;
  gap: 15px;
`;
