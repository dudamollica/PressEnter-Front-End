import styled from "styled-components";
import { useState } from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import gift from "../Assets/gift.png"
import { principal } from "../Constants/Colors";

export default function SignUpPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState ('')
    const navigate = useNavigate()
    

    function signUp(e) {
       
        e.preventDefault()

        const body = {
            name:name,
            email: email,
            password: password,
            confirmPassword:confirmPassword
          }
      
          const url = `${process.env.REACT_APP_API_URL}/signUp`
          const promise = axios.post(url, body)

          promise.then(() => {alert("Usuário cadastrado com sucesso!"); navigate('/') })
          promise.catch(err => {console.log(err.response.data); alert(err.response.data)})
     
    }

    return (
        <>
            <MainPageContainer>
                <Header />
                <img className="gift" src={gift} alt="" />
                <Container>
                    <h1>Crie sua conta </h1>
                    <form onSubmit={signUp}>
                        <StyledInput name="name" placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} required />

                        <StyledInput name="email" placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                        <StyledInput name="password" placeholder="Senha" type="password" value={password}  onChange={e => setPassword(e.target.value)} required />

                        <StyledInput name="confirmPassword" placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />

                        <StyledButton type="submit">PressEnter</StyledButton>
                    </form>

                </Container >

            </MainPageContainer>
            <Footer />
        </>
    );
}

const MainPageContainer = styled.div`
margin-top: 110px;
min-height: 500px;
display: flex;

.gift{
    width: 440px;
    height: 400px;
    opacity: 0.8;
    margin-right: 100px;
    margin-left: 200px;
}
`

export const Container = styled.div`
background-color: ${principal};
  display: flex;
  height: 480px;
  width: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius:25px;

  h1 {
    font-size: 32px;
    color: #FFFFFF;
    font-weight: 400;
    margin-bottom: 20px;

  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledInput = styled.input`
 width: 326px;
  height: 32px;
  margin-bottom: 13px;
  padding: 15px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  line-height: 23px;
  &::placeholder{
    color: #000000;
    font-weight: 400;
  }
`
const StyledButton = styled.button`
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
  background:#ffffff;
  color: #000000;
`
