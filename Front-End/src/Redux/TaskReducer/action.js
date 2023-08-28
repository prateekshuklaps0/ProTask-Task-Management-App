import axios from "axios"
import { ADD_TASK, DELETE_TASK, GET_TASKS, TASK_ERROR, TASK_LOADING, UPDATE_TASK } from "./actionType"



export const get_tasks = (token, projectId) => (dispatch) => {
    dispatch({ type: TASK_LOADING })
    axios.get("https://pro-task.onrender.com/tasks", {
        headers: {
            Authorization: token,
            projectId: projectId
        },
        body: { projectId }

    })
        .then((res) => {
            console.log(res.data.TasksDataUserId)
            console.log(res.data.TasksDataProId)
            dispatch({ type: GET_TASKS, payload: [res.data.TasksDataUserId, res.data.TasksDataProId] })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TASK_ERROR })
        })
}

export const update_task = (token, projectId, id, data) => (dispatch) => {
    dispatch({ type: TASK_LOADING })
    axios.patch(`https://pro-task.onrender.com/tasks/update/${id}`, JSON.stringify(data), {
        headers: {
            Authorization: token,
            projectId: projectId
        }
    })

        .then((res) => {
            console.log("res data", res.data)
            dispatch({ type: UPDATE_TASK })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TASK_ERROR })
        })
}


export const add_task = (token, projectId, data) => (dispatch) => {
    dispatch({ type: TASK_LOADING })
    axios.post(
        "https://pro-task.onrender.com/tasks/addtask",

        data,

        {
            headers: {
                Authorization: token,
                projectId: projectId,
            },
        }
    )
        .then((res) => {
            console.log("res data", res.data)
            dispatch({ type: ADD_TASK })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TASK_ERROR })
        })
}


export const delete_task = (token, projectId, id) => (dispatch) => {
    dispatch({ type: TASK_LOADING })
    axios.delete(`https://pro-task.onrender.com/tasks/delete/${id}`, {
        headers: {
            Authorization: token,
            projectId: projectId
        },
    })
        .then((res) => {
            console.log("res data", res.data)
            dispatch({ type: DELETE_TASK })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: TASK_ERROR })
        })

}