import React from 'react';
import Logo from './Logo';
import ResponsiveMenu from './ResponsiveMenu';

const Header = () => (
  <nav className="uk-navbar-container uk-navbar uk-width-1-1" uk-sticky="true">
    <div className="uk-navbar-left">
      <Logo />
    </div>
    <div className="uk-navbar-right">
      <ResponsiveMenu />
    </div>
  </nav>
);

export default Header;
