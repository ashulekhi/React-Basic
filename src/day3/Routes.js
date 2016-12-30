/**
 * Created by ashu on 29/12/16.
 */

import React from 'react';
import login from './question3'
import {Route , Router , Link , IndexRoute}  from 'react-router';
import App  from '../App'
import Home from './home'
import Loginsuccess from './loginsuccess'
import Loginfail from './loginfail'
import Cart from './cart.js'


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
  <Route path="/loginsuccess" component={Loginsuccess} />
  <Route path="/loginfail" component={Loginfail} />
  <Route path="/cart" component={Cart} />
    </Route>
)
