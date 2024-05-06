import React from "react";
import { BaseButton, IconWrapper } from "./ButtonStyles";

const Button = ({
  children,
  onClick,
  onChange,
  color,
  size,
  outline,
  icon,
  id,
  ...restProps
}) => {
  const styles = { color, size, outline, onClick, onChange };

  return (
    <BaseButton {...styles} {...restProps}>
      {icon && <IconWrapper>{icon}</IconWrapper>} {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  onChange: () => {},
  color: "primary",
  size: "md",
  outline: false,
  icon: null,
};

export default Button;