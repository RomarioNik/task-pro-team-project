import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  refreshUser,
  changeTheme,
  updateProfile,
  sendNeedHelpLetter,
} from './operations';
import { toast } from 'react-hot-toast';

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.refreshToken;
  state.accessToken = payload.accessToken;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handlePendingRegister = state => {
  state.isLoading = true;
};

const handleRejectedRegister = state => {
  state.isLoading = false;
  toast.error('Error Register');
};

const handleFulfilledLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.refreshToken;
  state.accessToken = payload.accessToken;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handlePendingLogIn = state => {
  state.isLoading = true;
};

const handleRejectedLogIn = state => {
  state.isLoading = false;
  toast.error('Error Login. Wrong email or password, or user does not exist');
};

const handleFulfilledLogOut = state => {
  state.user = {};
  state.token = '';
  state.isLoggedIn = false;
};

const handleFulfilledRefresh = (state, { payload }) => {
  // state.token = payload.refreshToken;
  // state.accessToken = payload.accessToken;
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
};

const handlePendingRefresh = state => {
  state.isRefreshing = true;
  state.isLoading = true;
};

const handleRejectedRefresh = state => {
  state.isRefreshing = false;
  state.isLoading = false;
  state.isLoggedIn = false;
};

const handleFulfilledChangeTheme = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
};

const handlePendingChangeTheme = state => {
  state.isLoading = true;
};

const handleRejectedChangeTheme = state => {
  state.isLoading = false;
};

const handleFulfilledUpdateProfile = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
  toast.success(`Profile updated!`);
  if (payload.token === '') {
    state.isLoggedIn = false;
  }
};

const handlePendingUpdateProfile = state => {
  state.isLoading = true;
};

const handleRejectedUpdateProfile = state => {
  state.isLoading = false;
  toast.error(`Something went wrong`);
};

const handleFulfilledSendLetter = (state, { payload }) => {
  state.isLoading = false;
  toast.success(`${payload.message}`);
};

const handlePendingSendLetter = state => {
  state.isLoading = true;
};

const handleRejectedSendLetter = (state, { payload }) => {
  state.isLoading = false;
  toast.error(`Something went wrong`);
};

const initialState = {
  user: {},
  token: '',
  accessToken: '',
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, { payload }) {
      state.token = payload.refreshToken;
      state.accessToken = payload.accessToken;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, handleFulfilledRegister)
      .addCase(registerUser.pending, handlePendingRegister)
      .addCase(registerUser.rejected, handleRejectedRegister)
      .addCase(loginUser.fulfilled, handleFulfilledLogIn)
      .addCase(loginUser.pending, handlePendingLogIn)
      .addCase(loginUser.rejected, handleRejectedLogIn)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addCase(changeTheme.fulfilled, handleFulfilledChangeTheme)
      .addCase(changeTheme.pending, handlePendingChangeTheme)
      .addCase(changeTheme.rejected, handleRejectedChangeTheme)
      .addCase(updateProfile.fulfilled, handleFulfilledUpdateProfile)
      .addCase(updateProfile.pending, handlePendingUpdateProfile)
      .addCase(updateProfile.rejected, handleRejectedUpdateProfile)
      .addCase(sendNeedHelpLetter.fulfilled, handleFulfilledSendLetter)
      .addCase(sendNeedHelpLetter.pending, handlePendingSendLetter)
      .addCase(sendNeedHelpLetter.rejected, handleRejectedSendLetter),
});

export const { setTokens } = authSlice.actions;
export const authReducer = authSlice.reducer;
