import React from "react";
import { BrowserRouter as Routers, Router } from "react-router-dom";

function App() {
  return (
    <Routers>
      <div className="app">
        {<Router path="/" component={home}></Router>}
        {<Router path="/home" component={home}></Router>}
      </div>
    </Routers>
  );
}

export default App;
