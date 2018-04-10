import React from 'react'
import {connect} from 'react-redux'

import {Router, Route} from 'react-router'

import Movies from './container/MovieList.js'
import Login from './container/Login.js'
import MovieDetail from './container/MovieDetail.js'
import Register from './container/Register.js'
import Header from './container/Header.js'
import Home from './container/Home.js'

const MainRouter = () => (
    <div>
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/movies" component={Movies}/>
            <Route exact path="/movies/:id" component={MovieDetail}/>
            <Route exact path="/register" component={Register}/>
        </Router>
    </div>
)

export default MainRouter;
