import styled from 'styled-components';

const Container = styled.header`
  height: 15vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-wrap: wrap;

  #searchBar {
    display: none;
  }

  .selected {
    font-weight: bold;
  }

  .selected::after {
    border-bottom: 0.1rem solid #2bbc8a;
    content: "";
    display: block;
    margin: 0 auto;
    width: 100%;
    padding-top: 0.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }

    display: inline-block;
    padding: .5rem 1.5rem;
  }

  @media(min-width: 768px) {
    justify-content: space-between;
    padding: 0 12rem;
    #searchBar {
      display: inline-block;
    }
  }
`;

const List = styled.ul`
  margin: 0 0 .5rem;
  text-align: center;

  li {
    display: inline;
  }

  div {
    display: inline-flex;
    justify-content: space-between;
  }

  @media(min-width: 768px) {
    margin: 1rem 0 .5rem;
  }
`;

export {
  Container,
  List,
};
