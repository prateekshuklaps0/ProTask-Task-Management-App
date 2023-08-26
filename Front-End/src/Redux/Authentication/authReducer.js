import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    Login_REQUEST,
    Login_SUCCESS,
    Login_FAILURE,
    LOGOUT,
  } from "./actionTypes";
  
  const initialState = {
    signupLoading: false,
    LoginLoading: false,
    isAuth: false,
    error: null,
    username: null,
    email: "",
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          signupLoading: true,
          error: null,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          signupLoading: false,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          signupLoading: false,
          error: action.payload,
        };
      case Login_REQUEST:
        return {
          ...state,
          LoginLoading: true,
          error: null,
        };
      case Login_SUCCESS:
        return {
          ...state,
          LoginLoading: false,
          isAuth: true,
          username: action.payload.username,
          email: action.payload.email,
        };
      case Login_FAILURE:
        return {
          ...state,
          LoginLoading: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          isAuth: false,
          username: null,
          email: "",
        };
      default:
        return state;
    }
  };
  
  export default authReducer;