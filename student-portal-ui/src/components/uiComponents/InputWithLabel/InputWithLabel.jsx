import React from "react";
import './InputWithLabel.css';

function InputWithLabel({ label, type = "text", value,name, onChange, placeholder,errorText }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorText && <span className="error-message">{errorText}</span>}
    </div>
  );
}

export default InputWithLabel;
