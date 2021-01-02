import { combineReducers } from "redux";
import {
  fetchUserPostsReducer,
  registerUserReducer,
} from "./reducers/userReducers";
const reducers = combineReducers({
  registerUser: registerUserReducer,
  fetchUserPosts: fetchUserPostsReducer,
});

export default reducers;
