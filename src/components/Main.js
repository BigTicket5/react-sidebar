import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Info from "./Info";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/info" component={Info} />
        </Switch>
      </main>
    );
  }
}

export default Main;
