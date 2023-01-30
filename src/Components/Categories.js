import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondary } from "../Constants/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  console.log(process.env.REACT_APP_API_URL)

  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/categories`
    const promise = axios.get(URL);
    promise.then((res) => {
      setCategories(res.data);
    });
    promise.catch((err) => console.log(err.data));
  }, []);

  return (
    <>
      <CategoriesStyle>
        <div>
          <ion-icon name="list-outline"></ion-icon>
          <p>Categorias</p>
        </div>
        <Container>
        {categories.map((c)=><Link key={c} to={`/category/${c}`}>{c}</Link>)}
        </Container>
      </CategoriesStyle>
    </>
  );
}

const CategoriesStyle = styled.div`
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
  top: 120px;
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

const Container = styled.div`
display: flex;
flex-direction: column;
line-height: 25px;
`