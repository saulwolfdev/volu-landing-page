import React, { useState } from "react";
import mockData from "../../mockData/mockData.json";
import { TextButton } from "components/uiElements";
import styled from "styled-components";
import Burger from "../../../images/burger.svg";
import Close from "../../../images/close.svg";

const MenuButtonWrapper = styled.div`  
  display: flex;
  justify-content: flex-end;
  margin-right: 21rem;
`;

const MenuIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 999;
  right: 1rem;  
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #434343;
  color: #fff;
  z-index: 998;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const ContentItem = styled.div`
position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 48px;
`;

const CloseButton = styled.img`
  width: 36px;
    height: 50px;
    position: absolute;
    z-index: 999;
    right: 1.4rem;
    cursor: pointer;   
    &:hover {
    transform: scale(1.1);
  }
`;

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { buttons } = mockData.header;

  const items = buttons[0];
  const register = buttons[1];
  const start = buttons[2];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };  

  return (
    <MenuButtonWrapper>
      {isOpen ? (
        <CloseButton src={Close} alt="Close Icon" onClick={closeMenu} />
      ) : (        
        <MenuIcon src={Burger} alt="Menu Icon" onClick={toggleMenu} />        
      )}
      <MenuContainer open={isOpen}>
        <ContentItem>
          <TextButton color="secondary" href={items.text}>
            {items.text}
          </TextButton>
          <TextButton color="secondary" href={register.text}>
            {register.text}
          </TextButton>
          <TextButton color="secondary" href={start.text}>
            {start.text}
          </TextButton>
        </ContentItem>
      </MenuContainer>
    </MenuButtonWrapper>
  );
};

export default MenuButton;