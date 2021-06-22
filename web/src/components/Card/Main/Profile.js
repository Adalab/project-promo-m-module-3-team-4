import React from "react";
import defaultAvatar from "../../../images/img-default.jpg";

function Profile(props) {
  const avatar = props.image === "" ? defaultAvatar : props.image;
  return (
    <div
      className="container-profile__containercard__img js__profile-image"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

export default Profile;
