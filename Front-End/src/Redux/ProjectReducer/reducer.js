import { GET_PROJECTS, PROJECT_ERROR, PROJECT_LOADING } from "./actionType";

const initState = {
  projects: [],
  loading: false,
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PROJECT_LOADING:
      return { ...state, loading: true, error: false, projects: [] };

    case GET_PROJECTS:
      return { ...state, loading: false, error: false, projects: payload };

    case PROJECT_ERROR:
      return { ...state, loading: false, error: true, projects: [] };

    default:
      return state
  }
};
