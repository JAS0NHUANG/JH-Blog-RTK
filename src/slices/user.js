import { createSlice } from "@reduxjs/toolkit";
import { getMeFromAPI, loginAPI } from "../utils/WebAPI";
import { setAuthToken } from "../utils/utils";

export const initialState = {
  user: "",
  userId: "",
  isLoading: false,
  hasErrors: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getMe: (state) => {
      state.isLoading = true;
    },
    getMeSuccess: (state, action) => {
      state.userId = action.payload.data.id;
      state.user = action.payload.data.username;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getMeFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    login: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.hasErrors = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getMe,
  getMeSuccess,
  getMeFailure,
  login,
  loginSuccess,
  loginFailure,
} = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;

export const loginRequest = (username, password) => {
  return async (dispatch) => {
    dispatch(login());

    try {
      const responseData = await loginAPI(username, password);
      setAuthToken(responseData.token);
      dispatch(loginSuccess(responseData));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

export const fetchMe = () => {
  return async (dispatch) => {
    dispatch(getMe());

    try {
      const responseData = await getMeFromAPI();

      dispatch(getMeSuccess(responseData));
    } catch (error) {
      dispatch(getMeFailure());
    }
  };
};
