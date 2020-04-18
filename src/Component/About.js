import {Link} from "react-router-dom"
import React from "react"

class About extends React.Component {
  render(){

  return(
    <div>
      <h2>Welcome to About</h2>
      <button onClick={()=>
          this.props.history.replace({
            pathname:"/contact"
          })
          }>Contact</button>
  </div>
  )
}
}

export default About;
