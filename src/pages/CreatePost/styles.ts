import styled from 'styled-components';

const FormContainer = styled.main`
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

export { FormContainer };
