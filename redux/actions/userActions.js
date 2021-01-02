import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  GET_USER_POSTS_REQUEST,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAIL,
} from "../constants/userConstants";

import firebase from "firebase";

export const fetchUserPosts = (dispatch) => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) =>
      snapshot.exists
        ? dispatch({ type: GET_USER_POSTS_SUCCESS, payload: snapshot.data() })
        : dispatch({
            type: GET_USER_POSTS_FAIL,
            payload: { message: "Fetching Snapshot Faild." },
          })
    );
};
