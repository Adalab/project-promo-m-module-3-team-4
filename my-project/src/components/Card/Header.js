import logo from "../../images/hi-me-logo.png";

function Header() {
  return (
    <header className="page__header">
      <img src={logo} alt="Hi Me! logo" width="120px" />
      <h1></h1>
    </header>
  );
}

export { Header };
