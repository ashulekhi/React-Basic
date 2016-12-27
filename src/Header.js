/**
 * Created by ashu on 27/12/16.
 */

import React from 'react';

export default class Header extends React.Component{
  constructor(){
    super()
  }

  render(){
    let usermessage ;
    usermessage = this.props.isLoggedIn ? (<div>Hello </div>) : (<button>Log In</button>)
    return(
    usermessage
    )
  }
}



