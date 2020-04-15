import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const About = ({history}) => {
    return(
      <div>
        <h2>About</h2>
        <div>Welcome To About Page</div>
          <button onClick={() =>
              history.push("/")
            }>About</button>
      </div>
    )
  }

export default About;
