/**
 * Created by ashu on 27/12/16.
 */

import React from 'react'
import Header from './Header'
import Users from './users'
import Footer from './Footer'

export default class userPage extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <Header isLoggedIn={false} ></Header>
        <Users></Users>
        <Footer></Footer>
      </div>
    )
  }
}
