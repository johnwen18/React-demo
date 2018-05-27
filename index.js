import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/router/about/About'
import Repos from './modules/router/repo/Repos'
import Repo from './modules/router/repo/Repo'
import Home from './modules/router/Home'
import Tutorial from './modules/router/tutorial/index'
import FormDemo from './modules/router/form/index'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/router/repos" component={Repos}>
        <Route path="/router/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/router/about" component={About}/>
      <Route path="/router/tutorial" component={Tutorial}/>
      <Route path="/router/form" component={FormDemo}/>
    </Route>
  </Router>
), document.getElementById('app'));
