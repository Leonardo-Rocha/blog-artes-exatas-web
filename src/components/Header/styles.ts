import styled from 'styled-components';

const Container = styled.header`
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  }

  @media(max-width: 800px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "title title title title"
    "home about contact searchIcon";

    background-color: blue;

    height: 100%;

    #title {
      grid-area: title;
    }

    .home {
      grid-area: home;
    }

    .about {
      grid-area: about;
    }

    .searchIcon {
      grid-area: searchIcon;
      display: none;
    }

    .searchBar {
      display: none;
    }

  }

`;

export default Container;
