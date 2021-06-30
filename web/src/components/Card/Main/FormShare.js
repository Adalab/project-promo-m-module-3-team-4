import { useState } from "react";
import { Collapsable } from "./Form-colapsable";
import { fetchCard } from "../../../services/fetchCard";

function FormShare(props) {
  const [cardError, setCardError] = useState("");
  const [cardURL, setCardURL] = useState("");

  const handleClick = (ev) => {
    ev.preventDefault();

    fetchCard(props.data).then((data) => {
      if (data.success === false) {
        setCardError(data.error);
        setCardURL("");
      } else {
        setCardError("");
        setCardURL(data.cardURL);
        console.log(data.cardURL);
      }
    });
  };

  return (
    <fieldset className="share ">
      <Collapsable title="Comparte" icon="fas fa-share-alt">
        <div className="none js-share">
          <div className="share__expand">
            <button
              className="share__button js-create-card"
              onClick={handleClick}
            >
              <i className="far fa-address-card">&nbsp;&nbsp;</i>Crear tarjeta
            </button>
          </div>

          {cardError !== "" ? (
            <div className="none js-response">{cardError}</div>
          ) : null}

          {cardURL !== "" ? (
            <div className="none card--created">
              <h3 className="none">La tarjeta ha sido creada:</h3>
              <a className="js-url" href={cardURL}>
                Aqui tienes tu tarjeta.
              </a>

              <a className="none share__button--twitter js-aTwitter">
                Compartir en Twitter
              </a>
            </div>
          ) : null}
        </div>
      </Collapsable>
    </fieldset>
  );
}

export { FormShare };
