import styled from 'styled-components';

const Form = styled.form`
  margin-top: 30px;

  div {
    & + div {
      margin-top: 0.5rem;
    }
  }

  button {
    margin-top: 10px;
    width: 100%;
  }

  .tox {
    margin-top: 1rem;
  }

`;

export { Form };
