import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { postDetail } from "../../../services/PostService";
import "./index.css";
export const PostDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    postDetail(id)
      .then((post) => {
        setPost(post);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="post-detail">
      <img src={post.image} />
      <h3>{post.title}</h3>
      <div className="details">
      <h6><b>Category:</b> {post.category}</h6>
        <h6><b>Type:</b> {post.type}</h6>

      </div>
    </div>
  );
};
