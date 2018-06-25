import React from 'react';
import logo from '../logo.svg';

const Header = (props) => (
  <header className="header-area">
    <img className="header-img" src={logo} alt="Logo" />
    <h1 className="header-title">{props.title}</h1>
    {props.subtitle && <h2 className="header-subtitle">{props.subtitle}</h2>}
  </header>
);

Header.defaultProps = {
  title: 'TO DO WITH REACT JS'
}

export default Header;