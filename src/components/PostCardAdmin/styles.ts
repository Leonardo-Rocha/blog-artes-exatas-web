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
    margin-right: 16px;
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AdminButtons = styled.div`
  padding-top: 20px;

  display: flex;
  width: 100%;

  align-items: center;
  justify-content: left;
  margin-left: 0px;

  button {
    margin-right: 5px;
    width: 48%;
  }
`;

export {
  Title,
  Preview,
  Info,
  AdminButtons,
};
