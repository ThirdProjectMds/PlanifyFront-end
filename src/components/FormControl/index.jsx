import React from "react";

export const FormControl = ({ children, text, htmlFor, error }) => {
  return (
    <div className="FormControl">
      <label htmlFor={htmlFor} className="form-label">
        {text}
      </label>
      {children}
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};
