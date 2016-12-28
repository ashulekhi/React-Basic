/**
 * Created by ashu on 28/12/16.
 */


import React from 'react'

export default class UserDetail extends React.Component{
  constructor(props){
    super(props)
  }



  render(){

    let userDetails  = this.props.user;
    const userList = userDetails.map((userDetail) => <tr><td>{userDetail.name}</td><td><img src={userDetail.avatar}></img></td><td>{userDetail.age}</td></tr> );
    console.log('this is userList' , userDetails , userList);

    return(
      <table>
      { userList}
      </table>
  )
  }

}


