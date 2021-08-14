import { combineReducers } from "redux";
import postReducer from "./postReducer";
import newPostReducer from "./newPostReducer";

export default combineReducers({
  posts: postReducer,
  newPost: newPostReducer,
});
