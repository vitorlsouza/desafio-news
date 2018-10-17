import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from '../pages/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/:country" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
