import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import styled from "styled-components";

export default function CartPage() {
    return (
        <>
        <CartPageContainer>
            <Header />
            <Cart/>    
        </CartPageContainer>
        <Footer />
        </>
    )
}

const CartPageContainer = styled.div`
    margin-top: 110px;
    margin-left: 240px;
`
