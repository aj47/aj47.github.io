import React, { Component } from "react";

import logo from '../../img/logo.png';
import FlatButton from '../FlatButton/FlatButton';
import LanguageIcon from '../../img/languages.svg';
import MyGov from './mygov-logo.svg';
import SearchIcon from '../Services/search.png';

const borderStyle = {
  borderBottom: '1px solid #80808033'
}

class TopBar extends Component {
  render() {
    return (
      <div >
        <div className="top-bar">
          <a href="/"> <img src={logo} alt="Home" className='main-logo'/> </a>
          <div className="top-search-row">
            <input type="text" name="topSearch" className="top-search-bar"/>
            <button className="top-search-button"> <img src={SearchIcon} /> </button>
            <img src={MyGov} className="mygov-icon"/>

            <img src={LanguageIcon} className="language-icon"/>

          </div>

        </div>
      </div>
    )
  }
}

export default TopBar;
