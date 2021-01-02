import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const middleware = [thunk];
import {
  fetchUserPostsReducer,
  registerUserReducer,
  signedInUserReducer,
} from "./reducers/userReducers";

const combinedReducers = combineReducers({
  registerUser: registerUserReducer,
  fetchUserPosts: fetchUserPostsReducer,
  signedInUser: signedInUserReducer,
});

const initialState = {
  currentUser: null,
};

const Store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
