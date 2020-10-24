import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;

  text-decoration: none;

  background: ${lighten(0.05, '#343a40')};
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  div {
    margin: 0 16px;
    flex: 1;

    max-height: 350px;
    max-width: 500px;
  }
`;

const Title = styled.h3`
  color: #2bbc8a;
`;

const Preview = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Info = styled.span`
  color: #a8a8b3;
`;

const Cover = styled.div`
  img {
    width: 100%;
    height: 100%;

    border-radius: 1%;
  }
`;

const AdminButtons = styled.div`
  padding-top: 20px;

  display: flex;
  width: 100%;

  button {
    margin-right: 5px;
  }
`;

export {
  Title,
  Preview,
  Cover,
  Info,
  AdminButtons,
};
