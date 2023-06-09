import React from "react";

const Project = (props) => {

  const name = props.data.name;
  const description = props.data.description;
  const tech = props.data.technologies;
  const github = props.data.github;
  const url = props.data.url;

  return (
    <div className="overlay-container">
      <img
        className="project-thumbnail"
        src="https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="nature landscape"
      />
      <div className="overlay">
        <h1 className="title header-2 blog-entry-header">{name}</h1>
        <p>{description}</p>
        <p>Technologies: {tech}</p>
        <button className="card-button button"><a href={github}>Source Code</a></button>
        <button className="card-button button"><a href={url}>Demo</a></button>
      </div>
    </div>
  );
};

export default Project;
