import logoAdalab from "../../images/logo-adalab.png";
import "../../stylesheets/layout/_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__copy"> Hi me! &copy; 2021</small>
      <a href="https://adalab.es/" title="Adalab" className="footer__logo">
        <img src={logoAdalab} alt="logo-Adalab" className="footer__logoImg" />
      </a>
    </footer>
  );
}
export { Footer };
