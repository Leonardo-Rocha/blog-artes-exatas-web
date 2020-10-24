import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import { Content } from './styles';

const LandingPage: React.FC = () => (
  <Container>
    <Header />

    <Content>
      <PostCard />
    </Content>
  </Container>
);

export default LandingPage;
