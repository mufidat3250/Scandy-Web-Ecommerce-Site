import React from "react";
import { AppWrapper } from "./AppStyle";
import { Route, Switch } from "react-router-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/CartPage";

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Switch>
          {/* <Route path="/" component={Women}/> */}
          <Route path="/men" component={Men} />
          <Route path="/kids" component={Kids} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
