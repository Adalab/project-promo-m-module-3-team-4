import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../../images/img-default.jpg";

class GetAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();

    this.myFileField = React.createRef();

    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  uploadImage(ev) {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];

      this.fr.addEventListener("load", this.getImage);

      this.fr.readAsDataURL(myFile);
    }
  }

  getImage() {
    const image = this.fr.result;

    this.props.updateAvatar(image);
  }

  render() {
    const avatar = this.props.image === "" ? defaultAvatar : this.props.image;
    return (
      <div className="fill__contact">
        <label className="js__profile-trigger" type="button">
          Get avatar!
          <input
            type="file"
            ref={this.myFileField}
            className="js_input fill__contact-image js__profile-upload-btn"
            onChange={this.uploadImage}
          />
        </label>

        <div
          className="js__profile-preview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    );
  }
}
GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};
export default GetAvatar;
