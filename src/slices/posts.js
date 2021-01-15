import { createSlice } from '@reduxjs/toolkit';

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
			state.hassErrors = true;
		},
	},
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions;
export const postsSelector = state => state.posts;
export default postsSlice.reducer;

export const fetchPosts = () => {
	return async dispatch => {
		dispatch(getPosts())

		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await response.json()

			dispatch(getPostsSuccess(data));
		} catch (error) {
			dispatch(getPostsFailure());
		}
	}
}
