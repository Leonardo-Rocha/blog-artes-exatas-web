import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import LandingPage from '../pages/LandingPage';
import CreatePost from '../pages/CreatePost';
import PostPage from '../pages/PostPage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/1" component={PostPage} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/admin/create-post" component={CreatePost} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
