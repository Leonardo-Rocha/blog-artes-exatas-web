import styled from 'styled-components';

const Content = styled.main`
  width: 100%;

  padding: 4rem 1rem;

  div + div {
    margin-top: 32px;
  }
`;

const NewPostDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 20px;
`;

export { Content, NewPostDiv };
