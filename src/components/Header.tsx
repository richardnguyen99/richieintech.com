/**
 * Header component from my Gatsby application
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React from "react";

import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <nav id="main-header" className="Navbar">
      <div className="Container">
        <a href="/" className="Navbar__brand">
          <Logo />
        </a>
        <ul className="Navbar__nav pl-0">
          <li className="Navbar__item">Hello</li>
          <li className="Navbar__item">Hello</li>
          <li className="Navbar__item">Hello</li>
        </ul>
        <div className="Navbar__collapse">
          <ul className="Navbar__nav ml-auto">
            <li className="Navbar__item">Hello</li>
            <li className="Navbar__item">Hello</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
