import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HeaderMobile from '../../components/HeaderMobile';
import HeaderDesktop from '../../components/HeaderDesktop';
import Navigation from '../../components/Navigation';
import NewsList from '../../components/NewsList';
import Footer from '../../components/Footer';

import {
  Wrapper, Mobile, Desktop, Nav,
} from './styles';

const Main = ({ match }) => (
  <Fragment>
    <Wrapper>
      <Mobile>
        <HeaderMobile className="mobile" />
      </Mobile>
      <Desktop>
        <HeaderDesktop className="desktop" />
      </Desktop>
    </Wrapper>
    <Nav>
      <Navigation />
    </Nav>
    <Wrapper>
      <NewsList country={match.params.country} />
    </Wrapper>
    <Footer />
  </Fragment>
);

Main.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Main;
