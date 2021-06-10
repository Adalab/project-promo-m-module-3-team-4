import { Form } from "./Form";
import { Collapsable } from "./Form-colapsable";
import GetAvatar from "./GetAvatar";
import React, { useState } from "react";
import Input from "./Input";

function FormFill(props) {
  return (
    <fieldset className="fill ">
      <Collapsable title="Rellena" icon="far fa-keyboard">
        <div className="none js-fill fill__wrapper ">
          <div className="fill__contact">
            <Input
              value={props.name}
              handleInput={props.handleInput}
              labelText="Nombre completo"
              fillClass="fill__text fill__contact-name"
              type="text"
              id="fullname"
              name="name"
              placeholder="Ej: Sally Jill"
              maxLength="19"
            />
            {/* <p className="js-validationName validationMessage none">
              El campo no se ha rellenado
            </p> */}

            <Input
              value={props.value}
              handleInput={props.handleInput}
              labelText="Puesto"
              fillClass="fill__text js_input fill__contact-role"
              type="text"
              id="role"
              name="job"
              placeholder="Ej: Front- end unicorn"
              maxLength="22"
            />
            {/* <p className="js-validationJob validationMessage none">
             El campo no se ha rellenado
            </p> */}
          </div>
          <GetAvatar image={props.image} updateAvatar={props.updateAvatar} />
          {/*
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
          </div> */}

          <Input
            value={props.email}
            handleInput={props.handleInput}
            labelText="Email"
            fillclass="fill__text js_input fill__contact-email"
            type="email"
            id="email"
            name="email"
            placeholder="Ej: sally-hill@gmail.com"
          />
          {/* <p className="js-validationEmail validationMessage none">
              El campo no se ha rellenado o el formato es inválido
            </p> */}

          <Input
            value={props.value}
            handleInput={props.handleInput}
            labelText="Teléfono"
            fillClass="fill__text js_input fill__contact-phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 555-55-55-55"
          />
          {/* <p className="js-validationPhone validationMessage none">
              El campo no se ha rellenado o el formato es inválido
            </p> */}

          <Input
            value={props.linkedin}
            handleInput={props.handleInput}
            labelText="Linkedin"
            fillClass="fill__text fill__contactPrefix"
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="Ej: https://www.linkedin.com/in/..."
          />
          {/* <p className="js-validationLinkedin validationMessage none">
              El campo no se ha rellenado
            </p> */}

          <Input
            value={props.github}
            handleInput={props.handleInput}
            labelText="Github"
            fillClass="fill__text js_input fill__contact-github fill__contactPrefix fill__contactPrefixGithub"
            type="url"
            id="github"
            name="github"
            placeholder="Ej: https://github.com/sally-hill"
          />

          {/* <p className="js-validationGithub validationMessage none">
              El campo no se ha rellenado
            </p> */}
        </div>
      </Collapsable>
    </fieldset>
  );
}
export { FormFill };
