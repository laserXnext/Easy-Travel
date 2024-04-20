import React, { useState } from 'react';
import Logo from './assets/easy-travel-landscape.png';
import './css/navbar.css';
import './assets/icon.css';
import './assets/font.css';
import { Link } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import { Toggle } from "./component/theme";

function Navbar() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);


  // const handleSearchIconClick = () => {
  //   setIsOpenSearch(!isOpenSearch);
  //   setIsOpenNav(false);
  // };

  const handleNavOpenBtnClick = () => {
    setIsOpenNav(true);
    setIsOpenSearch(false);
  };
  


  return (
    <nav className={`nav ${isOpenSearch ? 'openSearch' : ''} ${isOpenNav ? 'openNav' : ''}`} data-theme={isDark ? 'dark' : 'light'}>
      <i className="uil uil-bars navOpenBtn" onClick={handleNavOpenBtnClick}></i>
      <Link to="/" className="nav-logo"><img src={Logo} alt="Logo" /></Link>
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/srilanka" className="nav-item"><i className="uil uil-location-point icon_1"></i>Sri-Lanka</Link></li>
        <li><Link to="/hotel" className="nav-item"><i className="uil uil-bed-double icon_1"></i>Hotels</Link></li>
      </ul>
      {/* <i className={`uil ${isOpenSearch ? 'uil-times' : 'uil-search'} search-icon`} id="searchIcon" onClick={handleSearchIconClick}></i>
      <div className="search-box">
        <form>
          <i className="uil uil-search search-icon"></i>
          <input type="search" placeholder="Search here..." name="search" />
          <input type="hidden" name="search-submit" />
        </form>
      </div> */}
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </nav>
  );
}

export default Navbar;