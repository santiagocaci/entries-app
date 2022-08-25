import { configureStore } from '@reduxjs/toolkit';
import { uiSliceReducer } from './ui';

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
