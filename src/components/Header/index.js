import React from 'react';

import { Container } from './styles';

import Brand from '../../assets/brand.png';
import Search from '../../assets/search-close.png';
import Menu from '../../assets/menu-close.png';

const Header = () => (
  <Container>
    <img src={Menu} alt="menu" className="menu" />
    <img src={Brand} alt="brand" className="brand" />
    <img src={Search} alt="search" className="search" />
  </Container>
);

export default Header;
