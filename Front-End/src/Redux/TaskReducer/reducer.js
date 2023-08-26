import { GET_TASKS, TASK_ERROR, TASK_LOADING } from "./actionType";

const initState = {
  tasks: [],
  loading: false,
  error: false,
};

export const reducer = (state=initState, { type, payload }) => {
  switch (type) {
    case TASK_LOADING:
      return { ...state, loading: true, error: false, tasks: [] };

    case GET_TASKS:
      return { ...state, loading: false, error: false, tasks: payload };

    case TASK_ERROR:
      return { ...state, loading: false, error: true, tasks: [] };

    default:
      return state;
  }
};
