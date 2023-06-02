import React from 'react';
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const Blog = () => {
  
  const [blogPosts, setBlogPosts] = useState([]);

  const client = createClient({space: "auxbdc5uqthn", accessToken: "fg4gnvrqr0Fi8tUtBSZ3ic5aiSkf-hU6nYBHvTYcGdc"})

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries)
          setBlogPosts(entries)
        })
      } catch (error) {
        console.log("error")
      }
    }

    getAllEntries();
  })

  return (
    <div>Blog</div>
  )
}

export default Blog