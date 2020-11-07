import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import NotFound from "../404NotFound";
import GlobalStyle from '../Styles'


export const App = (props) => {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
