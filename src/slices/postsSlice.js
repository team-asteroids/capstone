import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllPosts = createAsyncThunk('/allPosts', async () => {
  const { data } = await axios.get('/api/posts');
  return data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.error = '';
      state.allGroups = payload;
    });
  },
});

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
