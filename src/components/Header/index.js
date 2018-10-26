import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActions from '../../store/actions/news';

import {
  Container, SearchClose, SearchOpen, Close, CloseMenu, Separator,
} from './styles';

import Brand from '../../assets/brand.png';
import SearchIcon from '../../assets/search-close.png';
import Menu from '../../assets/menu-close.png';

class Header extends Component {
  static propTypes = {
    searchNewsRequest: PropTypes.func.isRequired,
    getAllNewsRequest: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,
  };

  state = {
    search: false,
    menuClass: 'itemsDiv',
    searchInput: '',
  };

  handleClickCloseMenu = () => {
    this.setState({ menuClass: 'itemsDiv' });
  };

  handleClickOpenMenu = () => {
    this.setState({ menuClass: 'itemsDiv -active' });
  };

  handleClickSearch = () => {
    const { search } = this.state;
    this.setState({ search: !search });
  };

  handleClickBrand = () => {
    const { getAllNewsRequest } = this.props;

    getAllNewsRequest('1');
  };

  inputChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleClickSearchNews(e) {
    e.preventDefault();

    const { searchNewsRequest, page } = this.props;
    const { searchInput } = this.state;

    searchNewsRequest(searchInput, page);
    this.handleClickSearch();
    this.setState({ searchInput: '' });
  }

  render() {
    const { search, menuClass, searchInput } = this.state;
    return (
      <Fragment>
        {!search ? (
          <Container>
            <button type="button" className="menu" onClick={this.handleClickOpenMenu}>
              <img src={Menu} alt="menu" className="menu-image" />
            </button>
            <div className={menuClass}>
              <ul className="items">
                <button type="button" className="item" onClick={this.handleClickCloseMenu}>
                  <Link to="/" className="link">
                    <li>Notícias em Destaque</li>
                  </Link>
                </button>
                <Separator />
                <button type="button" className="item" onClick={this.handleClickCloseMenu}>
                  <Link to="/br" className="link">
                    <li>Notícias do Brasil</li>
                  </Link>
                </button>
                <Separator />
                <button type="button" className="item" onClick={this.handleClickCloseMenu}>
                  <Link to="/us" className="link">
                    <li>Notícias do EUA</li>
                  </Link>
                </button>
                <Separator />
                <button type="button" className="item" onClick={this.handleClickCloseMenu}>
                  <Link to="/ar" className="link">
                    <li>Notícia da Argentina</li>
                  </Link>
                </button>
                <Separator />
                <button type="button" className="item" onClick={this.handleClickCloseMenu}>
                  <Link to="/fr" className="link">
                    <li>Notícia da França</li>
                  </Link>
                </button>
              </ul>
              <CloseMenu>
                <button type="button" onClick={this.handleClickCloseMenu}>
                  X
                </button>
              </CloseMenu>
            </div>
            <Link to="/">
              <button type="button" onClick={this.handleClickBrand}>
                <img src={Brand} alt="brand" className="brand" />
              </button>
            </Link>
            <SearchClose>
              <button type="button" onClick={this.handleClickSearch}>
                <img src={SearchIcon} alt="search" className="search" />
              </button>
            </SearchClose>
          </Container>
        ) : (
          <Container>
            <SearchOpen>
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
            </SearchOpen>
            <Close>
              <button type="button" onClick={this.handleClickSearch}>
                X
              </button>
            </Close>
          </Container>
        )}
      </Fragment>
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
)(Header);
