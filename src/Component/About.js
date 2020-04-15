import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";



const About = () => {

  let history = useHistory();

   function handleClick() {
     history.push("/");
   }

    return(
      <div>
        <h2>About</h2>
        <div>Welcome To About Page</div>
        <button onClick={handleClick}>Home</button>
      </div>
    )
  }

export default About;
