import React, { useState } from "react";
import "./script.js"

const Header = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a onClick={() => {setIsActive(!isActive)}}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
          </div>

          <div className="navbar-end">
            <a class="navbar-item nav-links">about</a>
            <a class="navbar-item nav-links">work</a>
            <a class="navbar-item nav-links">blog</a>
            <a class="navbar-item nav-links">contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
