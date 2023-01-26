import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import Product from "../Components/Product";

export default function CategoryPage() {
  return (
    <>
      <Container>
        <Header />
        <Categories />
        <label>CATEGORIA</label>

        <AllProducts>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
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
  gap: 7px;
`;
