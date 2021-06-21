import React from "react";

function Palettes(props) {
  const handleClick = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      checked={props.checked}
      className="js-palette "
      onChange={handleClick}
    />
  );
}

export { Palettes };
