import React, { Component, Fragment } from 'react';

import {
  Container, SearchClose, SearchOpen, Close, CloseMenu,
} from './styles';

import Brand from '../../assets/brand.png';
import SearchIcon from '../../assets/search-close.png';
import Menu from '../../assets/menu-close.png';

class Header extends Component {
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

  inputChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleClickSearchNews(e) {
    e.preventDefault();
  }

  render() {
    const { search, menuClass } = this.state;
    return (
      <Fragment>
        {!search ? (
          <Container>
            <button type="button" className="menu" onClick={this.handleClickOpenMenu}>
              <img src={Menu} alt="menu" className="menu-image" />
            </button>
            <div className={menuClass}>
              <ul className="items">
                <li className="item">Notícias em Destaque</li>
                <li className="item">Notícias do Brasil</li>
                <li className="item">Notícias do EUA</li>
                <li className="item">Notícia da Argentina</li>
                <li className="item">Notícia da França</li>
              </ul>
              <CloseMenu>
                <button type="button" onClick={this.handleClickCloseMenu}>
                  X
                </button>
              </CloseMenu>
            </div>
            <img src={Brand} alt="brand" className="brand" />
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
                <input type="text" placeholder="Pesquisa" onChange={e => this.inputChange(e)} />
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

export default Header;
