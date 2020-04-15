import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = ({history}) => {
    return(
      <div>
        <h2>HOME</h2>
        <div>Welcome To Home Page</div>
        <button onClick={() =>
            history.push("/about")
          }>About</button>
      </div>
    )
  }

export default Home;
