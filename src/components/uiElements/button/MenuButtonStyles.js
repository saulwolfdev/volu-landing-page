import styled from "styled-components";

export const ContainerFlex = styled.div`
  position: fixed;
  width: 100%;
  top: 0vw;
  height: 100vh;
  overflow: hidden;
`;

export const ContainerMenu = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100vw")};
  width: 100%;
  height: 100vh;
  background: #434343;
  transition: all 0.5s ease;
  z-index: 2;
`;

export const Toggle = styled.input`
  display: none;
`;

export const MenuLabel = styled.label`
  position: fixed;
  top: 40px;
  right: 36px;
  z-index: 3;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Span = styled.span`
  position: absolute;
  top: ${({ top }) => top || "0"};
  width: 30px;
  height: 5px;
  background: #009379;
  transition: all 0.3s ease;

  &:nth-child(2) {
    top: 10px;
  }

  &:nth-child(3) {
    top: 20px;
  }
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-12%, -60%);
  font-size: 62px;
  color: #009379;
  cursor: pointer;
`;

export const Ul = styled.ul`
  display: flex;
  position: relative;
  right: 0%;
  font-size: 32px;
  margin-top: 70px;
  flex-direction: column;
  color: #009379;
  align-items: flex-start;
  cursor: pointer;
`;
