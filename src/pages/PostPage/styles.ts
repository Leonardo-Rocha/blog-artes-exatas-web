import styled from 'styled-components';

const Info = styled.span`
  color: #a8a8b3;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  margin-bottom: 20px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    width: 100%;

  }
`;

export { Info, Banner };
