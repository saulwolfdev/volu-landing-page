import React from "react";
import styled from "styled-components";
import { Button } from "components/uiElements";
import mockData from "../mockData/mockData.json";

const NavBar = styled.nav`
  position: relative;
  margin: 0 auto;
  width: 1200px;
`;
const Logo = styled.img`
  display: block;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// const Button=styled.button`
//     display: flex;
//     align-items: center;
//     align-content: center;
//     font-size: 16px;
//     padding: 16px 50px;
//     text-align: center;
//     background-color:#009379;
//     color: #ffffff;
//     border-radius: 20px;
//     border: 0;
//     cursor: pointer;
// `;

const ContentList = styled.ul`
  position: relative;
  width: 100%;
  height: 0;
  display: grid;
  grid-template-areas: "logo contact register login";
  grid-template-rows: auto 1fr 1fr 1fr;
`;
const ContentListLogo = styled.li`
  grid-area: logo;
`;
const ContentListContact = styled(ContentListLogo)`
  grid-area: contact;
`;
const ContentListRegister = styled(ContentListLogo)`
  grid-area: register;
`;
const ContentListLogin = styled(ContentListLogo)`
  grid-area: login;
`;

export function Header() {
  const { logo, menu, buttons } = mockData.header;
  const buttonRegister = buttons[0];
  const buttonStart = buttons[1];
  const menuItems = menu.items[0];
  const test=(
    <img src={`images/${logo.iconPath}`} alt={logo.altTextRocket} />
  )
  return (
    <NavBar>
      <ContentList>
        <ContentListLogo>
          <Logo src={`images/${logo.logoPath}`} alt={logo.altText} />          
        </ContentListLogo>
        <ContentListContact>
          <Button key={menuItems.id}>{menuItems.text}</Button>
        </ContentListContact>
        <ContentListRegister>
          <Button key={buttonRegister.id} color={buttonRegister.color} size={buttonRegister.size}>
            {buttonRegister.text}
          </Button>
        </ContentListRegister>
        <ContentListLogin>
          <Button key={buttonStart.id} color={buttonStart.color} size={buttonStart.size} icon={test}>            
            {buttonStart.text}
          </Button>
        </ContentListLogin>
      </ContentList>
    </NavBar>
  );
}
