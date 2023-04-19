import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { deletePost } from "../../services/PostService";
import AuthContext from "../../contexts/AuthContext";
import { dislike, like } from "../../services/LikeService";

export const CardPost = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState(
    localStorage.getItem(`liked:${data.id}`) === "true" ||
      data.likes.includes(currentUser?.id)
  );
  const [likesCount, setLikesCount] = useState(data.likes.length);

  useEffect(() => {
    localStorage.setItem(`liked:${data.id}`, liked);
  }, [liked]);

  const handleLike = async () => {
    if (liked) {
      await dislike(data?.id, currentUser?.id);
    } else {
      await like(data?.id, currentUser?.id);
    }

    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleDelete = async () => {
    try {
      await deletePost(data.id);
      window.location.reload(); // Recarga la página para actualizar la lista de posts
    } catch (error) {
      console.log(error);
    }
  };

  const isMyPost = (post) => {
    return currentUser?.id === post.author.id;
  };

  return (
    <div className="Card">
      <div className="image-place">
        <img src={data.image} />
      </div>
      <div className="card-info">
        <div className="info-user">
          <img src={data.author.avatar} />
          <a href="/profile">{data.author.firstName}</a>
        </div>
        <div className="text-card">
          <h4>{data.title}</h4>
          <p className="description">{data.description}</p>
          <Link
            className="link-google"
            to={`http://maps.google.com/?q=${data.direction}`}
          >
            {data.direction}
          </Link>
        </div>
        <div className="btn-card">
          <Link to={`/posts/${data.id}`} className="btn">
            ➕
          </Link>

          {isMyPost(data) && (
            <>
              <Link to={`/post/edit/${data.id}`} className="btn">
                🖊️
              </Link>
              <Link onClick={handleDelete} className="btn">
                🗑️
              </Link>
            </>
          )}
          <Link onClick={handleLike} className="btn">
            {liked ? (
              <span>🧡</span>
            ) : (
              <span>
                <i className="fa-regular fa-heart"></i>
              </span>
            )}
                 {likesCount}
          </Link>
        </div>
      </div>
    </div>
  );
};