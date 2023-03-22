import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllGroups = createAsyncThunk('/allGroups', async () => {
  const { data } = await axios.get('/api/groups');
  return data;
});
export const fetchSingleGroup = createAsyncThunk(
  '/singleGroup',
  async (groupId) => {
    const { data } = await axios.get(`/api/groups/${groupId}`);
    return data;
  }
);
export const editSingleGroup = createAsyncThunk(
  '/editSingleGroup',
  async (groupId) => {
    const { data } = await axios.put(`/api/groups/${groupId}`);
    return data;
  }
);
export const deleteSingleGroup = createAsyncThunk(
  '/deleteSingleGroup',
  async (groupId) => {
    const { data } = await axios.delete(`/api/groups/${groupId}`);
    return data;
  }
);

export const groupSlice = createSlice({
  name: 'groups',
  initialState: {
    groups: [],
    singleGroup: {},
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGroups.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.groups = payload;
      })
      .addCase(fetchAllGroups.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllGroups.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleGroup.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleGroup = payload;
      })
      .addCase(fetchSingleGroup.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleGroup.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
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
        state.error = payload.message;
      })
      .addCase(deleteSingleGroup.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleGroup = payload;
      })
      .addCase(deleteSingleGroup.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deleteSingleGroup.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});
