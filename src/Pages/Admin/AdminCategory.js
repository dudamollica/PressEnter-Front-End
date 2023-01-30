import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header";

export function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);

  function addCategory(e) {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_API_URL}/admin-category`;
    const promise = axios.post(URL, { name });
    promise.then((res) => {
      setCategories(res.data);
      setName("");
      alert("Categoria cadastrada com sucesso")
    });
    promise.catch((err) => console.log(err.data));
  }

  return (
    <Container>
      <Header />
      <FormStyle onSubmit={addCategory}>
        <h1>Adicione uma nova categoria:</h1>
        <input
          type="text"
          placeholder="Nome da categoria"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AddButton type="submit">Adicionar</AddButton>

        <h1>Edite ou exclua uma categoria existente:</h1>

        {categories.map((c, index) => (
          <CategoryEditor key={index} c={c} />
        ))}
      </FormStyle>
    </Container>
  );
}

export function CategoryEditor(props) {
  const [openEditor, setOpenEditor] = useState(false);

  function deleteCategory(category) {
    const wantToDelete = window.confirm(
      "Você deseja excluir esta categoria?"
    );
    if (wantToDelete) {
      axios.delete(
        `http://localhost:5000/admin-category/${category}`
    ).then(window.location.reload())}
  }

  return (
    <>
      <CategorieStyle>
        {props.c}
        <div>
          <ion-icon
            name="pencil-outline"
            onClick={(e) => {
              e.preventDefault();
              openEditor ? setOpenEditor(false) : setOpenEditor(true);
            }}
          ></ion-icon>
          <ion-icon name="trash-outline" onClick={(e)=>{
            e.preventDefault()
            deleteCategory(props.c)
          }}></ion-icon>
        </div>
      </CategorieStyle>
      <EditorInput
        openEditor={openEditor}
        type="text"
        placeholder="Novo Nome"
        // required
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <EditorButton openEditor={openEditor} type="submit">
        Editar
      </EditorButton>
    </>
  );
}

export function AdminUser() {
  return (
    <Container>
      <Header />
      <FormStyle></FormStyle>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormStyle = styled.form`
  width: 500px;
  background-color: lightgray;
  margin-top: 120px;
  padding-top: 20px;
  padding-bottom: 40px;
  border: 1px solid darkgray;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  input {
    width: 250px;
    height: 30px;
    margin-bottom: 10px;
    font-size: 17px;
    padding-left: 10px;
    margin-top: 5px;
  }
`;

export const CategorieStyle = styled.div`
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  margin: 5px;
  width: 90%;
  height: 30px;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 40px;
    display: flex;
    justify-content: space-between;
    :hover {
      cursor: pointer;
    }
  }
`;

export const AddButton = styled.button`
  background-color: #4fa64f;
  border-color: #85c285;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
  width: 200px;
`;

export const EditorInput = styled.input`
  display: ${(props) => props.openEditor === false && "none"};
`;

export const EditorButton = styled.button`
  display: ${(props) => !props.openEditor && "none"};
  background-color: #4fa64f;
  border-color: #85c285;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 200px;
`;
