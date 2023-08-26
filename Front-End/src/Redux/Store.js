
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import authReducer from "./Authentication/authReducer";
import {reducer as projectReducer} from './ProjectReducer/reducer'
import {reducer as taskReducer} from './TaskReducer/reducer'
import thunk from 'redux-thunk'











const rootReducer= combineReducers({projectReducer, taskReducer,authReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

