import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
    return(
      <div>
        <h2>HOME</h2>
        <div>Welcome To Home Page</div>
        <Link to="/about">About</Link>
      </div>
    )
  }

export default Home;
