import React, { useContext, useState } from "react";
import { deleteCommment } from "../../services/CommentService";
import "./index.css";
import { EditCommentModal } from "../EditCommentModal";
import AuthContext from "../../contexts/AuthContext";

export const CommentList = ({ comments, refreshPost }) => {
  const [showModal, setShowModal] = useState(false);
  const [contentComment, setContentComment] = useState({});
  const { currentUser } = useContext(AuthContext);
  const handleEditComment = (postId, commentId, commentContent) => {
    setContentComment({ postId, commentId, commentContent });
    setShowModal(true);
  };
  const isMyComment = (comment) => {
    return currentUser?.id === comment.author.id;
  };

  return (
    <div className="comment-list">
      {!comments
        ? ""
        : comments.map((comment) => {
            return (
              <div className="card-list" key={comment._id}>
                <div className="info-user">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.firstName}
                  />
                  <span>{comment.author.firstName}</span>
                  {isMyComment(comment) && (
                    <div className="btn">
                      <button
                        onClick={() =>
                          handleEditComment(
                            comment.postId,
                            comment._id,
                            comment.content
                          )
                        }
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        onClick={() =>
                          deleteCommment(comment._id, refreshPost())
                        }
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  )}
                </div>
                <li>
                  <p>{comment.content}</p>
                </li>
              </div>
            );
          })}
      {showModal && (
        <EditCommentModal
          refreshPost={refreshPost}
          contentModal={contentComment}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};
