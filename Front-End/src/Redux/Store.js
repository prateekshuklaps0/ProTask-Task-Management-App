import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./Authentication/authReducer";
import thunk from "redux-thunk";





const rootReducer = combineReducers({ authReducer
});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));