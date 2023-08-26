import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  Login_REQUEST,
  Login_SUCCESS,
  Login_FAILURE,
  LOGOUT,
} from "./actionTypes";
// Signup Actions
export const signupRequest = (userData) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    try {
      const response = await axios.get(
        "https://gorgeous-flight-api1.onrender.com/users"
      );
      const users = response.data;
      console.log(users);
      const existingUser = users.find(
        (user) =>
          user.username === userData.username || user.email === userData.email
      );

      if (existingUser) {
        throw new Error("Username or email already exists");
      }

      const createUserResponse = await axios.post(
        "https://gorgeous-flight-api1.onrender.com/users",
        userData
      );
      const newUser = createUserResponse.data;

      if (newUser) {
        dispatch({ type: SIGNUP_SUCCESS });
        return true;
      } else {
        throw new Error("Failed to create account");
      }
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error.message });
      return false;
    }
  };
};
// Login Actions
export const LoginRequest = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: Login_REQUEST });
    try {
      const response = await axios.get(
        "https://gorgeous-flight-api1.onrender.com/users"
      );
      const users = response.data;
      const user = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (user) {
         if (user.email === "admin@gmail.com" && user.password === "admin") {
          return "/admin";
        }
        
        dispatch({
          type: Login_SUCCESS,
          payload: { username: user.username, email: user.email },
        });
        console.log(user);
        return { username: user.username, email: user.email };
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      dispatch({ type: Login_FAILURE, payload: error.message });
      throw error;
    }
  };
};
// Logout Action
export const logout = () => {
  return {
    type: LOGOUT,
  };
};