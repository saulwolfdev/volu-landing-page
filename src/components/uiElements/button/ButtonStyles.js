import styled from "styled-components";

export const BaseButton = styled.button.attrs((props) => ({
  outline: undefined,
}))`  
  width: 188px;
  height: 60px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 16px 50px;
  border-radius: 20px;
  background-color: #009379;
  border: 0;
  cursor: pointer;

  ${({ color }) =>
    color === "primary" &&
    `
    background-color: #009379;
    color: #fff;
  `}
  ${({ color }) =>
    color === "secondary" &&
    `
    background-color: #E5F4F2;
    color: #009379;
  `}

  ${({ outline }) =>
    outline
      ? `  
    background-color: transparent;
    border: 1px solid currentColor;
  `
      : ""}

  ${({ size }) =>
    size === "xs" &&
    `
    font-size: 12px; 
    padding: 4px 8px; 
  `}
  ${({ size }) =>
    size === "md" &&
    `
    font-size: 14px; 
    padding: 8px 16px; 
  `}
  ${({ size }) =>
    size === "lg" &&
    `
    font-size: 16px;
    padding: 16px 50px;
  `}
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;

export const StyledTextButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  ${({ color }) =>
    color === "primary" &&
    `   
    color: #009379;
    margin-left: 16px;
  `}
  ${({ color }) =>
    color === "secondary" &&
    `   
    color: #E5F4F2;
    margin-left: 16px;
  `}
`;