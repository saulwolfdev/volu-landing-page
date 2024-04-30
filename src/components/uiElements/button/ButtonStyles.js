import styled from "styled-components";

export const BaseButton = styled.button.attrs((props) => ({
  outline: undefined,
}))`  
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
    margin:0px 8px;
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
    padding: 18px 50px;
    width: 205px;
    height: 60px;
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