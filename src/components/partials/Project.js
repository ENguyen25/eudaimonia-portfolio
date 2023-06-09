import React from "react";
import { Slide } from "react-reveal";

const Project = (props) => {

  const name = props.data.name;
  const description = props.data.description;
  const tech = props.data.technologies;
  const github = props.data.github;
  const url = props.data.url;

  return (
    <Slide bottom>
      <div className="overlay-container">
        <img
          className="project-thumbnail"
          src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="nature landscape"
        />
        <div className="overlay px-6 py-6 is-flex is-flex-direction-column is-justify-content-end">
          <h2 className="title is-size-3 is-family-sans-serif is-uppercase">{name}</h2>
          <p className="is-size-5">{description}</p>
          <p className="is-size-5 py-3">Technologies: {tech}</p>
          <div className="is-flex is-justify-content-center">
            <button className="site-button button mr-5"><a href={github}>Source Code</a></button>
            <button className="site-button button"><a href={url}>Demo</a></button>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Project;
