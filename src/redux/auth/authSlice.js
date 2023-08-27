// import { createSlice } from '@reduxjs/toolkit';



// const initialState = {
//   // user: { name: null, email: null, theme: light },
//   // token: null,
//   // isLoggedIn: false,
//   // isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   // extraReducers: builder => {
//   //   builder
//       // .addCase(register.fulfilled, handleFulfilledRegister)
//       // .addCase(register.rejected, handleRejectedRegister)
//       // .addCase(logIn.fulfilled, handleFulfilledLogIn)
//       // .addCase(logIn.rejected, handleRejectedLogIn)
//       // .addCase(logOut.fulfilled, handleFulfilledLogOut)
//       // .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
//       // .addCase(refreshUser.pending, handlePendingRefresh)
//       // .addCase(refreshUser.rejected, handleRejectedRefresh);
//   // },
// });

// export const authReducer = authSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from './operations';

const initialState = {
  user: { name: '', email: '', avatar: '', id: '' },
  token: '',
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: 
  builder =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;       
        state.token = action.payload.token;     
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;       
        state.isLoggedIn = true;
        state.isLoading = false;

      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: '', email: '', avatar: '' };
        state.token = '';
        state.isLoggedIn = false;
      })

});

export const authReducer = authSlice.reducer;