/**
 * Created by ashu on 28/12/16.
 */


/**
 * Created by ashu on 28/12/16.
 */

import React from 'react'

export default class water extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tempertaure : 0
    }
  }
  changeState(){
    this.setState({
      tempertaure : Math.floor(Math.random() * 101) - 10
    })
  }

  render(){

    setInterval(this.changeState.bind(this),1000);


    let Element ;
    if(this.state.tempertaure<=0){
      console.log('this is value of temperature' ,  this.state.tempertaure)
      Element = (<div>Thlog(is is in solid state</div>)
    }
    else if (this.state.tempertaure >0 && this.state.tempertaure<100){
      console.log('this is value of temperature' ,  this.state.tempertaure)
      Element = (<div>This is inliquid state</div>)
    }
    else{
      console.log('this is value of temperature' ,  this.state.tempertaure)
      Element = (<div>This is gaseous state</div>)
    }
    return (
      Element
    )
  }




}
