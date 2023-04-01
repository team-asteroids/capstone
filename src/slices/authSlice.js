import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logIn = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      let { data } = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const attemptTokenLogin = createAsyncThunk(
  'attemptTokenLogin',
  async (x, { rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) return {};
      const { data } = await axios.get(`/api/auth`, {
        headers: {
          authorization: token,
        },
      });
      return { data, token };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signUp = createAsyncThunk(
  'signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/users', userData);
      localStorage.setItem('token', data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createAccessData = createAsyncThunk(
  'access',
  async ({ id, zip, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/${id}/access`,
        { zip: zip },
        {
          headers: {
            authorization: token,
          },
        }
      );
      // console.log('createAccessData --> ', data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAccessData = createAsyncThunk('getAccessData', async (id) => {
  const token = window.localStorage.getItem('token');
  const { data } = await axios.get(`/api/users/${id}/access/${id}`, {
    headers: {
      authorization: token,
    },
  });
  // console.log('getAccessData --> ', data);
  return data;
});

export const editSingleUser = createAsyncThunk(
  'editSingleUser',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) return {};
      const { data } = await axios.put(`/api/users/${id}`, formData, {
        headers: {
          authorization: token,
        },
      });
      // console.log('data--> ', data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateAccessData = createAsyncThunk(
  'updateAccessData',
  async ({ id, token, formAccessData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `/api/users/${id}/access/${id}`,
        formAccessData,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateClientSitterStatus = createAsyncThunk(
  'updatePermissions',
  async ({ id, token, sitterId, accessStatus }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `/api/users/${id}/sitter/${sitterId}/access`,
        { status: accessStatus },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// get all logged in user sitter's clients
export const fetchAllSitterAuthClients = createAsyncThunk(
  'fetchUserClients',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/clients`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// get single logged in user sitter's clients
export const fetchSingleSitterAuthClient = createAsyncThunk(
  'fetchClient',
  async ({ id, token, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/clients/${userId}`, {
        headers: {
          authorization: token,
        },
      });

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// get all logged in user's sitters
export const fetchAllUserAuthSitters = createAsyncThunk(
  'fetchUsersSitters',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/sitters`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// get single logged in user's sitter
export const fetchSingleUserAuthSitter = createAsyncThunk();

// get all bookings of logged in user sitter
export const fetchAllSitterAuthBookings = createAsyncThunk();

// get single booking of logged in user sitter
export const fetchSingleSitterAuthBooking = createAsyncThunk();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    userAuth: {},
    accessData: {},
    userAuthSitter: {}, // sitter obj
    userAuthSitterClients: [],
    userAuthSitterClient: {},
    sittersOfUserAuth: [],
    sitterOfUserAuth: {},
    authBookings: [],
    authBooking: {},
    accessPermissions: {},
    error: '',
    status: '',
  },
  reducers: {
    resetAuthStatus: (state) => {
      state.status = '';
      state.error = '';
    },
    logOut: (state) => {
      state.userAuth = {};
      state.token = '';
      state.status = '';
      state.accessData = {};
      state.userAuthSitter = {};
      state.userAuthSitterClients = [];
      state.userAuthSitterClient = {};
      state.sittersOfUserAuth = [];
      state.sitterOfUserAuth = {};
      state.authBookings = [];
      state.authBooking = {};
      state.accessPermissions = {};
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.status = 'success';
        state.error = '';
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(attemptTokenLogin.fulfilled, (state, { payload }) => {
        state.userAuth = payload.data;
        state.userAuthSitter = payload.data.userSitter;
        state.status = 'success';
        state.error = '';
        state.token = payload.token;
      })
      .addCase(attemptTokenLogin.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(attemptTokenLogin.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.token = payload.token;
        state.error = '';
      })
      .addCase(signUp.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(createAccessData.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.accessData = payload;
        state.error = '';
      })
      .addCase(createAccessData.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(createAccessData.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(getAccessData.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.accessData = payload;
        state.error = '';
      })
      .addCase(getAccessData.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getAccessData.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(editSingleUser.fulfilled, (state, { payload }) => {
        state.userAuth = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(editSingleUser.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(editSingleUser.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(updateAccessData.fulfilled, (state, { payload }) => {
        state.accessData = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(updateAccessData.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updateAccessData.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(updateClientSitterStatus.fulfilled, (state, { payload }) => {
        state.accessPermissions = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(updateClientSitterStatus.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updateClientSitterStatus.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchAllSitterAuthClients.fulfilled, (state, { payload }) => {
        state.userAuthSitterClients = payload.clientsAndStatus;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchAllSitterAuthClients.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllSitterAuthClients.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitterAuthClient.fulfilled, (state, { payload }) => {
        state.userAuthSitterClient = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitterAuthClient.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitterAuthClient.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchAllUserAuthSitters.fulfilled, (state, { payload }) => {
        state.sittersOfUserAuth = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchAllUserAuthSitters.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllUserAuthSitters.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetAuthStatus, logOut } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
