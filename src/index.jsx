import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Skill from "./Skill.js";
import Contact from "./Contact.js";

const isGitHubPages = window.location.hostname === "gabzkydiaz.github.io"; // Change this to your GitHub Pages hostname

const Router = isGitHubPages ? HashRouter : BrowserRouter;

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
