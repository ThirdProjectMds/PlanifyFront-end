import React, { useEffect, useState } from "react";
import { CardPost } from "../../../components/CardPost";
import { getPosts } from "../../../services/PostService";
import "./index.css"

export const PostList = ({}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="post-list">
    {posts.map((post)=>{
      return <CardPost data={post} key={post.id}/>
    })}
  
  </div>
  )
};
