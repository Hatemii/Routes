import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const About = () => {
    return(
      <div>
        <h2>About</h2>
        <div>Welcome To About Page</div>
        <Link to="/">Home</Link>
      </div>
    )
  }

export default About;
