import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { deletePost } from "../../services/PostService";
import AuthContext from "../../contexts/AuthContext";
import { dislike, like } from "../../services/LikeService";

export const CardPost = ({ data, pageLike = false, disable = false}) => {
  const { currentUser } = useContext(AuthContext);
  const [liked, setLiked] = useState(data.likes?.some(like=> like.author.id === currentUser?.id));
  const [likesCount, setLikesCount] = useState(data.likes?.length || 0)
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShare = () => {
    const shareableLink = `https://p3planify.netlify.app/posts/${data.id}`;
    navigator.share({ url: shareableLink });
  };
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
          <i aria-label="More Information" title="More Information"className="fa-solid fa-circle-info"></i>
          </Link>

          {isMyPost(data) && (
            <>
              <Link to={`/post/edit/${data.id}`} className="btn">
              <i aria-label="Edit" title="Edit" className="fa-solid fa-pen-to-square"></i>
              </Link>

              <button onClick={() => setShowConfirm(true)} className="btn">
               <i  aria-label="Delete" title="Delete" className="fa-regular fa-trash-can"></i>
              </button>
            </>
          )}

         
          {!disable && (
            <button onClick={handleLike} className="btn" disabled={pageLike}>
              {liked || pageLike ? (
                <span aria-label="Like" title="Like" className="heart-icon">🧡</span>
              ) : (
                <span>
                  <i aria-label="Like" title="Like"className="heart-icon fa-regular fa-heart"></i>
                </span>
              )}
              {likesCount}
            </button>
          )}

          <button onClick={handleShare} className="btn">
          <i aria-label="Share" title="Share" className="fa-solid fa-share"></i>
        </button>
        </div>
      </div>
      {showConfirm && (
        <div className="confirm-popup">
        <div className="bg-popup">
        <p>¿Are you sure?</p>
        <div>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirm(false)}>No</button>
        </div>
        
        </div>
        </div>
      )}
    </div>
    
  );
};