import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';

import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
