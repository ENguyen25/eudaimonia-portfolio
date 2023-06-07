import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-three-fifths about-first-column">
          <section className="section">
            <h1 className="title header-1">About Me</h1>
            <p className="regular-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section className="section">
            <h2 className="title header-2">My Philosophy</h2>
            <p className="regular-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section className="section">
            <h2 className="title header-2">My Vision</h2>
            <p className="regular-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
        <div className="column about-second-column">
          <picture>
            <source media="(max-width: 769px)" srcset="https://images.unsplash.com/photo-1625980953551-50502b3b8b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvdHVzJTIwZmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            <img src="https://images.unsplash.com/photo-1562647017-7d25504253a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGxvdHVzJTIwZmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="lotus flower" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
