import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Main from '../pages/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={Main} />
    </Switch>
  </BrowserRouter>
);

// Routes.propTypes = {
//   mobile: PropTypes.bool.isRequired,
//   heightScreen: PropTypes.number.isRequired,
//   widthScreen: PropTypes.number.isRequired,
// };

export default Routes;
