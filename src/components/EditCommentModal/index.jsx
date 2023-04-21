import React from "react";
import { CommentForm } from "../CommentForm";
import "./index.css";

export const EditCommentModal = ({ contentModal, setShowModal, refreshPost }) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="edit-comment">
      <div className="modal-content">
        <div className="modal-header">
        <h2>Edit Comment</h2>
          <span onClick={() => closeModal()} className="close">
            &times;
          </span>
        </div>
        <div className="modal-body">
          <CommentForm refreshPost={refreshPost} contentComment={contentModal} closeModal={closeModal}/>
        </div>
      </div>
    </div>
  );
};
