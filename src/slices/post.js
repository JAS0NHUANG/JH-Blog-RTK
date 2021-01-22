import { createSlice } from '@reduxjs/toolkit';
import { getSinglePostFromAPI } from '../utils/WebAPI';

export const initialState = {
	loading: false,
	hasErrors: false,
	post: {},
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		getPost: state => {
			state.loading = true;
		},
		getPostSuccess: (state, action) => {
			state.post = action.payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getPostFailure: state => {
			state.loading = false;
			state.hasErrors = true;
		},
		clearPost: state => {
			state.post = {};
			state.loading = false;
			state.hasErrors = false;
		},
	},
})

export const { getPost, getPostSuccess, getPostFailure } = postSlice.actions;
export const postSelector = state => state.post;
export default postSlice.reducer;

export const fetchSinglePost = (id) => {
	return async dispatch => {
		dispatch(getPost())

		try {
			const responseData = await getSinglePostFromAPI(id);

			dispatch(getPostSuccess(responseData));
		} catch (error) {
			dispatch(getPostFailure());
		}
	}
}
