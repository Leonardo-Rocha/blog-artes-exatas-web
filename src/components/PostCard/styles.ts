import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;

  text-decoration: none;
`;

const Title = styled.h3``;

const Preview = styled.p``;

const Cover = styled.div``;

export {
  Title,
  Preview,
  Cover,
};
