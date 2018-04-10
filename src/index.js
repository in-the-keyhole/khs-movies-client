import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import store, {history} from './store'
import App from './components/App.js'
import Footer from './components/ui/Footer'
 
import './styles/login-styles.css'
import './styles/movie.css'
import './styles/rating.css'
import './styles/index.css'
import 'font-awesome/css/font-awesome.min.css'

const target = document.querySelector('#root')
render(
  <Provider store={store}>
  <ConnectedRouter history={history}>

    <div  className ="container" id="wrapper">
      <div>
        <App/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  </ConnectedRouter>
</Provider>, target)
