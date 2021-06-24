import { Collapsable } from "./Form-colapsable";
import { Palettes } from "./Palettes";
//import "../../../stylesheets/layout/_collapsable.scss";

function FormDesign(props) {
  return (
    <fieldset className="design">
      <Collapsable title="Diseña" icon="far fa-object-ungroup">
        <h3>Colores</h3>
        <div className="colors__wrapper js_generalcolor">
          <label className="label" htmlFor="palette1">
            <Palettes
              type="radio"
              name="palette"
              id="palette1"
              value="1"
              checked="checked"
              className="js-palette1"
              handleInput={props.handleInput}
            />
            <ul className="palette__wrapper">
              <li className="color palette1__color1"></li>
              <li className="color colorList1"></li>
              <li className="color palette1__color3"></li>
            </ul>
          </label>

          <label className="label" htmlFor="palette2">
            <Palettes
              type="radio"
              name="palette"
              id="palette2"
              value="2"
              className="js-palette2"
              handleInput={props.handleInput}
            />
            <ul className="palette__wrapper">
              <li className="color palette2__color1"></li>
              <li className="color colorList2"></li>
              <li className="color palette2__color3"></li>
            </ul>
          </label>

          <label className="label" htmlFor="palette3">
            <Palettes
              type="radio"
              name="palette"
              id="palette3"
              value="3"
              className="js-palette3"
              handleInput={props.handleInput}
            />
            <ul className="palette__wrapper">
              <li className="color palette3__color1"></li>
              <li className="color colorList3"></li>
              <li className="color palette3__color3"></li>
            </ul>
          </label>
        </div>
      </Collapsable>
    </fieldset>
  );
}
export { FormDesign };
