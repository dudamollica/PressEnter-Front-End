import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";


export default function MainPage() {


  return (
    <>
    <MainPageContainer>
      <Header />
      <Categories/>
      <BannerImg src="https://png.pngtree.com/thumb_back/fw800/background/20201106/pngtree-black-friday-neon-style-with-cart-background-banner-image_465966.jpg"/>
      <Slider titlePosition="mainPage" title="MAIS VISTOS"/>
      <Slider titlePosition="mainPage" title="LANÇAMENTOS"/>
    </MainPageContainer>
    <Footer />
    </>
  );
}

const MainPageContainer = styled.div`
margin-top: 150px;
margin-left: 240px;
`
const BannerImg = styled.img`
display: flex;
margin-left: auto;
margin-right: auto;
width: 1020px;
height: 400px;
border-radius: 5px;
border: none;
`