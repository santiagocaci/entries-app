import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggin: boolean;

  // Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  startDraggin: () => void;
  endDraggin: () => void;
}

export const UiContext = createContext({} as ContextProps);
