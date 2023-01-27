import styled from "styled-components";
import Product from "./Product";

export default function Slider(props) {
  const { titlePosition, title} = props;

  return (
    <MostSeenContainer titlePosition={titlePosition} >
      <h1>{title}</h1>
      <ImgContainer>
        <Product/>
      </ImgContainer>
    </MostSeenContainer>
  );
}

const MostSeenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "recursive";
  overflow-x: scroll;
  box-sizing: border-box;
  margin-top: 40px;
  h1 {
    font-size: 35px;
    position: absolute;
    left: ${(props) =>
      (props.titlePosition == "mainPage" && "50%") ||
      (props.titlePosition == "productPage" && "42%")};
  }
`;

const ImgContainer = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  display: flex;
  gap: 15px;
`;
