import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import SearchBar from '../Nav/SearchBar';
import './Nav.css';
import '../About/About';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-nav">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logo" src={Logo} width="40" height="40" className="d-inline-block align-top" alt="" />
          Hour of Time
        </span>
      </Link>
      <Link className="btn btn-outline-info btn-about-me" to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
