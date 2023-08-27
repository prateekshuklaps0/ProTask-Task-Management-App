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
  error: false,
  userDetails: {},
  token: "",
};

export const reducer = (state = initialState, action) => {
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
        isAuth: false,
      };
    case Login_SUCCESS:
     console.log(action.payload[0])
    //  const usersdata= action.payload[0]
      return {
        ...state,
        LoginLoading: false,
        isAuth: true,
        userDetails: localStorage.getItem('userDetails'),
        token: action.payload[1],
      };
    case Login_FAILURE:
      return {
        ...state,
        LoginLoading: false,
        error: true,
        isAuth:false
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        // username: null,
        // email: "",
      };
    default:
      return state;
  }
};


