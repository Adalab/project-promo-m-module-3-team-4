import defaultAvatar from "../../../images/img-default.jpg";
import "../../../stylesheets/core/_variables.scss";
import "../../../stylesheets/layout/_profile.scss";
import Profile from "./Profile";

function Preview(props) {
  return (
    <section className="container-profile">
      <div>
        <button className="container-profile__resetbutton">
          <i className="far fa-trash-alt"></i>
          <h3 className="container-profile__resetbutton__text js-reset">
            reset
          </h3>
        </button>

        <div className="container-profile__containercard">
          <div className="profile__name">
            <h2 className="container-profile__containercard__name js-nameProfile">
              {props.name === "" ? "Nombre Apellido" : props.name}
            </h2>
            <h3 className="container-profile__containercard__profesion js-rolProfile">
              {props.job === "" ? "Frontend Developer" : props.job}
            </h3>
          </div>

          <Profile image={props.image} />

          <div className="container-profile__containerrrss">
            <a
              href={`phone${props.phone}`}
              target="_blank"
              className="container-profile__containerrrss__rrss js-phone"
            >
              <i className="fas fa-mobile-alt"></i>
            </a>
            <a
              href={`mail${props.mail}`}
              target="_blank"
              className="container-profile__containerrrss__rrss js-mail"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href={`linkedin${props.linkedin}`}
              target="_blank"
              className="container-profile__containerrrss__rrss js-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={`Github${props.github}`}
              target="_blank"
              className="container-profile__containerrrss__rrss js-github"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Preview };
