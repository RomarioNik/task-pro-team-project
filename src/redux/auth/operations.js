import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiPublic, apiPrivate, apiPrivateFormData } from 'services/axios';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await apiPublic.post('/api/auth/signup', user);
      if (data.token) {
        const loginData = await apiPublic.post('/api/auth/signin', {
          email: user.email,
          password: user.password,
        });

        return loginData.data;
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await apiPublic.post('/api/auth/signin', user);
      console.log(data);
      // data.accessToken to request
      // data.refreshToken to state
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await apiPrivate.post('/api/auth/signout');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const { data } = await apiPrivate.get('/api/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  'auth/usertheme',
  async (userTheme, thunkAPI) => {
    try {
      const { data } = await apiPrivate.patch('/api/auth', userTheme);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateprofile',
  async (formData, thunkAPI) => {
    try {
      const { data } = await apiPrivateFormData.put(
        '/api/auth/update',
        formData
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
