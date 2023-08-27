import axios from "axios"
import { GET_TASKS, TASK_ERROR, TASK_LOADING } from "./actionType"



export const get_tasks=(token,projectId)=>(dispatch)=>{
    dispatch({type:TASK_LOADING})
   axios.get("https://pro-task.onrender.com/tasks",{
    headers:{
        Authorization: token,
        projectId: "64e9df3be1cc48d363ff2686"
    },
    body: {projectId}
    
   })
   .then((res) => {
    console.log(res.data.TasksDataUserId)
    dispatch({type:GET_TASKS, payload:res.data.TasksDataUserId})
   })
   .catch((err)=>{
    console.log(err);
    dispatch({type:TASK_ERROR})
   })
}