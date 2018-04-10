import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'

import { Router, Route, browserHistory } from 'react-router'
import {  routerReducer } from 'react-router-redux'


export const history = createHistory()
//export const history = syncHistoryWithStore(browserHistory, store)

const initialState = { 
    credential:{},
    movies: []
};
const enhancers = {}

const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers )

window.store=store;
store.subscribe(() => console.log(store.getState()))
export default store;