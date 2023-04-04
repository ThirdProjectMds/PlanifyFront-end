import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postDetail } from "../../../services/PostService";
import { CardPost } from "../../../components/CardPost";
import "./index.css";
export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <h6><b>Categoría:</b> {post.category}</h6>
        <h6><b>Tipo:</b> {post.type}</h6>

      </div>
    </div>
  );
};
