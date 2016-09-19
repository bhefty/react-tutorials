import React from 'react'
import ReactDOM from 'react-dom'
// import Bootstrap from './vendor/bootstrap-without-jquery'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './pages/Layout'
import Featured from './pages/Featured'
import Archives from './pages/Archives'
import Settings from './pages/Settings'

const app = document.getElementById('app')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Featured} />
    <Route path='/archives(/:article)' component={Archives} />
      <Route path='/settings' component={Settings} />
    </Route>
  </Router>,
  app)
