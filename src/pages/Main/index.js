import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';

const Main = ({ country }) => (
  <Fragment>
    <Header />
    <NewsList country={country} />
  </Fragment>
);

Main.propTypes = {
  country: PropTypes.string.isRequired,
};

export default Main;
