import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../AppContext/auth";
import axios from "axios";
import { principal } from "../Constants/Colors";

export default function Cart() {
    const { token } = useContext(AuthContext);
    const [cartList, setCartList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}/carts`, config)
            .then((res) => {
                setCartList(res.data);
                if (cartList && Array.isArray(cartList) && cartList.length > 0) {
                    getTotal();
                }
            })
            .catch((err) => {
                console.log(err.message);
            });

    }, [cartList, token]);




    function getTotal() {
        return;
    }




    return (
        <ProductsContainer>
            <h1>Carrinho</h1>
            <>{cartList.length <= 0 ?
                <ButtonContainer>
                    Não há nada no seu carrinho
                    <StyledButton
                        onClick={() => 
                            navigate("/")
                        }
                    >
                        Voltar para produtos
                    </StyledButton>
                </ButtonContainer> : <></>}</>
        </ProductsContainer>
    )
}

const ProductsContainer = styled.div`
    min-height: 600px;
    h1 {
        font-size: 35px;
        margin-bottom: 50px;
        }
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 250px;
    flex-direction: column;
`;

const StyledButton = styled.button`
    margin-top: 35px;
    width: 240px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4.5px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    background: ${principal};
    color: #ffffff;
`;