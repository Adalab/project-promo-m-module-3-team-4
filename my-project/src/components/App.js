import React from "react";

import "../stylesheets/App.scss";
import { Header } from "./Card/Header";
import { Footer } from "./Card/Footer";
import { Main } from "./Card/Main";

function App() {
  return (
    <>
      <div className="page">
        <Header />

        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
