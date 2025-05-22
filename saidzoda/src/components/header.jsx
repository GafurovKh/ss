import  { useState } from 'react';
import Menu from "./menu";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Адибони классикии форсу точик</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {menuOpen && <Menu />}
    </header>
  );
};

export default Header;
