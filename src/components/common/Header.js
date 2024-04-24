import React from "react";
import styled from "styled-components";

const NavBar=styled.nav`
    position: relative;
    margin: 0 auto;
    width: 1200px;
`;
const Logo=styled.img`
    display: block;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button=styled.button`
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 16px;    
    padding: 16px 50px;
    text-align: center;
    background-color:#009379;
    color: #ffffff;
    border-radius: 20px;
    border: 0;
    cursor: pointer;
`;
 
const ContentList=styled.ul`
    position: relative;
    width: 100%;
    height: 0;
    display: grid;
    grid-template-areas: "logo contact register login";
    grid-template-rows: auto 1fr 1fr 1fr;
`
const ContentListLogo=styled.li`
grid-area: logo;
`
const ContentListContact=styled(ContentListLogo)`
grid-area: contact;
`
const ContentListRegister=styled(ContentListLogo)`
grid-area: register;
`
const ContentListLogin=styled(ContentListLogo)`
grid-area: login;
`

export function Header(){
    return(
        <NavBar>
            <ContentList>
            <ContentListLogo><Logo src="#"/></ContentListLogo>
               <ContentListContact><Button>Contacto</Button></ContentListContact>
                <ContentListRegister><Button>Registrarse</Button></ContentListRegister>
                <ContentListLogin><Button> + Comenzar</Button></ContentListLogin>
            </ContentList>
        </NavBar>
    )
}


