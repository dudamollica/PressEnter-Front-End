import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import {
  Container,
  FormStyle,
  CategorieStyle,
  AddButton,
  EditorButton,
  EditorInput,
} from "./AdminCategory";

export default function AdminProduct() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err.data));

    axios
      .get(`http://localhost:5000/product`)
      .then((res) => {
        setAllProducts((res.data).map((p)=>p.product));
      })
      .catch((err) => console.log(err.data));
  }, []);

  function addProduct(e) {
    e.preventDefault();
    const URL = `http://localhost:5000/admin-product`;
    const body = {
      product,
      price,
      discountPrice,
      description,
      img,
      category,
      categories,
    };
    const promise = axios.post(URL, body);
    promise.then((res) => {
      setAllProducts(res.data);
      setProduct("");
      setPrice("");
      setDiscountPrice("");
      setDescription("");
      setImg("");
      setCategory("");
      alert("Produto cadastrado com sucesso");
    });
    promise.catch((err) => alert(err.response.data));
  }

  return (
    <Container>
      <Header />

      <FormStyle onSubmit={addProduct}>
        <h1>Adicione um novo produto:</h1>
        <input
          type="name"
          placeholder="Nome do produto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço sem desconto"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço com desconto"
          value={discountPrice}
          onChange={(e) => setDiscountPrice(e.target.value)}
          required
        />
        <input
          type="name"
          placeholder="Descrição do produto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="URL da imagem do produto"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <input
          onClick={() => setCategory("")}
          value={category}
          placeholder="Selecione a categoria:"
          required
        />
        {categories.map((c) => (
          <ButtonCategory
            key={c}
            onClick={(e) => {
              e.preventDefault();
              setCategory(c);
            }}
            category={category}
          >
            {c}
          </ButtonCategory>
        ))}

        <AddButton type="submit">Adicionar</AddButton>
        <h1>Edite ou exclua um produto existente:</h1>

        {AllProducts.map((p) => (
          <ProductEditor key={p} p={p} />
        ))}
      </FormStyle>
    </Container>
  );
}

export function ProductEditor(props) {
  const [openEditor, setOpenEditor] = useState(false);

  function deleteProduct(product) {
    const wantToDelete = window.confirm("Você deseja excluir este produto?");
    if (wantToDelete) {
      axios
        .delete(`http://localhost:5000/admin-product/${product}`)
        .then(window.location.reload());
    }
  }

  return (
    <>
      <CategorieStyle>
        {props.p}
        <div>
          <ion-icon
            name="pencil-outline"
            onClick={(e) => {
              e.preventDefault();
              openEditor ? setOpenEditor(false) : setOpenEditor(true);
            }}
          ></ion-icon>
          <ion-icon
            name="trash-outline"
            onClick={(e) => {
              e.preventDefault();
              deleteProduct(props.p);
            }}
          ></ion-icon>
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
      <EditorInput
        openEditor={openEditor}
        type="text"
        placeholder="Novo Preço"
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

const ButtonCategory = styled.button`
  display: ${(props) => props.category && "none"};
  width: 190px;
  margin-bottom: 6px;
  font-size: 17px;
`;
