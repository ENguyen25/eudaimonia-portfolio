import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar is-fixed-top">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
            </div>
          </div>
          <div className="navbar-end">
            <a href="/about" className="navbar-item nav-links">about</a>
            <a href="/work" className="navbar-item nav-links">work</a>
            <a href="/blog" className="navbar-item nav-links">blog</a>
            <a href="/contact" className="navbar-item nav-links">contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
