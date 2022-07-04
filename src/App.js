import React from "react";
import { AppWrapper } from "./AppStyle";
import { Route, Switch } from "react-router-dom";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import PDP from "./pages/PDP";
import {Provider} from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/categories" component={Cart} />
          <Route  path="/pdp" component={PDP} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
