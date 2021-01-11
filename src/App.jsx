import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./layout/Header/index.jsx";
import Menu from "./layout/Menu/index.jsx";
import Home from "./container/Home/index.jsx";
import Product from "./container/Products/index.jsx";
import WomanFashion from "./container/WomanFashion/index.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/woman-fashion" component={WomanFashion}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
