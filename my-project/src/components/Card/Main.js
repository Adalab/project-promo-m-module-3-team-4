import React from "react";
import { Preview } from "./Main/Preview";
import { Form } from "./Main/Form";

function Main() {
  return (
    <div className="profile__wrapper">
      <Preview />
      <Form />
      <div className="tooltipFill js-tooltipFill none">
        <p className="tooltipParagraph">
          No tengas tanta prisa. Primero rellena la sección anterior
        </p>
      </div>
      <div className="tooltipShare js-tooltipShare none">
        <p className="tooltipParagraph">
          Recuerda! Rellena los campos ¿Has rellenado el campo de la foto?
        </p>
      </div>
    </div>
  );
}
export { Main };
