import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCEED,
  GET_CATEGORY_FAILED,
} from "../constants/index.jsx";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CATEGORY_SUCCEED: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    }
    case GET_CATEGORY_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
