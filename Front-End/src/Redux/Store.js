import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {reducer as projectReducer} from './ProjectReducer/reducer'
import {reducer as taskReducer} from './TaskReducer/reducer'
import thunk from 'redux-thunk'

const rootReducer= combineReducers({projectReducer, taskReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))