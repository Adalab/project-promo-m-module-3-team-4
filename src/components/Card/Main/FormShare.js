function FormShare() {
  return (
    <fieldset className="share ">
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
  );
}

export { FormShare };
