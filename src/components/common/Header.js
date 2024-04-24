import React from "react";
import styled from "styled-components";

const NavBar=styled.nav`
    margin: 0 auto;
    width: 100%;
    display: none;
    @media(min-width: 320px){
        width: 100%;
        display: none;
    }
    @media(min-width: 500px){
        width: 100%;
        display: none;
    } 
    @media(min-width:900px){
        width: 100%;
        display: block;
    }
    @media(min-width: 1200px){
        width: 100%;
        display: block;
    }
    @media(min-width: 1920px){
        width: 100%;
        display: block;
    }
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
        width: 100%;
        height: 0;
        display: grid;
        grid-template-areas: "logo contact register login";
        grid-template-columns:60px 1fr auto auto;
        grid-template-rows: 1fr;
        grid-column-gap: 20px;
    `;
        const ContentListLogo=styled.li`
        grid-area: logo;
        `;
        const ContentListContact=styled(ContentListLogo)`
        grid-area: contact;
        display: flex;
        justify-content: flex-start;
        `;
        const ContentListRegister=styled(ContentListLogo)`
        grid-area: register;
        display: flex;
        justify-content: flex-end;
        `
        const ContentListLogin=styled(ContentListLogo)`
        grid-area: login;
        `
        const ContentListMenu=styled(ContentListLogo)`
        grid-area: login;
        display: flex;
        justify-content: flex-end;
        `

const NavBarMobile=styled.nav`
    margin: 0 auto;
   
    display: block;
    @media(min-width: 320px){
       
        display: block;
    }
    @media(min-width: 500px){
      
        display: block;
    } 
    @media(min-width:900px){
      
        display: none;
    }
    @media(min-width: 1200px){
      
        display: none;
    }
    @media(min-width: 1920px){
      
        display: none;
    }
`;

const ContentListMobile=styled(ContentList)`
         grid-template-areas: "logo login";
        grid-template-columns:60px 1fr;
        grid-template-rows: 1fr;
`;



export function Header(){
    return(
        <>
        <NavBar>
            <ContentList>
            <ContentListLogo><Logo src="#"/></ContentListLogo>
               <ContentListContact><Button>Contacto</Button></ContentListContact>
                <ContentListRegister><Button>Registrarse</Button></ContentListRegister>
                <ContentListLogin><Button>Comenzar</Button></ContentListLogin>
            </ContentList>
        </NavBar>
        <NavBarMobile>
          <ContentListMobile>
          <ContentListLogo><Logo src="#"/></ContentListLogo>
          <ContentListMenu>==</ContentListMenu>
          </ContentListMobile>
        </NavBarMobile>
        </>
    )
}


