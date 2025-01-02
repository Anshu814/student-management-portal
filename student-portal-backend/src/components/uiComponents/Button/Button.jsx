import React from "react";
import "./Button.css";

const Button = ({ text, onClick, borderless, type = "button", className = "", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${borderless ? "btn-borderless" : "btn-with-border"} ${className} ${disabled ? "btn-disabled" : ""}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
