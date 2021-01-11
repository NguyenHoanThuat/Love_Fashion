import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCEED,
  GET_CATEGORY_FAILED,
} from "../constants/index.jsx";
import { apiManager } from "../services/ApiManager";

export const getCategory = () => (dispatch) => {
  dispatch({
    type: GET_CATEGORY_REQUEST,
  });
  return apiManager
    .category()
    .then((response) => {
      dispatch({
        type: GET_CATEGORY_SUCCEED,
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORY_FAILED,
        payload: error.messages,
      });
    });
};
