import { PropsWithChildren, FC, useReducer } from 'react';
import { UiContext } from './UiContext';
import { uiReducer } from './uiReducer';

export interface UiState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;
}

const UI_INITAL_STATE: UiState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDraggin: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });

  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });

  const startDraggin = () => dispatch({ type: 'UI - Start Dragging' });
  const endDraggin = () => dispatch({ type: 'UI - End Dragging' });

  return (
    <UiContext.Provider
      value={{
        ...state,

        // Function
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDraggin,
        endDraggin,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
