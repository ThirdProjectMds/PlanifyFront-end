import React, { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { getPosts } from "../../services/PostService";
import "./index.css"

export const Home = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Home">
    {posts.map((post)=>{
      return <Post data={post} key={post.id}/>
    })}
  
  </div>
  )
};
