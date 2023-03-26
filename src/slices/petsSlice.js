import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  extraReducers: (builder) => {},
});

export const selectPets = (state) => state.pets;

export default petsSlice.reducers;
