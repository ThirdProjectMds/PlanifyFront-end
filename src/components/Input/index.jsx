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
  options = [], // nuevo
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
  if (type === "textarea") {
    return <textarea rows={rows} disabled={disabled} {...commonProps} />;
  } else if (type === "select") { // nuevo
    return (
      <select
        {...commonProps}
        disabled={disabled}
        className={`form-control ${error ? "is-invalid" : ""}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <input
        type={type}
        min={min}
        max={max}
        disabled={disabled}
        {...commonProps}
      />
    );
  }
};
