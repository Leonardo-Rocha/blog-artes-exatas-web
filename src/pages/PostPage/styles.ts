import styled from 'styled-components';

const Content = styled.main`
  flex: 1;
  width: 100%;

  padding: 4rem 1rem;

  div + div {
    margin-top: 32px;
  }
`;

export { Content };
