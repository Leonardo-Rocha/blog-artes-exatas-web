import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;

  & + div {
    margin-top: 0.5rem;
  }

  span {
    color: #68737b;
    align-self: flex-start;
    padding-left: 0.5rem;
  }
`;

const StyledInput = styled.input`
  background: #53585D;
  color: #F5F5F5;
  height: 2rem;
  width: 100%;

  outline: 0;
  border: 0;
  border-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid #53585D;

  padding: 1rem 1rem;

  border-radius: 0.25rem;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: #2bbc8a;
  }
`;

export {
  Container, StyledInput,
};
