/**
 * Created by ashu on 29/12/16.
 */

import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from '../App'
import Homepage from '../Homepage'
import AboutUs from '../AboutUs'
import Contactus from '../Contactus'
import user from '../user'
import Users from '../users'
let isLoggedIn = true;

function checkAuth(nextState,replace){
  if(!isLoggedIn){
    replace({
      path:'/'
    })
  }
}

export default (
  <Route path="/" component={App}>
  <IndexRoute component={Homepage} />
    <Route path="aboutus" component={AboutUs} />
    <Route path="contactus" component={Contactus} />
    <Route path="users" component={Users} >
       <Route path=":name" component={user}  onEnter={checkAuth}></Route> </Route>

  </Route>
)
