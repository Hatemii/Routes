import {Link} from "react-router-dom"
import React from "react"

class About extends React.Component {

  handleHistory = () => {
    this.props.history.replace({
      pathname:"/contact"
    })
  }

  render(){

  return(
    <div>
      <h2>Welcome to About</h2>
      <button onClick={this.handleHistory}>Contact</button>
  </div>
  )
}
}

export default About;
