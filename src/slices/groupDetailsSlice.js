import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGroupMembers = createAsyncThunk(
  '/groupMembers',
  async (groupId) => {
    const { data } = await axios.get(`/api/groups/${groupId}/members`);
    return data;
  }
);
export const deleteGroupMember = createAsyncThunk(
  '/deleteGroupMember',
  async ({ groupId, memberId }) => {
    const { data } = await axios.delete(
      `/api/groups/${groupId}/members/${memberId}`
    );
    return data;
  }
);

// Zoomed in view of a single group post
export const fetchGroupPost = createAsyncThunk(
  '/groupPosts',
  async ({ groupId, postId }) => {
    const { data } = await axios.get(`/api/groups/${groupId}/posts/${postId}`);
    return data;
  }
);
export const addGroupPost = createAsyncThunk(
  '/addGroupPost',
  async ({ groupId, postContent }) => {
    const { data } = await axios.post(
      `/api/groups/${groupId}/posts`,
      postContent
    );
    return data;
  }
);
export const editGroupPost = createAsyncThunk(
  '/editGroupPost',
  async ({ groupId, postId, editedInfo }) => {
    const { data } = await axios.put(
      `/api/groups/${groupId}/posts/${postId}`,
      editedInfo
    );
    return data;
  }
);
export const deleteGroupPost = createAsyncThunk(
  '/deleteGroupPost',
  async ({ groupId, postId }) => {
    const { data } = await axios.delete(
      `/api/groups/${groupId}/posts/${postId}`
    );
    return data;
  }
);
export const likeGroupPost = createAsyncThunk(
  '/likeGroupPost',
  async ({ groupId, postId }) => {
    const { data } = await axios.post(
      `/api/groups/${groupId}/posts/${postId}/likes`
    );
    return data;
  }
);
export const unlikeGroupPost = createAsyncThunk(
  '/unlikeGroupPost',
  async ({ groupId, postId }) => {
    const { data } = await axios.delete(
      `/api/groups/${groupId}/posts/${postId}/likes`
    );
    return data;
  }
);

export const groupDetailsSlice = createSlice({
  name: 'singleGroupDetails',
  initialState: {
    group: {},
    members: [],
    post: {},
    likedStatus: '',
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroupMembers.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.members = payload;
      })
      .addCase(fetchGroupMembers.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchGroupMembers.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(deleteGroupMember.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // what should we do with payload?
      })
      .addCase(deleteGroupMember.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deleteGroupMember.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchGroupPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.post = payload;
      })
      .addCase(fetchGroupPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchGroupPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(addGroupPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.post = payload;
      })
      .addCase(addGroupPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addGroupPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(editGroupPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.post = payload;
      })
      .addCase(editGroupPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(editGroupPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(deleteGroupPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.post = payload;
        // what should we do with payload?
      })
      .addCase(deleteGroupPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deleteGroupPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(likeGroupPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.likedStatus = true;
        // what should we do with payload?
      })
      .addCase(likeGroupPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(likeGroupPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.likedStatus = true; // or dont change at all?
        state.error = payload.message;
        // check on this
      })
      .addCase(unlikeGroupPost.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.likedStatus = false;
        // what should we do with payload?
      })
      .addCase(unlikeGroupPost.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(unlikeGroupPost.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.likedStatus = true; // or dont change at all?
        state.error = payload.message;
        // check on this
      });
  },
});

export default groupDetailsSlice.reducer;
