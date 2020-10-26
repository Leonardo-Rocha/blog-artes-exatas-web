import styled from 'styled-components';
import { darken } from 'polished';

const StyledButton = styled.button`
  background-color: #2bbc8a;
  border-color: #2bbc8a;
  color: #0d484d;
  font-weight: 400;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-align: center;
  vertical-align: center;
  border: 1px solid transparent;
  height: 2.5rem;

  transition: 0.2s;

  &:hover {
    text-decoration: none;
    background-color: ${darken(0.2, '#2bbc8a')};
  }
`;

export {
  StyledButton,
};
