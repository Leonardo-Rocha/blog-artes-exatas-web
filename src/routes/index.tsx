import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import AdminPage from '../pages/AdminPage';
import LandingPage from '../pages/LandingPage';
import CreatePost from '../pages/CreatePost';
import PostPage from '../pages/PostPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="/" exact to="/home" />
      <Route path="/home" component={LandingPage} />
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" exact component={AdminPage} />
      <Route path="/admin/create-post" component={CreatePost} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
