import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';

const Main = ({ match }) => (
  <Fragment>
    <Header />
    <NewsList country={match.params.country} />
  </Fragment>
);

Main.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Main;
