import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllPosts = createAsyncThunk('/allPosts', async () => {
  const { data } = await axios.get('/api/posts');
  return data;
});

export const fetchAllPostLikes = createAsyncThunk('/allPostLikes', async () => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get('/api/posts/likes', {
    headers: {
      authorization: token,
    },
  });
  console.log('likes in thunk -->', data);
  return data;
});

export const likePost = createAsyncThunk('/likePost', async ({ postId }) => {
  const token = localStorage.getItem('token');
  const { data } = await axios.post(
    `/api/posts/${postId}/likes`,
    { postId },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
});

export const unlikePost = createAsyncThunk(
  '/unlikePost',
  async ({ postId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(`/api/posts/${postId}/likes`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    allComments: [],
    postLikes: [],
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        // console.log(payload);
        state.error = '';
        state.allPosts = payload;
      })
      .addCase(fetchAllPosts.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllPosts.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(fetchAllPostLikes.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        console.log(payload);
        state.error = '';
        state.postLikes = payload;
      })
      .addCase(fetchAllPostLikes.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllPostLikes.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(likePost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // state.likedStatus = true;
        state.postLikes.push(payload);
        // what should we do with payload?
      })
      .addCase(likePost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(likePost.rejected, (state, { payload }) => {
        state.status = 'failed';
        // state.likedStatus = true; // or dont change at all?
        state.error = payload;
        // check on this
      })
      .addCase(unlikePost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // state.likedStatus = false;
        state.postLikes = state.likes.filter(
          (like) =>
            !(like.postId === payload.postId && like.userId === payload.userId)
        );
        // what should we do with payload?
      })
      .addCase(unlikePost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(unlikePost.rejected, (state, { payload }) => {
        state.status = 'failed';
        // state.likedStatus = true; // or dont change at all?
        state.error = payload;
        // check on this
      });
  },
});

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
