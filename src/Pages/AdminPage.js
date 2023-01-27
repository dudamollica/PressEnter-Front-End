import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";

export default function AdminPage() {
  return (
    <AdminStyle>
      <Header />
      <Link to="/admin-category">
        <CategoryButton>Editar Categorias</CategoryButton>
      </Link>
      <Link to="/admin-product">
        <ProductButton>Editar Produtos</ProductButton>
      </Link>
      <Link to="/admin-user">
        <UserButton>Editar Usuários</UserButton>
      </Link>
    </AdminStyle>
  );
}

const AdminStyle = styled.div`
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  button {
    width: 300px;
    height: 200px;
    border-radius: 5px;
    font-size: 45px;
  }
`;

const CategoryButton = styled.button`
  background-color: lightblue;
  border-color: lightblue;
`;

const ProductButton = styled.button`
  background-color: lightgreen;
  border-color: lightgreen;
`;

const UserButton = styled.button`
  background-color: yellow;
  border-color: yellow;
`;
