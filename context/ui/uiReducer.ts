import { UiState } from './UiProvider';

type UiActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Set isAddingEntry'; payload: boolean }
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - End Dragging' };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false,
      };
    case 'UI - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    case 'UI - Start Dragging':
      return {
        ...state,
        isDraggin: true,
      };

    case 'UI - End Dragging':
      return {
        ...state,
        isDraggin: false,
      };

    default:
      return state;
  }
};
