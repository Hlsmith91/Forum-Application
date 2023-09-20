import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPost {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

export const getAllPostsThunk = createAsyncThunk("getAllPosts", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await response.json();
});

const initialState = {
  posts: [
    {
      id: 101,
      userId: 0,
      title: "Title of Post",
      body: "This is for testing purposes only.",
    } as IPost,
  ],
  errorMessage: "",
  isFetching: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<IPost>) {
      action.payload.id = state.posts.length + 2;
      state.posts.push(action.payload);
    },

    deletePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((x) => x.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllPostsThunk.pending, (state, action) => {
      state.isFetching = true;
      state.errorMessage = "";
    });

    builder.addCase(getAllPostsThunk.fulfilled, (state, action) => {
      state.posts = state.posts.concat(action.payload);
      state.isFetching = false;
      state.errorMessage = "";
    });

    builder.addCase(getAllPostsThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = "There was an error";
    });
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
