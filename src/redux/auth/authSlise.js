import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  // user: { name: null, email: null, theme: light },
  // token: null,
  // isLoggedIn: false,
  // isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // extraReducers: builder => {
  //   builder
      // .addCase(register.fulfilled, handleFulfilledRegister)
      // .addCase(register.rejected, handleRejectedRegister)
      // .addCase(logIn.fulfilled, handleFulfilledLogIn)
      // .addCase(logIn.rejected, handleRejectedLogIn)
      // .addCase(logOut.fulfilled, handleFulfilledLogOut)
      // .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      // .addCase(refreshUser.pending, handlePendingRefresh)
      // .addCase(refreshUser.rejected, handleRejectedRefresh);
  // },
});

export const authReducer = authSlice.reducer;
