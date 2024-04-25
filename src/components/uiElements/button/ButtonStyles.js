import styled from "styled-components";

export const BaseButton = styled.button.attrs((props) => ({
  outline: undefined,
}))`
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  border-radius: 20px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

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