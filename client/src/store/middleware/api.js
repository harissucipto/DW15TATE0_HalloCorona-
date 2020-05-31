import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const {
    url,
    method,
    data,
    onStart,
    onSuccess,
    onError,
    headers,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const { data: response } = await axios.request({
      baseURL: "http://localhost:5000/api/v1/",
      url,
      method,
      data,
      headers,
    });

    // General
    dispatch(actions.apiCallSuccess(response.data));
    // Specific
    if (onSuccess) return dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) return dispatch({ type: onError, payload: error.message });
  }
};

export default api;
