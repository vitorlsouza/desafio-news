import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Nav, Items, Item,
} from './styles';

const Navigation = () => (
  <Container>
    <Nav>
      <Items>
        <Link to="/" className="link">
          <Item>Notícias em Destaque</Item>
        </Link>
        <Link to="/brasil" className="link">
          <Item>Notícias do Brasil</Item>
        </Link>
        <Link to="/eua" className="link">
          <Item>Notícias do EUA</Item>
        </Link>
        <Link to="/argentina" className="link">
          <Item>Notícias da Argentina</Item>
        </Link>
        <Link to="/franca" className="link">
          <Item>Notícias da França</Item>
        </Link>
      </Items>
    </Nav>
  </Container>
);

export default Navigation;
