import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  background: #53585D;
  color: #F5F5F5;
  height: 100%;
  width: 100%;

  outline: 0;
  border: 0;
  border-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid #53585D;

  padding: 1rem 1rem;
  border-radius: 0.25rem;
  transition: border-color .3s;

  margin-top: 0.5rem;

  &:focus {
    border-bottom-color: #2bbc8a;
  }
`;

export {
  StyledTextArea,
};
