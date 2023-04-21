import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postDetail } from "../../../services/PostService";
import { CommentForm } from "../../../components/CommentForm";
import "./index.css";
import { CommentList } from "../../../components/CommentList";

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const fecthPostDetail = useCallback(()=> {
    postDetail(id)
    .then((post) => {
      setPost(post);
  
    })
    .catch((err) => console.log(err));
  }, [])
  useEffect(() => {
    fecthPostDetail()
  }, [fecthPostDetail]);

  return (
    <div className="post-detail">
      <img src={post.image} />
      <h3>{post.title}</h3>
      <div className="details">
        <h6>
          <b>Category:</b> {post.category}
        </h6>
        <h6>
          <b>Type:</b> {post.type}
        </h6>
      </div>

      <div>
      <CommentForm refreshPost={fecthPostDetail} postId={post.id}   />
      <CommentList refreshPost={fecthPostDetail} comments={post?.comments} />
      </div>
      </div>
      );
    };
    
   
    