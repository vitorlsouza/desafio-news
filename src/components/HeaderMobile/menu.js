import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { CloseMenu, Separator } from './styles';

const Menu = ({ toggleMenu }) => (
  <div id="menu" className="itemsDiv">
    <ul className="items">
      <button type="button" className="item" onClick={() => toggleMenu('close')}>
        <Link to="/" className="link">
          <li>Notícias em Destaque</li>
        </Link>
      </button>
      <Separator />
      <button type="button" className="item" onClick={() => toggleMenu('close')}>
        <Link to="/brasil" className="link">
          <li>Notícias do Brasil</li>
        </Link>
      </button>
      <Separator />
      <button type="button" className="item" onClick={() => toggleMenu('close')}>
        <Link to="/eua" className="link">
          <li>Notícias do EUA</li>
        </Link>
      </button>
      <Separator />
      <button type="button" className="item" onClick={() => toggleMenu('close')}>
        <Link to="/argentina" className="link">
          <li>Notícia da Argentina</li>
        </Link>
      </button>
      <Separator />
      <button type="button" className="item" onClick={() => toggleMenu('close')}>
        <Link to="/franca" className="link">
          <li>Notícia da França</li>
        </Link>
      </button>
    </ul>
    <CloseMenu>
      <button type="button" onClick={() => toggleMenu('close')}>
        X
      </button>
    </CloseMenu>
  </div>
);

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
