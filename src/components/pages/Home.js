import React from "react";
import Project from "../partials/Project";

const Home = () => {
  return (
    <div className="container general-container">
      <section className="section">
        <div className="columns">
          <div className="column is-three-fifths">
            <h1 className="small-title">Info</h1>
            <p className="large-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="column home-second-column">
            <h1 className="small-title">What I Do</h1>
            <ul>
              <li className="regular-text">Entrepreneurship</li>
              <li className="regular-text">Business Development</li>
              <li className="regular-text">Web Development</li>
              <li className="regular-text">Web Design</li>
              <li className="regular-text">DE&I Strategy</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title header-2">Web Design & Development</h1>
        <div className="columns">
          <div className="column is-half project-column">
            <Project />
          </div>
          <div className="column is-half project-column"></div>
        </div>
      </section>
      <section className="section">
        <h1 className="title header-2">
          Entrepreneurship & Business Development
        </h1>
        <div className="columns">
          <div className="column is-half project-column"></div>
          <div className="column is-half project-column"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
