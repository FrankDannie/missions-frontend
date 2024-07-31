import React from 'react';
import './Header.css';
import Labels from '../common/labels';

const Header = () => (
  <header className="header">
    <h1>{Labels.ORGANOZATION_NAME}</h1>
  </header>
);

export default Header;
