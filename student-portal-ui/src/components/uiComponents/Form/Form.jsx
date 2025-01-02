import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

function Form({formLabel}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>{formLabel}</h1>
      <InputWithLabel
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <InputWithLabel
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={() => alert(`Name: ${name}, Email: ${email}`)}>
        Submit
      </button>
    </div>
  );
}

export default Form;
