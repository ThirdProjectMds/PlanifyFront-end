import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { deletePost, like } from "../../services/PostService";
import AuthContext from "../../contexts/AuthContext";

export const CardPost = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState(data.likes.includes(currentUser?.id));
  const [likesCount, setLikesCount] = useState(data.likes.length);

  const handleLike = async () => {
    await like(data?.id, currentUser?.id);
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
          <p>{data.direction}</p>
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
            {liked ? <span>🧡</span> : <span>🧡</span>} {likesCount}
          </Link>
        </div>
      </div>
    </div>
  );
};
