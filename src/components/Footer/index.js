import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Container } from './styles';
import Logo from '../../assets/brand.png';

const Footer = ({ loading }) => (
  <div>
    {loading ? null : (
      <Container className="footer">
        <a href="http://jobs.webedia.group/frontend">
          <img src={Logo} alt="logo" />
        </a>
      </Container>
    )}
  </div>
);

Footer.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.news.loading,
});

export default connect(mapStateToProps)(Footer);
