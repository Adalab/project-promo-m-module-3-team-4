import { Footer } from "./Card/Footer";
import logo from "../images/hi-me-logo.png";
import { Link } from "react-router-dom";
import "../stylesheets/layout/_landing.scss";
import "../stylesheets/core/_variables.scss";

function Landing() {
  return (
    <body>
      <main className="main">
        <section className="main__logoContainer">
          <img src={logo} alt="logo" className="main__logo" width="200px" />

          <div className="main__titleContainer">
            <h2 className="main__title">Crea tu tarjeta de visita</h2>
            <p className="main__paragraph">
              Crea mejores contactos profesionales de foma fácil y sencilla
            </p>
          </div>
        </section>
        <section className="main__picturesContainer">
          <div className="main__pictures">
            <div className="far fa-object-ungroup main__icon"></div>
            <p className="main__words">Diseña</p>
          </div>
          <div className="main__pictures">
            <div className="far fa-keyboard main__icon"></div>
            <p className="main__words">Rellena</p>
          </div>
          <div className="main__pictures main__icon">
            <div className="fas fa-share-alt main__icon"></div>
            <p className="main__words">Comparte</p>
          </div>
        </section>
        <Link
          to="/cardgenerator"
          title="comenzar a usar aplicación"
          className="main__button"
        >
          Comenzar
        </Link>
      </main>
      <Footer />
    </body>
  );
}
export { Landing };
