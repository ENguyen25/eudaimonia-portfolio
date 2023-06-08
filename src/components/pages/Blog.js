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

  const posts = [{ id: 1, text: "hello world" }];

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
      <h1 className="title header-1">Blog</h1>
      <div className="blog-list-container">
        {blogPosts.map((items) => {
          return <Card key={items.sys.id} data={items} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
