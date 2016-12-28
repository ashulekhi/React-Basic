/**
 * Created by ashu on 28/12/16.
 */

import React from 'react'

export default class Propdemo extends React.Component{
  constructor(props) {
    super()
    this.state = {
      count : 10
    }

    this.increment = this.increment.bind(this);
  }


  increment(){
    this.setState({
      count : this.state.count + 1
    })

  }


  render(){
    return(
      <div><button onClick={this.increment}>Click Me</button>{this.state.count}</div>
    )
  }

}
