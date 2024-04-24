import styled from 'styled-components';

export const BaseButton = styled.button.attrs(props => ({  
  outline: undefined,
}))`
  display: inline-block;
  padding: 8px 16px; 
  font-size: 16px; 
  border-radius: 4px; 
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  ${({ color }) => color === 'primary' && `
    background-color: #007bff;
    color: #fff;
  `}
  ${({ color }) => color === 'secondary' && `
    background-color: #6c757d;
    color: #fff;
  `}

  ${({ outline }) => outline ? `  
    background-color: transparent;
    border: 1px solid currentColor;
  ` : ''}

  ${({ size }) => size === 'xs' && `
    padding: 4px 8px; 
    font-size: 12px; 
  `}
  ${({ size }) => size === 'md' && `
    padding: 8px 16px; 
    font-size: 16px; 
  `}
  ${({ size }) => size === 'lg' && `
    padding: 12px 24px; 
    font-size: 20px; 
  `}
`;

export const IconWrapper = styled.span`
    padding: 4px 8px;   
`;
