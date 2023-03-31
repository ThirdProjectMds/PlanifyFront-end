import React from "react";

export const Input = ({
  type = "text",
  value,
  onChange,
  onBlur,
  id,
  name,
  placeholder,
  rows = 3,
  error,
  min,
  max,
  disabled = false,
}) => {
  const commonProps = {
    value,
    onChange,
    id,
    name,
    placeholder,
    onBlur,
    className: `form-control ${error ? "is-invalid" : ""}`,
  };
  return (
    <input
      type={type}
      min={min}
      max={max}
      disabled={disabled}
      {...commonProps}
    />
  )
};
