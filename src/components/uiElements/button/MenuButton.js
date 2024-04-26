import React, { useState } from "react";
import mockData from "../../mockData/mockData.json";
import { TextButton } from "components/uiElements";
import {
  ContainerFlex,
  ContainerMenu,
  Toggle,
  MenuLabel,
  Span,
  CloseIcon,
  Ul,
} from "./MenuButtonStyles";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { buttons } = mockData.header;

  const items = buttons[0];
  const register = buttons[1];
  const start = buttons[2];

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerFlex>
      <Toggle type="checkbox" id="btn_menu" />
      <MenuLabel htmlFor="btn_menu" onClick={handleToggleMenu}>
        {isOpen ? (
          <CloseIcon>&times;</CloseIcon>
        ) : (
          <>
            <Span $top="0" id="btn_span_1"></Span>
            <Span $top="10px" id="btn_span_2"></Span>
            <Span $top="20px" id="btn_span_3"></Span>
          </>
        )}
      </MenuLabel>
      <ContainerMenu style={{ right: isOpen ? "0" : "-100vw" }}>
        <nav>
          <Ul>
            <TextButton key={items.id} color="secondary" href="#">
              {items.text}
            </TextButton>
            <TextButton key={register.id} color="secondary" href="#">
              {register.text}
            </TextButton>
            <TextButton key={start.id} color="secondary" href="#">
              {start.text}
            </TextButton>
          </Ul>
        </nav>
      </ContainerMenu>
    </ContainerFlex>
  );
};

export default MenuButton;