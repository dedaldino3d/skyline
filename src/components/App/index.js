import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Contact from "../Contact";
import NotFound from "../404NotFound";
import GlobalStyle from "../Styles";

export const App = (props) => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/info">
            <Contact />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
