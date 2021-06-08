import { Collapsable } from "./Form-colapsable";
import "../../../stylesheets/layout/_collapsable.scss";

function Form_design() {
  return (
    <fieldset className="design">
      <Collapsable title="Diseña" icon="far fa-object-ungroup">
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
      </Collapsable>
    </fieldset>
  );
}
export { Form_design };
