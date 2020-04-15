import React, {Component} from 'react';
import './App.css';

import { BrowserRouter, Route,Switch } from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Navigation from "./Component/Navigation"


class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Navigation />
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </Switch>
        </BrowserRouter>

    </div>
  )
  }
}

export default App;
