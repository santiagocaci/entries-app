import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
}

export const UiContext = createContext({} as ContextProps);
