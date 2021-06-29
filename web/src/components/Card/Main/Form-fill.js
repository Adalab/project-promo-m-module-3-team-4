import { Collapsable } from "./Form-colapsable";
import GetAvatar from "./GetAvatar";
import React, { useState } from "react";
import Input from "./Input";

function FormFill(props) {
  return (
    <fieldset className="fill">
      <Collapsable title="Rellena" icon="far fa-keyboard">
        <div className="none js-fill fill__wrapper ">
          <div className="fill__contact">
            <Input
              value={props.name}
              handleInput={props.handleInput}
              labelText="Nombre completo"
              fillClass="fill__text fill__contact-name"
              type="text"
              id="name"
              name="name"
              placeholder="Ej: Sally Jill"
              maxLength="19"
            />

            <Input
              value={props.job}
              handleInput={props.handleInput}
              labelText="Puesto"
              fillClass="fill__text fill__contact-role"
              type="text"
              id="job"
              name="job"
              placeholder="Ej: Front- end unicorn"
              maxLength="22"
            />
          </div>
          <GetAvatar image={props.image} updateAvatar={props.updateAvatar} />

          <Input
            value={props.email}
            handleInput={props.handleInput}
            labelText="Email"
            fillClass="fill__text fill__contact-role"
            type="email"
            id="email"
            name="email"
            placeholder="Ej: sally-hill@gmail.com"
          />

          <Input
            value={props.phone}
            handleInput={props.handleInput}
            labelText="Teléfono"
            fillClass="fill__text fill__contact-phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 555-55-55-55"
          />

          <Input
            value={props.linkedin}
            handleInput={props.handleInput}
            labelText="Linkedin"
            fillClass="fill__text fill__contact-name"
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="Ej: https://www.linkedin.com/in/..."
          />

          <Input
            value={props.github}
            handleInput={props.handleInput}
            labelText="Github"
            fillClass="fill__text fill__contact-github fill__contactPrefix fill__contactPrefixGithub"
            type="url"
            id="github"
            name="github"
            placeholder="Ej: https://github.com/..."
          />
        </div>
      </Collapsable>
    </fieldset>
  );
}
export { FormFill };
