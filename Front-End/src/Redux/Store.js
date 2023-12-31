
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'

import {reducer as projectReducer} from './ProjectReducer/reducer'
import {reducer as taskReducer} from './TaskReducer/reducer'
import {reducer as authReducer} from './Authentication/reducer'
import thunk from 'redux-thunk'











const rootReducer= combineReducers({projectReducer, taskReducer,authReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

