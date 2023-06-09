import React from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const Card = (props) => {

  const postId = props.data.sys.id
  const entryTitle = props.data.fields.title;
  const entryImage = props.data.fields.featuredImage.fields.file.url;
  const entryContent = props.data.fields.content.content[0].content[0].value
  const entryPreview = entryContent.slice(0,200);
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
        <time className="date">{publishedDate}</time>
        <div className="media">
          <div className="media-content">
            <p className="title is-3">{entryTitle}</p>
          </div>
        </div>
        <div className="content">{entryPreview}...</div>
        <button className="card-button button"><Link to={`/blog/${postId}`}>Read More</Link></button>
      </div>
    </div>
  );
};

export default Card;
