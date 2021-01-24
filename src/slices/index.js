import { combineReducers } from 'redux'

import postsReducer from './posts'
import postReducer from './post'
import userReducer from './user'

const rootReducer = combineReducers({
	posts: postsReducer,
	post: postReducer,
	user: userReducer,
});

export default rootReducer;
