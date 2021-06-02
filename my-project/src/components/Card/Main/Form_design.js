import React from "react";

function Form_design() {
  return (
    <fieldset className="design">
      <div className="fieldset__button">
        <div className="fieldset__button--title">
          <i className="far fa-object-ungroup"></i>
          <h2>Diseña</h2>
        </div>
        <i className="fas fa-chevron-down fa-chevron-up js-designButton"></i>
      </div>
      <div className="js-design">
        <div className="design__expand">
          <h3>Colores</h3>

          <div className="colors__wrapper js_generalcolor">
            <label className="label" htmlFor="palette1">
              <input
                type="radio"
                name="palette"
                id="palette1"
                value="1"
                checked
                className="js-palette1"
              />
              <ul className="palette__wrapper">
                <li className="color palette1__color1"></li>
                <li className="color palette1__color2"></li>
                <li className="color palette1__color3"></li>
              </ul>
            </label>

            <label className="label" htmlFor="palette2">
              <input
                type="radio"
                name="palette"
                id="palette2"
                value="2"
                className="js-palette2"
              />
              <ul className="palette__wrapper">
                <li className="color palette2__color1"></li>
                <li className="color palette2__color2"></li>
                <li className="color palette2__color3"></li>
              </ul>
            </label>

            <label className="label" htmlFor="palette3">
              <input
                type="radio"
                name="palette"
                id="palette3"
                value="3"
                className="js-palette3"
              />
              <ul className="palette__wrapper">
                <li className="color palette3__color1"></li>
                <li className="color palette3__color2"></li>
                <li className="color palette3__color3"></li>
              </ul>
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
export { Form_design };
