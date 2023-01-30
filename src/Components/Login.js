import styled from "styled-components"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { principal } from "../Constants/Colors";
import { AuthContext } from "../AppContext/auth";
import axios from "axios";
import Close from "../Assets/close.png";



export default function Login({ showSignIn, setShowSignIn }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { saveToken, setUserConnected, setUser } = useContext(AuthContext)
    
    const navigate = useNavigate()

    function signIn(e) {
        e.preventDefault()
        const body = {
            email: email,
            password: password
          }

          const url = `${process.env.REACT_APP_API_URL}/signIn`
          const promise = axios.post(url, body)
          promise.then((res) => {saveToken(res.data.token); setShowSignIn(false); navigate('/');setUser(res.data.name);setUserConnected(true)})
          promise.catch(err => alert(err.response.data))
          

    }

    return (
        <EnterStyle showSignIn={showSignIn}>

            <StyledContainer>
                <CloseSign src={Close} onClick={() => setShowSignIn(false)}/>
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
                <StyledLink to="/sign-up" onClick={()=>setShowSignIn(false)}>Ainda não tem uma conta? Cadastre-se!</StyledLink>
            </StyledContainer>

        </EnterStyle>
    )

}

const CloseSign = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const EnterStyle = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, .7);
  height: 100vh;
  width: 100%;
  display: ${(props) => !props.showSignIn && "none"};

  div {
    font-size: 20px;
    :hover {
      cursor: pointer;
    }
  }

`;
const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color:${principal};
  width: 500px;
  height: 500px;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  h1{
    font-size: 32px;
    color: #FFFFFF;
    font-weight: 400;
    margin-bottom: 50px;
  }
  form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

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
  :focus{
    outline: none;
    border: 2px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    padding-left: 11px;
  }
    :focus::placeholder {
        color: transparent;
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
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`
