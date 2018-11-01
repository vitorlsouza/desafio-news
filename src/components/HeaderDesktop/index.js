import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActions from '../../store/actions/news';

import { Container, Search } from './styles';
import SearchIcon from '../../assets/search-close.png';

import Logo from '../../assets/brand.png';

class HeaderDesktop extends Component {
  static propTypes = {
    getAllNewsRequest: PropTypes.func.isRequired,
    searchNewsRequest: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,
  };

  state = {
    searchInput: '',
  };

  handleClickBrand = () => {
    const { getAllNewsRequest } = this.props;

    getAllNewsRequest('1');
  };

  handleClickSearchNews(e) {
    e.preventDefault();

    const { searchNewsRequest, page } = this.props;
    const { searchInput } = this.state;

    searchNewsRequest(searchInput, page);
    this.setState({ searchInput: '' });
  }

  inputChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { searchInput } = this.state;
    return (
      <Container>
        <Link to="/">
          <button type="button" onClick={this.handleClickBrand}>
            <img src={Logo} className="brand" alt="logo" />
          </button>
        </Link>
        <Search>
          <form action="/" onSubmit={e => this.handleClickSearchNews(e)}>
            <button type="submit">
              <img src={SearchIcon} alt="search" className="search" />
            </button>
            <input
              type="text"
              placeholder="Pesquisa"
              value={searchInput}
              onChange={e => this.inputChange(e)}
              autoFocus
            />
          </form>
        </Search>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news.news,
  page: state.news.page,
});

const mapDispatchToProps = dispatch => bindActionCreators(NewsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderDesktop);
