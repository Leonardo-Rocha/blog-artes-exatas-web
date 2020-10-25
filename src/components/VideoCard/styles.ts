import styled from 'styled-components';

interface VideoCardContainerProps {
  url: string;
}

export const VideoCardContainer = styled.a<VideoCardContainerProps>`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  width: 50%;
  height: 290px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
`;
