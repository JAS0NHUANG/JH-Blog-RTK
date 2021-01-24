import { createSlice } from "@reduxjs/toolkit";
import { sendPostAPI, updatePostAPI, deletePostAPI } from "../utils/WebAPI";

export const initialState = {
  postResponse: null,
  isLoading: false,
  hasErrors: false,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    editOperation: (state) => {
      state.isLoading = true;
    },
    editPostSuccess: (state, action) => {
      state.postResponse = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    editPostFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    deletePostSuccess: (state, action) => {
      state.postResponse = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    deletePostFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
    clearPostResponse: (state, action) => {
      state.postResponse = null;
      state.isLoading = false;
      state.hasErrors = false;
    },
  },
});

export const {
  editOperation,
  editPostSuccess,
  editPostFailure,
  deletePostSuccess,
  deletePostFailure,
  clearPostResponse,
} = editorSlice.actions;
export const editorSelector = (state) => state.editor;
export default editorSlice.reducer;

export const sendPostRequest = (title, body, id) => {
  return async (dispatch) => {
    dispatch(editOperation());

    try {
      let responseData = {};
      if (id) {
        responseData = await updatePostAPI(title, body, id);
      } else {
        responseData = await sendPostAPI(title, body);
      }

      dispatch(editPostSuccess(responseData));
    } catch (error) {
      dispatch(editPostFailure());
    }
  };
};

export const deletePostRequest = (id) => {
  return async (dispatch) => {
    dispatch(editOperation());

    try {
      const responseData = await deletePostAPI(id);
      dispatch(deletePostSuccess(responseData));
    } catch (error) {
      dispatch(deletePostFailure());
    }
  };
};

export const clearPostResponseData = () => {
  return (dispatch) => {
    dispatch(clearPostResponse());
  };
};
