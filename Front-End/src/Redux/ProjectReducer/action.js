import axios from "axios"
import { GET_PROJECTS, PROJECT_ERROR, PROJECT_LOADING } from "./actionType"


export const get_projects = (token) => (dispatch) => {
    dispatch({ type: PROJECT_LOADING })
    axios.get("http://localhost:8080/projects", {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            console.log(res.data)
            dispatch({ type: GET_PROJECTS, payload: res.data })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: PROJECT_ERROR })
        })
}