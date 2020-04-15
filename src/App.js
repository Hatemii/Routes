import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch,Link} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"

class App extends Component {
  render() {
    return (<div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/" render={() => <div>Page Not Found</div>} />
      </Switch>
      </BrowserRouter>
    </div>)
  }
}

export default App;
