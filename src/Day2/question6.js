/**
 * Created by ashu on 28/12/16.
 */

import React from 'react'

export default class StopWatch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      hrs :0,
      mins :0,
      sec :0,
      mls:0
    }
  }

  stopTime(){

  }
  lapTime(){

  }
  startTime(){

   setInterval(() => {
     this.setState({
       mls:this.state.mls+1
     })
   },0)

    setInterval(() => {
      this.setState({
        sec:this.state.sec+1
      })
    },1000)

    setInterval(() => {
      this.setState({
        mins:this.state.mins +1
      })
    },60000)


  }







  render(){

    let today  = new Date;
    let hrs = 0;
    let min = 0;
    let sec = 0;
    let mls = 0;


    return(
      <div> time is {this.state.hrs}  :  {this.state.mins}  :  {this.state.sec}  :  {this.state.mls}


      <button onClick={this.startTime.bind(this)}>Start</button>
      <button>Lap</button>
      <button>Stop</button>
      </div>
    )
  }
}
