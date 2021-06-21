import { Collapsable } from "./Form-colapsable";
//import { fetchCard } from "../../../services/fetchCard";
function FormShare(props) {
  return (
    <fieldset className="share ">
      <Collapsable title="Comparte" icon="fas fa-share-alt">
        <div className="none js-share">
          <div className="share__expand">
            <button className="share__button js-create-card" type="submit">
              <i className="far fa-address-card">&nbsp;&nbsp;</i>Crear tarjeta
            </button>
          </div>

          <div className="none js-response"></div>

          <div className="none card--created">
            <h3 className="none">La tarjeta ha sido creada:</h3>
            <small className="js-url">{props.data}</small>
            <a className="none share__button--twitter js-aTwitter">
              Compartir en Twitter
            </a>
          </div>
        </div>
      </Collapsable>
    </fieldset>
  );
}

export { FormShare };
