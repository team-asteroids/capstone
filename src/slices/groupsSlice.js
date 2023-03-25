import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllGroups = createAsyncThunk('/allGroups', async () => {
  const { data } = await axios.get('/api/groups');
  return data;
});
export const fetchSingleGroup = createAsyncThunk(
  '/singleGroup',
  async (groupId) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(`/api/groups/${groupId}`, {
      headers: {
        authorization: token,
      },
    });
    // console.log('data--> ', data);
    return data;
  }
);
export const editSingleGroup = createAsyncThunk(
  '/editSingleGroup',
  async ({ groupId, name, topic, description, imageSrc }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.put(
      `/api/groups/${groupId}`,
      {
        name,
        topic,
        description,
        imageSrc,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);
export const deleteSingleGroup = createAsyncThunk(
  '/deleteSingleGroup',
  async (groupId) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(`/api/groups/${groupId}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);
export const addSingleGroup = createAsyncThunk(
  '/addSingleGroup',
  async (groupInfo) => {
    const { data } = await axios.post('/api/groups', groupInfo);
    return data;
  }
);
export const fetchGroupMembers = createAsyncThunk(
  '/groupMembers',
  async (groupId) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(`/api/groups/${groupId}/members`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

export const addGroupMember = createAsyncThunk(
  '/addGroupMember',
  async (groupId) => {
    const token = window.localStorage.getItem('token');
    console.log('thunk token --> ', token);
    const { data } = await axios.post(
      `/api/groups/${groupId}/members`,
      { groupId },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log('data --> ', data);
    return data;
  }
);

export const deleteGroupMember = createAsyncThunk(
  '/deleteGroupMember',
  async ({ groupId, memberId }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.delete(
      `/api/groups/${groupId}/members/${memberId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);
export const fetchGroupPosts = createAsyncThunk(
  '/groupPosts',
  async (groupId) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(`/api/groups/${groupId}/posts`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  }
);

// Zoomed in view of a single group post
export const fetchGroupPost = createAsyncThunk(
  '/singleGroupPost',
  async ({ groupId, postId }) => {
    const { data } = await axios.get(`/api/groups/${groupId}/posts/${postId}`);
    return data;
  }
);

export const addGroupPost = createAsyncThunk(
  '/addGroupPost',
  async ({ groupId, content }) => {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      `/api/groups/${groupId}/posts`,
      { content },
      {
        headers: {
          authorization: token,
        },
      }
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

export const groupSlice = createSlice({
  name: 'groups',
  initialState: {
    allGroups: [],
    singleGroup: {},
    members: [],
    member: {},
    posts: [],
    post: {},
    likedStatus: '',
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGroups.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.allGroups = payload;
      })
      .addCase(fetchAllGroups.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllGroups.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(fetchSingleGroup.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleGroup = payload;
        // console.log('state--> ', state.singleGroup);
      })
      .addCase(fetchSingleGroup.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleGroup.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(editSingleGroup.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleGroup = payload;
      })
      .addCase(editSingleGroup.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(editSingleGroup.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(deleteSingleGroup.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // what should we do with payload?
      })
      .addCase(deleteSingleGroup.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deleteSingleGroup.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(addSingleGroup.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleGroup = payload;
      })
      .addCase(addSingleGroup.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addSingleGroup.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
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
        state.error = payload;
      })
      .addCase(addGroupMember.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.member = payload;
      })
      .addCase(addGroupMember.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addGroupMember.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
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
        state.error = payload;
      })
      .addCase(fetchGroupPosts.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.posts = payload;
      })
      .addCase(fetchGroupPosts.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchGroupPosts.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
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
        state.error = payload;
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
        state.error = payload;
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
        state.error = payload;
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
        state.error = payload;
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
        state.error = payload;
        // check on this
      });
  },
});

export const selectGroups = (state) => state.groups;
export default groupSlice.reducer;
