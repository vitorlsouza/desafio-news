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
  };

  handleClickSearch() {
    this.setState({ search: !this.state.search });
  }

  handleClickOpenMenu = () => {
    this.setState({ menuClass: 'itemsDiv -active' });
  };

  handleClickCloseMenu = () => {
    this.setState({ menuClass: 'itemsDiv' });
  };

  render() {
    return (
      <Fragment>
        {!this.state.search ? (
          <Container>
            <button type="button" className="menu" onClick={this.handleClickOpenMenu}>
              <img src={Menu} alt="menu" className="menu-image" />
            </button>
            <div className={this.state.menuClass}>
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
              <button type="button" onClick={e => this.handleClickSearch()}>
                <img src={SearchIcon} alt="search" className="search" />
              </button>
            </SearchClose>
          </Container>
        ) : (
          <Container>
            <SearchOpen>
              <button type="button">
                <img src={SearchIcon} alt="search" className="search" />
              </button>
              <input type="text" placeholder="Pesquisa" />
            </SearchOpen>
            <Close>
              <button type="button" onClick={e => this.handleClickSearch()}>
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
