import React from "react";

function Input({label, name, value, error, type, onChange}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        className="form-control"
      />
      {error && <div className="alert alert-danger">
          {error}</div>}
    </div>
  );
}

export default Input;
