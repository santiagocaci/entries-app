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

  return (
    <UiContext.Provider
      value={{
        sideMenuOpen: false,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
