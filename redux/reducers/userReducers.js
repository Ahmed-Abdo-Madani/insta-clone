import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
  SIGIN_IN_USER_REQUEST,
  SIGIN_IN_USER_SUCCESS,
  SIGIN_IN_USER_FAIL,
} from "../constants/userConstants";

export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
      };
    case REGISTER_USER_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export const signedInUserReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case SIGIN_IN_USER_REQUEST:
      return {
        loading: true,
      };

    case SIGIN_IN_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
      };
    case SIGIN_IN_USER_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const fetchUserPostsReducer = (
  state = { currentUser: null },
  action
) => {
  switch (action.type) {
    case GET_USER_POSTS_REQUEST:
      return {
        loading: true,
      };

    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case GET_USER_POSTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
