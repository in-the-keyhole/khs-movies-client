import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Movies from './container/MovieList.js'
import Login from './container/Login.js'
import MovieDetail from './container/MovieDetail.js'
import Register from './container/Register.js'
import Header from './container/Header.js'
import Home from './container/Home.js'

const App = ({}) => (
    <div> 
      <Header/>
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/movies" component={Movies}/>
                <Route exact path="/movies/:id" component={MovieDetail}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </main>
    </div>
)
export default App;

