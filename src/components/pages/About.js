import React from "react";

const About = () => {
  return (
    <div className="container general-container">
      <div className="columns">
        <div className="column is-three-fifths mt-6">
          <section className="section about-first-column">
            <h1 className="title is-size-1-desktop is-size-3-mobile is-family-sans-serif is-uppercase has-text-weight-light">About Me</h1>
            <p className="is-size-5">
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
            <h2 className="title is-size-1-desktop is-size-3-mobile is-family-sans-serif is-uppercase has-text-weight-light">My Philosophy</h2>
            <p className="is-size-5">
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
            <h2 className="title is-size-1-desktop is-size-3-mobile is-family-sans-serif is-uppercase has-text-weight-light">My Vision</h2>
            <p className="is-size-5">
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
        <div className="column about-second-column mt-6">
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
