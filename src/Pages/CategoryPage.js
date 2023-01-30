import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const scroll = document.getElementById("1");
    scroll.scrollIntoView();

    const URL = `${process.env.REACT_APP_API_URL}/category/${id}`;
    const promise = axios.get(URL);
    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((err) => console.log(err.data));
  }, [id]);

  return (
    <>
      <Container>
        <Header />
        <label id="1">{id}</label>

        <AllProducts>
          {products.map((p) => (
            <Product product={p.product} price={p.price} discountPrice={p.discountPrice} img={p.img} key={p.product}/>
          ))}
        </AllProducts>

      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 110px;
  margin-left: 240px;
  label {
    margin-left: 40px;
    font-size: 35px;
  }
`;

const AllProducts = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: wrap;
  gap: 15px;
`;
