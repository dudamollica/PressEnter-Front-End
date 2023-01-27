import styled from "styled-components"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { principal, tertiary } from "../Constants/Colors";
import { AuthContext } from "../AppContext/auth";
import axios from "axios";


export default function Login({ showSignIn, setShowSignIn }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { saveToken } = useContext(AuthContext)

    function signIn(e) {
        e.preventDefault()
        const body = {
            email: email,
            password: password
          }
      
          const url = `${process.env.REACT_APP_API_URL}/signIn`
          const promise = axios.post(url, body)
          promise.then((res) => { saveToken(res.data.token); setShowSignIn(false)})
          promise.catch(err => console.log(err.response.data))
    }

    return (
        <EnterStyle showSignIn={showSignIn}>

            <StyledContainer>
                <h1>LOGIN</h1>
                <form onSubmit={signIn}>
                    <StyledInput name="email" 
                    placeholder="E-mail" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    />

                    <StyledInput name="password" 
                    placeholder="Senha" 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />

                    <StyledButton>PressEnter</StyledButton>
                </form>
                <StyledLink to="/signUp">Cadastre-se!</StyledLink>
            </StyledContainer>

        </EnterStyle>
    )

}


const EnterStyle = styled.div`
position: absolute;
  background-color: rgba(0, 0, 0, .7);
  height: 100vh;
  width: 500vh;
  display: ${(props) => !props.showSignIn && "none"};

  div {
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }

`;
const StyledContainer = styled.div`
margin-top: 30px;
    position: absolute;
    background-color:${principal};
    width: 500px;
    height: 500px;
    margin-left: 500px;
    border: 1px ${tertiary} solid;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    h1{
      margin-bottom: 50px;
      font-size: 25px;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    
`
const StyledInput = styled.input`
 width: 326px;
  height: 58px;
  margin-bottom: 13px;
  padding: 15px;
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
const StyledLink = styled(Link)`
  font-size: 15px;
  line-height: 18px;
  text-decoration: none;
  color: #FFFFFF;
  margin-top: 20px;
`