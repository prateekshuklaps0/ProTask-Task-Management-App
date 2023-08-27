import { ADD_TASK, DELETE_TASK, GET_TASKS, TASK_ERROR, TASK_LOADING, UPDATE_TASK } from "./actionType";

const initState = {
  tasksbyUserId: [],
  tasksbyProId: [],
  loading: false,
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TASK_LOADING:
      return { ...state, loading: true, error: false, tasksbyUserId: [], tasksbyProId: [] };

    case GET_TASKS:
      return { ...state, loading: false, error: false, tasksbyUserId: payload[0], tasksbyProId: payload[1] };

    case TASK_ERROR:
      return { ...state, loading: false, error: true, tasksbyUserId: [], tasksbyProId: [] };

    case UPDATE_TASK:
      return { ...state, loading: false, error: true };

    case ADD_TASK:
      return { ...state, loading: false, error: true };

    case DELETE_TASK:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
