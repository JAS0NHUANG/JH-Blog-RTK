import { combineReducers } from "redux";

import postsReducer from "./posts";
import postReducer from "./post";
import userReducer from "./user";
import editorReducer from "./editor";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  user: userReducer,
  editor: editorReducer,
});

export default rootReducer;
