import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  section {
    flex: 1 1 auto;
    margin: 0 2rem;
  }

  .sidebar-1 {
    order: -1;
  }

  .sidebar {
    background: blue;
    border: 0.1rem solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    .sidebar {
      flex: 0 0 260px;
    }

    .sidebar-1 {
      margin: 0 3rem 0 0;
    }

    .sidebar-2 {
      margin: 0 0 0 3rem;
    }
  }
`;

const Footer = styled.footer`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  Body,
  Footer,
};
