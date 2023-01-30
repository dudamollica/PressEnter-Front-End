import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { secondary } from "../Constants/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);

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
      <CategoriesHeaderStyle>
        <div>
          <ion-icon name="list-outline"></ion-icon>
          <p>Categorias</p>
        </div>
        {categories.map((c)=><Link key={c} to={`/category/${c}`}>{c}</Link>)}
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
