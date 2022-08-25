import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

interface UiState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;
}

const initialState: UiState = {
  isAddingEntry: false,
  isDraggin: false,
  sideMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openSideBar: state => {
      return { ...state, sideMenuOpen: true };
    },
    closeSideBar: state => {
      return { ...state, sideMenuOpen: false };
    },
    setIsAddingEntry: (state, action: PayloadAction<boolean>) => {
      return { ...state, isAddingEntry: action.payload };
    },
    startDraggin: state => {
      return { ...state, isDraggin: true };
    },
    endDraggin: state => {
      return { ...state, isDraggin: false };
    },
    resetState: () => {
      return { ...initialState };
    },
  },
});

export const {
  closeSideBar,
  endDraggin,
  openSideBar,
  resetState,
  setIsAddingEntry,
  startDraggin,
} = uiSlice.actions;

export const selectSideMenu = (state: RootState) => state.ui.sideMenuOpen;
export const selectAddEntry = (state: RootState) => state.ui.isAddingEntry;
export const selectDraggin = (state: RootState) => state.ui.isDraggin;

export default uiSlice.reducer;
