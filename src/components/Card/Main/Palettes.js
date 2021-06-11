import React from "react";
function Palettes(props) {
  const handleClick = (event) => {
    props.handleClick(event.currentTarget.value);
  };
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      checked={props.value}
      className="js-palette1"
      onChange={handleClick}
    />
  );
}

export { Palettes };
