import { configureStore } from '@reduxjs/toolkit';
import { entriesReducer } from './entries';
import { uiSliceReducer } from './ui';

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    entries: entriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
