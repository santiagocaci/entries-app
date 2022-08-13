import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending - Labore id duis fugiat consequat magna.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'In-Progress - Excepteur consectetur anim cupidatat non.',
      status: 'in-progress',
      createdAt: Date.now() + 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Finished - Aute Lorem elit eu consectetur occaecat ex consectetur excepteur proident labore magna laboris ex dolor.',
      status: 'finished',
      createdAt: Date.now() + 2000000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now(),
    };
    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
