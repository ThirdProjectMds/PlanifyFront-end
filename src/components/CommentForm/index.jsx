import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { commentSchema } from "../../utils/schemas/comment.schema";
import { comment, editComment } from "../../services/CommentService";
import { Input } from "../Input";
import { FormControl } from "../FormControl";
import "./index.css";
import AuthContext from "../../contexts/AuthContext";

export const CommentForm = ({ postId, refreshPost, contentComment , closeModal}) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  
    const onSubmit = async (values, { resetForm, setSubmitting }) => {
      try {
        if (contentComment) {
          await editComment(contentComment.postId,contentComment.commentId, values.content);
          closeModal()
        } else {
          await comment(postId, currentUser?._id , values.content);
        }
        resetForm();
        refreshPost()

        setSuccess(true);
      } catch (err) {
        setError(err.message);
      }
      setSubmitting(false);
    };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      content: contentComment?.commentContent || ""
    },
    validationSchema: commentSchema,
    onSubmit,
  });

  const submitButtonText = contentComment ? "Save" : "Create";

  return (
    <div className="CommentForm">
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">Comment {contentComment ? "updated" : "added"} successfully!</div>
      )}
      <form className="form-comment" onSubmit={handleSubmit}>
        <FormControl
          htmlFor="content"
          error={touched.content && errors.content}
        >
          <Input
            type="textarea"
            name="content"
            id="content"
            placeholder="Write your comment here"
            rows={3}
            error={touched.content && errors.content}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
        </FormControl>
        <button
          type="submit"
          className="button-5 btn-form"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : submitButtonText}
        </button>
      </form>
    </div>
  );
};