import { createSlice } from '@reduxjs/toolkit';
import { getPostsFromAPI } from '../utils/WebAPI';

export const initialState = {
	posts: [],
  totalPosts: 0,
  currentPage: 1,
	isLoading: false,
	hasErrors: false,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts: state => {
			state.isLoading = true;
		},
		getPostsSuccess: (state, action) => {
      console.log(action.payload)
			state.posts = action.payload.posts;
			state.currentPage = action.payload.page;
      state.totalPosts = action.payload.totalPosts;
			state.isLoading = false;
			state.hasErrors = false;
		},
		getPostsFailure: state => {
			state.isLoading = false;
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
