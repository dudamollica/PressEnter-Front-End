import styled from "styled-components"
import { principal } from "../Constants/Colors"

export default function Footer(){
    return(
        <FooterStyle></FooterStyle>
    )
}

const FooterStyle = styled.div`
margin-top: 40px;
height: 400px;
width: 100%;
background-color: ${principal};
`