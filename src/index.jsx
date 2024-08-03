import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Skill from "./Skill.js";
import Contact from "./Contact.js";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/skills" component={Skill} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
