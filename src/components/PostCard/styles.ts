import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-top: 1rem;
  }

  #cardLink {
    text-decoration: none;

    background: ${lighten(0.05, '#343a40')};
    border-radius: 0.3rem;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(0.6rem);
    }

    div {
      margin-right: 1rem;
      max-height: 22rem;
      max-width: 31rem;
    }
  }
`;

const Title = styled.h3`
  color: #2bbc8a;
`;

const Preview = styled.p`
  font-size: 1.2rem;
  color: #a8a8b3;
  margin-top: 0.2rem;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Info = styled.span`
  color: #a8a8b3;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export {
  Title,
  Preview,
  Info,
};
