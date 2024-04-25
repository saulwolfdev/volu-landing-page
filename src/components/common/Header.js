import React from "react";
import styled from "styled-components";
import { Button, TextButton, MenuButton } from "components/uiElements";
import mockData from "../mockData/mockData.json";
// import MenuButton from "components/uiElements/button/MenuButton";

const NavBar = styled.nav`
  margin: 0 auto;
  width: 95%;
  display: none;
  @media (min-width: 320px) {
    width: 95%;
    display: none;
  }
  @media (min-width: 500px) {
    width: 95%;
    display: none;
  }
  @media (min-width: 900px) {
    width: 95%;
    display: block;
  }
  @media (min-width: 1200px) {
    width: 70%;
    display: block;
  }
  @media (min-width: 1920px) {
    width: 70%;
    display: block;
  }
`;

const Logo = styled.img`
  display: block;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentList = styled.ul`
  width: 100%;
  height: 0;
  display: grid;
  grid-template-areas: "logo contact register login";
  grid-template-columns: 60px 1fr auto auto;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
`;
const ContentListLogo = styled.li`
  grid-area: logo;
`;
const ContentListContact = styled(ContentListLogo)`
  grid-area: contact;
  display: flex;
  justify-content: flex-start;
`;
const ContentListRegister = styled(ContentListLogo)`
  grid-area: register;
  display: flex;
  justify-content: flex-end;
`;
const ContentListLogin = styled(ContentListLogo)`
  grid-area: login;
`;
const ContentListMenu = styled(ContentListLogo)`
  grid-area: login;
  display: flex;
  justify-content: flex-end;
`;

const NavBarMobile = styled.nav`
  margin: 0 auto;
  width: 95%;
  display: block;
  @media (min-width: 320px) {
    width: 95%;
    display: block;
  }
  @media (min-width: 500px) {
    width: 95%;
    display: block;
  }
  @media (min-width: 900px) {
    width: 100%;
    display: none;
  }
  @media (min-width: 1200px) {
    width: 70%;
    display: none;
  }
  @media (min-width: 1920px) {
    width: 70%;
    display: none;
  }
`;

const ContentListMobile = styled(ContentList)`
  grid-template-areas: "logo login";
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr;
`;

export function Header() {
  const { logo, buttons } = mockData.header;
  const menuItems = buttons[0];
  const buttonRegister = buttons[1];
  const buttonStart = buttons[2];

  const logoButtonSart = (
    <Logo src={`images/${logo.logoPath}`} alt={logo.altText} />
  );
  const iconButtonStart = (
    <img src={`images/${logo.iconPath}`} alt={logo.altTextRocket} />
  );
  return (
    <>
      <NavBar>
        <ContentList>
          <ContentListLogo>{logoButtonSart}</ContentListLogo>
          <ContentListContact>
            <TextButton key={menuItems.id} color="primary">{menuItems.text}</TextButton>
          </ContentListContact>
          <ContentListRegister>
            <Button
              key={buttonRegister.id}
              color={buttonRegister.color}
              size={buttonRegister.size}
            >
              {buttonRegister.text}
            </Button>
          </ContentListRegister>
          <ContentListLogin>
            <Button
              key={buttonStart.id}
              color={buttonStart.color}
              size={buttonStart.size}
              icon={iconButtonStart}
            >
              {buttonStart.text}
            </Button>
          </ContentListLogin>
        </ContentList>
      </NavBar>
      <NavBarMobile>
        <ContentListMobile>
          <ContentListLogo>{logoButtonSart}</ContentListLogo>
          <ContentListMenu><MenuButton /> </ContentListMenu>
        </ContentListMobile>
      </NavBarMobile>
    </>
  );
}
