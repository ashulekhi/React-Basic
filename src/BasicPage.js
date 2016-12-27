/**
 * Created by ashu on 27/12/16.
 */

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

class Basic extends React.Component{
  constructor(){
    super()
  }

  render(){

    return(
      <div>
        <Header isLoggedIn={false}></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    )
  }
}


export default Basic
