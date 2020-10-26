import React, { InputHTMLAttributes } from 'react';

import {
  Container,
  StyledInput,
} from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
}

const Input: React.FC<Props> = ({ hint, ...rest }) => (
  <Container>
    <StyledInput
      {...rest}
    />
    <span>{hint}</span>
  </Container>
);

export default Input;
