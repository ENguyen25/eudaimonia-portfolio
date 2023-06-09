import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Card from "../partials/Card";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const client = createClient({
    space: "auxbdc5uqthn",
    accessToken: "fg4gnvrqr0Fi8tUtBSZ3ic5aiSkf-hU6nYBHvTYcGdc",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries.items);
          setBlogPosts(entries.items);
        });
      } catch (error) {
        console.log("error");
      }
    };

    getAllEntries();
  }, []);

  return (
    <div className="container general-container">
      <section className="section">
        <h1 className="title is-size-1 is-family-sans-serif is-uppercase has-text-weight-light">Blog</h1>
        <div className="flex-wrap-content">
          {blogPosts.map((items) => {
            return <Card key={items.sys.id} data={items} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Blog;
