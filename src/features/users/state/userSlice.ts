// src/features/users/state/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserService } from '../api/UserService';
import { UserState } from '../types/userTypes';
import { RootState } from '../../../store/store';

const userService = new UserService();

const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return userService.fetchUsers();
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Could not fetch users';
      });
  },
});

export const selectAllUsers = (state: RootState) => state.users.users;
export const getUserStatus = (state: RootState) => state.users.status;
export const getUserError = (state: RootState) => state.users.error;

export default userSlice.reducer;
