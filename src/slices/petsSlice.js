import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserPets = createAsyncThunk(
  'userPets',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/pets`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    allPets: [],
    singlePet: {},
    userPets: [],
    userSinglePet: {},
    status: '',
    error: '',
  },
  reducers: {
    resetPetStatus: (state) => {
      state.status = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPets.fulfilled, (state, { payload }) => {
        state.userPets = payload || [];
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchUserPets.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchUserPets.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const selectPets = (state) => state.pets;

export default petsSlice.reducer;
