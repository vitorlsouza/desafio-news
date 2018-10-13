import React, { Component, Fragment } from 'react';

import {
  Container, SearchClose, SearchOpen, Close,
} from './styles';

import Brand from '../../assets/brand.png';
import SearchIcon from '../../assets/search-close.png';
import Menu from '../../assets/menu-close.png';

class Header extends Component {
  state = {
    search: false,
  };

  handleClickSearch() {
    this.setState({ search: !this.state.search });
    console.log('teste');
  }

  render() {
    return (
      <Fragment>
        {!this.state.search ? (
          <Container>
            <img src={Menu} alt="menu" className="menu" />
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
