import styled, { css } from 'styled-components';

interface VideoCardContainerProps {
  url: string;
  cardSize: 'preview' | 'banner';
}

export const VideoCardContainer = styled.a<VideoCardContainerProps>`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;

  ${(props) => (props.cardSize === 'preview'
    ? css`
      width: 50%;
      height: 290px;
    `
    : css`
      width: 100%;
      height: 600px;
    `)}
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
`;
