import { createSlice } from '@reduxjs/toolkit';
import { getSinglePostFromAPI } from '../utils/WebAPI';

export const initialState = {
	loading: false,
	hasErrors: false,
	post: {},
}

const 
