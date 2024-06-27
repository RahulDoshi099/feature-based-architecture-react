// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/state/userSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
