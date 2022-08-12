import { PropsWithChildren, FC, useReducer } from 'react';
import { UiContext } from './UiContext';
import { uiReducer } from './uiReducer';

export interface UiState {
  sideMenuOpen: boolean;
}

const UI_INITAL_STATE: UiState = {
  sideMenuOpen: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        // Function
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
