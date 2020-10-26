import styled from 'styled-components';

interface VideoCardContainerProps {
  url: string;
}

export const VideoCardContainer = styled.div<VideoCardContainerProps>`
  border: 0.1rem solid;
  border-radius: 4px;
  text-decoration: none;
  width: 50%;
  height: 18rem;
  display: none;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  align-items: flex-end;
  padding: 1rem;

  @media(min-width: 768px) {
    display: flex;
  }
`;
