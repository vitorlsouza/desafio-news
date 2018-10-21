import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import Footer from '../../components/Footer';

const Main = ({ match }) => (
  <Fragment>
    {console.log(match)}
    <Header />
    <NewsList country={match.params.country} />
    <Footer />
  </Fragment>
);

Main.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Main;
