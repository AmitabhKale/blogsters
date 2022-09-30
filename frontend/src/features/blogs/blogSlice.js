import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

const initialState = {
  blogs: [],
  blog: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Create New Blog
export const createBlog = createAsyncThunk(
  "blog/create",
  async (blogData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await blogService.createBlog(blogData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;
