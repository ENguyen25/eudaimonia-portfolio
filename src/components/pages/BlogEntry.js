import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import moment from "moment/moment";

const BlogEntry = () => {
    
  let { id } = useParams();

  const client = createClient({
    space: "auxbdc5uqthn",
    accessToken: "fg4gnvrqr0Fi8tUtBSZ3ic5aiSkf-hU6nYBHvTYcGdc",
  });

  const [singleBlogPost, setSingleBlogPost] = useState([]);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setSingleBlogPost(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

  return (
    <div className="container general-container">
      <section className="section">
        <img src={singleBlogPost?.fields?.featuredImage?.fields?.file?.url} alt="trees" />
        <h1 className="title is-size-1 is-family-sans-serif is-uppercase has-text-weight-light mt-5 mb-1">{singleBlogPost?.fields?.title}</h1>
        <p className="is-size-6 is-family-sans-serif mb-5">{
          moment(singleBlogPost?.fields?.publishedDate).format("MMMM D, Y")  
        }</p>
        <p className="is-size-5">{singleBlogPost?.fields?.content?.content[0].content[0].value}</p>
      </section>
    </div>
  );
};

export default BlogEntry;
