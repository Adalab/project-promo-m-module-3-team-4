import React from "react";
import "../../../stylesheets/layout/_profile.scss";

function Reset(props) {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="container-profile__resetbutton" onClick={handleReset}>
      <i className="far fa-trash-alt"></i>
      <h3 className="container-profile__resetbutton__text js-reset">reset</h3>
    </button>
  );
}

export default Reset;
