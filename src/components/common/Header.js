import React from "react";
import styled from "styled-components";
import { Button, TextButton, MenuButton } from "components/uiElements";

import NavBarLogoSvg from "../../images/LogotipoVolu.svg";

//VISIBLE HIDDEN BOX

const BoxShowTrueDesktop = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  @media (min-width: 320px) {
    width: 100%;
    height: 100%;
    display: none;
  }
  @media (min-width: 500px) {
    width: 100%;
    height: 100%;
    display: none;
  }
  @media (min-width: 900px) {
    width: 100%;
    height: 100%;
    display: block;
  }
  @media (min-width: 1200px) {
    width: 100%;
    height: 100%;
    display: block;
  }
  @media (min-width: 1920px) {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
const BoxShowTrueMObile = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  @media (min-width: 320px) {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 500px) {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 900px) {
    display: none;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1200px) {
    display: none;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1920px) {
    display: none;
    width: 100%;
    height: 100%;
  }
`;

//NavBar DESKTOP
const NavBar = styled.nav`
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  display: grid;
  grid-template:
    "logoNavbar contactNavbar contentButtons" 1fr/
    100px 1fr 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
const NavBarContentLogo = styled.div`
  grid-area: logoNavbar;
`;
const NavBarContentLogoImg = styled.img`
  grid-area: logoNavbar;
  display: block;
  width: 100px;
  height: auto;
`;
const NavBarContentButton = styled.div`
  width: 100%;
  height: 100%;
  grid-area: contactNavbar;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const NavBarContentButtons = styled.div`
  grid-area: contentButtons;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
//NavBar MOBILE
const NavBarMobile = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    "logoNavbarMobile menuNavbarMobile" 1fr/
    140px 1fr;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const NavBarContentLogoMobile = styled.div`
  grid-area: logoNavbarMobile;
  display: flex;
    justify-content: center;
    align-items: center;
`;
const NavBarContentMenuMobile = styled.div`
  grid-area: menuNavbarMobile;
`;

const NavBarContentLogoMobileImg = styled.img`
  display: block;
  width: 100px;
  height: auto;
`;

export function Header({ header }) {
  const {
    menuItems,
    buttonRegister,
    buttonStart,
    logo,
    iconButtonStart,
  } = header;

  return (
    <>
      <BoxShowTrueDesktop>
        <NavBar>
          <NavBarContentLogo>
            <NavBarContentLogoImg src={`images/${logo.logoPath}`} />
          </NavBarContentLogo>
          <NavBarContentButton>
            <TextButton key={menuItems.id} color="primary">
              {menuItems.text}
            </TextButton>
          </NavBarContentButton>
          <NavBarContentButtons>
            <Button
              key={buttonRegister.id}
              color={buttonRegister.color}
              size={buttonRegister.size}
            >
              {buttonRegister.text}
            </Button>
            <Button
              key={buttonStart.id}
              color={buttonStart.color}
              size={buttonStart.size}
              icon={iconButtonStart}
            >
              {buttonStart.text}
            </Button>
          </NavBarContentButtons>
        </NavBar>
      </BoxShowTrueDesktop>
      <BoxShowTrueMObile>
        <NavBarMobile>
          <NavBarContentLogoMobile>
            <NavBarContentLogoMobileImg src={`images/${logo.logoPath}`}/>
          </NavBarContentLogoMobile>
          <NavBarContentMenuMobile>
            <MenuButton />
          </NavBarContentMenuMobile>
        </NavBarMobile>
      </BoxShowTrueMObile>
    </>
  );
}
