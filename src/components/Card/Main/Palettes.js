import React from "react";
function Palettes(props) {
  const handleClick = (event) => {
    props.handleClick(event.target.value);
  };
  return (
    <input
      handleClick={props.handleclick}
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
