import "../../../stylesheets/core/_variables.scss";
import "../../../stylesheets/layout/_profile.scss";
import "../../../stylesheets/layout/_form.scss";
import Profile from "./Profile";
import Reset from "./Reset";

function Preview(props) {
  return (
    <section className="container-profile">
      <div>
        <Reset handleReset={props.handleReset} />
        <div className={`container-profile__containercard js-palette2`}>
          <div className={`profile__name palette${props.palette}__line`}>
            <h2
              className={`container-profile__containercard__name js-nameProfile palette${props.palette}__color2`}
            >
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
              className={`container-profile__containerrrss__rrss js-phone palette${props.palette}__circle`}
            >
              <i className="fas fa-mobile-alt"></i>
            </a>
            <a
              href={`mailto:${props.email}`}
              target="_blank"
              className={`container-profile__containerrrss__rrss js-mail palette${props.palette}__circle`}
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href={`linkedin${props.linkedin}`}
              target="_blank"
              className={`container-profile__containerrrss__rrss js-linkedin palette${props.palette}__circle`}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={`Github${props.github}`}
              target="_blank"
              className={`container-profile__containerrrss__rrss js-github palette${props.palette}__circle`}
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
