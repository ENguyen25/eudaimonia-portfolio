import React from "react";
import moment from "moment/moment";

const Card = (props) => {
  const entryTitle = props.data.fields.title;
  const entryImage = props.data.fields.featuredImage.fields.file.url;
  const publishedDate = moment(props.data.fields.publishedDate).format(
    "MMMM D, Y"
  );

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={entryImage} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{entryTitle}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time>{publishedDate}</time>
        </div>
      </div>
    </div>
  );
};

export default Card;
