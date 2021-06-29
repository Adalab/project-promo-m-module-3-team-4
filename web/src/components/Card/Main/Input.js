import React from "react";

function Input(props) {
  const handleInput = (ev) => {
    props.handleInput(props.name, ev.target.value);
  };

  return (
    <>
      <label htmlFor={props.id} className="label">
        {props.labelText}
      </label>
      <input
        onChange={handleInput}
        className={`input ${props.fillClass}`}
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        required
        value={props.value}
      />
    </>
  );
}

export default Input;
