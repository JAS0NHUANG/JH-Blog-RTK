import { createSlice } from '@reduxjs/toolkit';
import { getPostsFromAPI } from '../utils/WebAPI';

export const initialState = {
	loading: false,
	hasErrors: false,
	posts: [],
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: state => {
			state.loading = true;
		},
		getPostsSuccess: (state, action) => {
			state.posts = action.payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getPostsFailure: state => {
			state.loading = false;
			state.hasErrors = true;
		},
	},
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions;
export const postsSelector = state => state.posts;
export default postsSlice.reducer;

export const fetchPosts = (page) => {
	return async dispatch => {
		dispatch(getPosts())

		try {
			const responseData = await getPostsFromAPI(page);

			dispatch(getPostsSuccess(responseData));
		} catch (error) {
			dispatch(getPostsFailure());
		}
	}
}
