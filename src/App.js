/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import {Link , browserHistory } from 'react-router'
export default class App extends React.Component {
  constructor() {
       super()
    this.state = {
      user:'',
      passw:''
    }
  }

  validate(){
   if(this.state.user=="ashu" && this.state.passw=="test@123"){
     browserHistory.push('/loginsuccess');
   }
    else
   {
     browserHistory.push('/loginfail')
   }
  }

  updatevalue(e){
    console.log('this is called')
    let initial = this.state;
    initial[e.target.name]=e.target.value;
    console.log('this is theupdates value' , initial)
    this.setState(initial);
  }

  render() {
    return (
      <div>
        <input type="text" name="user" value={this.state.user} onChange={this.updatevalue.bind(this)}/>
        <input type="password" name="passw" value={this.state.passw} onChange={this.updatevalue.bind(this)} />
        <button  onClick={this.validate.bind(this)} >Log In</button>
      {this.props.children}

      </div>
    )
  }

}

