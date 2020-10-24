import styled from 'styled-components';

const Content = styled.main`
  flex: 1;
  width: 100%;

  padding: 4rem 1rem;

  form {
    margin-top: 30px;
    .row {
      margin: 0;
      justify-content: space-between;
      div {
        width: 49%;
        & + div {
          margin-left: 10px;
        }
      }
    }

    button {
      margin-top: 10px;
      width: 100%;
    }
  }
`;

export { Content };
