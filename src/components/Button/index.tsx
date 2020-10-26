import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    {children}
  </StyledButton>
);

export default Button;
