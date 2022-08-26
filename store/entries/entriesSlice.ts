import { createSlice } from '@reduxjs/toolkit';
import { Entry } from 'interfaces';
import { RootState } from 'store/store';
import { addNewEntry, deleteEntry, getEntries, updateEntry } from './thunks';

interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
};

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    resetEntries: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getEntries.fulfilled, (state, action) => {
        return {
          ...state,
          entries: action.payload,
        };
      })
      .addCase(addNewEntry.fulfilled, (state, action) => {
        return {
          ...state,
          entries: [...state.entries, action.payload],
        };
      })
      .addCase(deleteEntry.fulfilled, (state, action) => {
        return {
          ...state,
          entries: state.entries.filter(
            entry => entry._id !== action.payload._id
          ),
        };
      })
      .addCase(updateEntry.fulfilled, (state, { payload }) => {
        return {
          ...state,
          entries: state.entries.map(entry => {
            if (entry._id === payload._id) {
              entry.description = payload.description;
              entry.status = payload.status;
            }
            return entry;
          }),
        };
      });
  },
});

export const selectEntries = (state: RootState) => state.entries.entries;

export const { resetEntries } = entriesSlice.actions;

export default entriesSlice.reducer;
