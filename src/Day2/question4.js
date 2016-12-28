/**
 * Created by ashu on 28/12/16.
 */


import React from 'react'

export default class UserDetail extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    let Element = (<table><tr><td>{this.props.user.name}</td><td><img src={this.props.user.avatar}></img></td><td>{this.props.user.age}</td></tr></table>)
    return(
      Element
    )
  }

}

UserDetail.propTypes.user ={
   name :React.PropTypes.string,
   age:React.PropTypes.number,
   avatar : React.PropTypes.string
}


/**
 * Created by ashu on 28/12/16.
 */
