import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllPets = createAsyncThunk(
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
      .addCase(fetchAllPets.fulfilled, (state, { payload }) => {
        state.allPets = payload || [];
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchAllPets.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllPets.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetPetStatus } = petsSlice.actions;

export const selectPets = (state) => state.pets;

export default petsSlice.reducer;
