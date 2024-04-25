import React from "react";
import { StyledTextButton } from "./ButtonStyles";

const TextButton = ({ onClick, children, color, href }) => (
    <StyledTextButton onClick={onClick} color={color} href={href}>
      {children}
    </StyledTextButton>
  );

export default TextButton;
