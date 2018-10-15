import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from '../pages/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={Main} />
      <Route path="/brasil" render={() => <Main country="br" />} />
      <Route path="/eua" render={() => <Main country="us" />} />
      <Route path="/franca" render={() => <Main country="fr" />} />
      <Route path="/argentina" render={() => <Main country="ar" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
