import React, { useState } from "react";
import { deleteCommment } from "../../services/CommentService";
import "./index.css";
import { EditCommentModal } from "../EditCommentModal";

export const CommentList = ({ comments}) => {
  const [showModal, setShowModal] = useState(false);
  const [contentComment, setContentComment] = useState({});

  const handleEditComment = (postId, commentId, commentContent) => {
    setContentComment({ postId, commentId, commentContent });
    setShowModal(true);
  };

  return (
    <div className="comment-list">
      {!comments
        ? ""
        : comments.map((comment) => {
            return (
              <div className="card-list" key={comment._id}>
                <div className="info-user">
                  <img src={comment.author.avatar} alt={comment.author.firstName} />
                  <span>{comment.author.firstName}</span>
                </div>
                <li>
                  <p>{comment.content}</p>
                </li>
                <div className="btn">
                  <button
                    onClick={() =>
                      handleEditComment(comment.postId, comment._id, comment.content)
                    }
                    
                  >
                    🖊️
                  </button>

                  <button onClick={() => deleteCommment(comment._id)}>🗑️</button>
                </div>
              </div>
            );
          })}
      {showModal && (
        <EditCommentModal contentModal={contentComment} setShowModal={setShowModal} />
      )}
    </div>
  );
};
