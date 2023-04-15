import React, { useState } from "react";
import { useFormik } from "formik";
import { commentSchema } from "../../utils/schemas/comment.schema";
import { comment } from "../../services/CommentService";
import { Input } from "../Input";
import { FormControl } from "../FormControl";
import { useParams } from "react-router-dom";
import "./index.css";

export const CommentForm = ({ postId, refreshPost }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams;
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const userId = await comment(postId, id, values.content);
      resetForm();
      setSuccess(true);
      refreshPost()
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
    initialValues: { content: "" },
    validationSchema: commentSchema,
    onSubmit,
  });

  return (
    <div className="CommentForm">
      <h6>Add Comment</h6>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">Comment added successfully!</div>
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
          {isSubmitting ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
};
