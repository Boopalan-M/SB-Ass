import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";

function App() {
  return (
 
      <div className="App">
        
        <Router>
          <Switch>
        
            <Route exact path="/" component={Home} />
           
            <Route  exact path="/products" component={Products} />
          </Switch>
        </Router>
      </div>
  
  );
}

export default App;
