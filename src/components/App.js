import "../stylesheets/App.scss";
import { CardGenerator } from "./Card/CardGenerator";
import { Landing } from "./Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact children={<Landing />} />
        <Route path="/cardgenerator" exact children={<CardGenerator />} />
      </Switch>
    </Router>
  );
}

export default App;
