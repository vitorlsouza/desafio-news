import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import NewsList from '../../components/NewsList';
import Footer from '../../components/Footer';

import { Wrapper } from './styles';

const Main = ({ match }) => (
  <Fragment>
    <Wrapper>
      <Header />
      <NewsList country={match.params.country} />
    </Wrapper>
    <Footer />
  </Fragment>
);

Main.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Main;
