// src/components/AddPlayerForm.js
import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setname] = useState()
  const inputName = event => {
    console.log("new input .value:", event.target.value);
    setname(event.target.value)
  }
  const onClickAdd = () => {
    props.add(name);
    setname("")
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input type="text" 
        placeholder="Name" 
        value={name} 
        onChange={inputName} />{" "}
        <button onClick={onClickAdd}>Add</button>
      </p>
    </div>
  );
  }