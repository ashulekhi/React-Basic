/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import App from './App'
import {Router,Route,Link, browserHistory} from 'react-router'
import Routes from './day3/Routes'

let app = document.getElementById('main')


render(<Router history={browserHistory} routes={Routes}></Router>, app)
