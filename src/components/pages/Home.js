import React from "react";
import { Link } from "react-router-dom";
import Project from "../partials/Project";
import projects from "../../projects.json";

const Home = () => {
  return (
    <div className="container general-container">
      <section className="section">
        <div className="columns">
          <div className="column is-three-quarters pr-6">
            <h1 className="title is-size-7 is-uppercase is-family-sans-serif">
              Info
            </h1>
            <p className="is-size-3-desktop is-size-4-mobile is-family-primary mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="button site-button mb-6">
              <Link to="/about">Read More</Link>
            </button>
          </div>
          <div className="column">
            <h1 className="title is-size-7 is-uppercase is-family-sans-serif">
              What I Do
            </h1>
            <ul>
              <li className="is-size-5-desktop is-size-4-mobile">
                Entrepreneurship
              </li>
              <li className="is-size-5-desktop is-size-4-mobile">
                Business Development
              </li>
              <li className="is-size-5-desktop is-size-4-mobile">
                Web Development
              </li>
              <li className="is-size-5-desktop is-size-4-mobile">Web Design</li>
              <li className="is-size-5-desktop is-size-4-mobile">
                DE&I Strategy
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title is-size-1-desktop is-size-3-mobile is-family-sans-serif is-uppercase has-text-weight-light">
          Web Design & Development
        </h1>
        <div className="flex-wrap-content">
          {projects.map((project) => {
            return <Project key={project.id} data={project} />;
          })}
        </div>
      </section>
      <section className="section">
        <h1 className="title is-size-1-desktop is-size-3-mobile is-family-sans-serif is-uppercase has-text-weight-light">
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
