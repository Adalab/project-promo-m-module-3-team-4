import imgDefault from "../../../images/img-default.jpg";
import "../../../stylesheets/core/_variables.scss";
import "../../../stylesheets/layout/_profile.scss";

function Preview() {
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
              Nombre Apellido
            </h2>
            <h3 className="container-profile__containercard__profesion js-rolProfile">
              Front-end developer
            </h3>
          </div>

          <div
            className="container-profile__containercard__img js__profile-image"
            style={{
              backgroundImage: `url(${imgDefault})`,
            }}
          ></div>

          <div className="container-profile__containerrrss">
            <a
              href=""
              target="_blank"
              className="container-profile__containerrrss__rrss js-phone"
            >
              <i className="fas fa-mobile-alt"></i>
            </a>
            <a
              href="mailto:"
              target="_blank"
              className="container-profile__containerrrss__rrss js-mail"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href=""
              target="_blank"
              className="container-profile__containerrrss__rrss js-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href=""
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
