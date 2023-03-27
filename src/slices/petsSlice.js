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

export const fetchSinglePet = createAsyncThunk(
  'singlePet',
  async (petId, { rejectWithValue }) => {
    const { data } = await axios.get(`/api/pets/${petId}`);
    return data;
  }
);

export const fetchPetDetails = createAsyncThunk(
  'petDetails',
  async (petId, { rejectWithValue }) => {
    const { data } = await axios.get(`/api/pets/${petId}/details`);
    return data;
  }
);

const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    allPets: [],
    singlePet: {},
    petDetails: {},
    status: '',
    error: '',
  },
  reducers: {
    resetPetStatus: (state) => {
      state.status = '';
      state.error = '';
      state.singlePet = {};
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
      })
      .addCase(fetchSinglePet.fulfilled, (state, { payload }) => {
        state.singlePet = payload;
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchSinglePet.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSinglePet.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchPetDetails.fulfilled, (state, { payload }) => {
        state.petDetails = payload;
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchPetDetails.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchPetDetails.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetPetStatus } = petsSlice.actions;

export const selectPets = (state) => state.pets;

export default petsSlice.reducer;
