import React from "react";
import { FormDesign } from "Form-Design";

function Form() {
  return (
    <form action="" method="POST" className="form js-form">
      <FormDesign />
      <fieldset className="fill">
        <div className="fieldset__button">
          <div className="fieldset__button--title">
            <i className="far fa-keyboard"></i>
            <h2>Rellena</h2>
          </div>
          <i className="fas fa-chevron-up arrowPointer js-fillButton"></i>
        </div>

        <div className="none js-fill fill__wrapper">
          <div className="fill__contact">
            <label className="fill__text" htmlFor="fullname">
              {" "}
              Nombre completo{" "}
            </label>
            <input
              className="js_input fill__contact-name"
              type="text"
              id="fullname"
              name="name"
              placeholder="Ej: Sally Jill"
            />
            <p className="js-validationName validationMessage none">
              El campo no se ha rellenado
            </p>
          </div>

          <div className="fill__contact">
            <label className="fill__text" htmlFor="role">
              {" "}
              Puesto{" "}
            </label>
            <input
              className="js_input fill__contact-role"
              type="text"
              id="role"
              name="job"
              placeholder="Ej: Front- end unicorn"
            />
            <p className="js-validationJob validationMessage none">
              El campo no se ha rellenado
            </p>
          </div>

          <div className="fill__contact">
            <label className="fill__text" htmlFor="photo">
              {" "}
              Imagen del perfil{" "}
            </label>
            <div className="js__profile-preview"></div>
            <input
              className="js_input fill__contact-image js__profile-upload-btn"
              type="file"
              id="photo"
              name="photo"
            />
            <button className="js__profile-trigger">Añadir imagen</button>
            <p className="js-validationPhoto validationMessage none">
              No se ha adjuntado ningún archivo
            </p>
            <p className="js-validationPhotoTwo validationMessage none">
              La extensión no es válida. Prueba con un archivo .jpg, .png,
              .jpeg, .gif, .svg
            </p>
            <p className="js-validationPhotoThree validationMessage none">
              El tamaño de la foto es excesivo. Prueba con un archivo de menos
              de 4 MG
            </p>
          </div>

          <div className="fill__contact">
            <label className="fill__text" htmlFor="email">
              {" "}
              Email{" "}
            </label>
            <input
              className="js_input fill__contact-email"
              type="email"
              id="email"
              name="email"
              placeholder="Ej: sally-hill@gmail.com"
            />
            <p className="js-validationEmail validationMessage none">
              El campo no se ha rellenado o el formato es inválido
            </p>
          </div>

          <div className="fill__contact">
            <label className="fill__text" htmlFor="phone">
              {" "}
              Teléfono{" "}
            </label>
            <input
              className="js_input fill__contact-phone"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ej: 555-55-55-55"
            />
            <p className="js-validationPhone validationMessage none">
              El campo no se ha rellenado o el formato es inválido
            </p>
          </div>

          <div className="fill__contact">
            <label className="fill__text" htmlFor="linkedin">
              {" "}
              Linkedin{" "}
            </label>
            <div className="fill__contactPrefix">
              <p className="fill__contactParagraph">
                https://www.linkedin.com/in/
              </p>
              <input
                className="js_input fill__contact-linkedin"
                type="url"
                id="linkedin"
                name="linkedin"
                placeholder="Ej: salli.hill"
              />
            </div>
            <p className="js-validationLinkedin validationMessage none">
              El campo no se ha rellenado
            </p>
          </div>

          <div className="fill__contact">
            <label className="fill__text" htmlFor="github">
              {" "}
              Github{" "}
            </label>
            <div className="fill__contactPrefix fill__contactPrefixGithub">
              <p className="fill__contactParagraph">https://github.com/</p>
              <input
                className="js_input fill__contact-github"
                type="url"
                id="github"
                name="github"
                placeholder="Ej: sally-hill"
              />
            </div>
            <p className="js-validationGithub validationMessage none">
              El campo no se ha rellenado
            </p>
          </div>
        </div>
      </fieldset>

      <fieldset className="share">
        <div className="fieldset__button">
          <div className="fieldset__button--title">
            <i className="fas fa-share-alt"></i>
            <h2>Comparte</h2>
          </div>
          <i className="fas fa-chevron-down fa-chevron-up arrowPointer js-shareButton"></i>
        </div>

        <div className="none js-share">
          <div className="share__expand">
            <button className="share__button js-create-card" type="submit">
              <i className="far fa-address-card">&nbsp;&nbsp;</i>Crear tarjeta
            </button>
          </div>

          <div className="none js-response"></div>

          <div className="none card--created">
            <h3 className="none">La tarjeta ha sido creada:</h3>
            <small className="js-url"></small>
            <a className="none share__button--twitter js-aTwitter">
              Compartir en Twitter
            </a>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
export { Form };
