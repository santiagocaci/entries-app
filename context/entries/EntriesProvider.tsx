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
      description: 'Labore id duis fugiat consequat magna.',
      status: 'in-progress',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Excepteur consectetur anim cupidatat non.',
      status: 'pending',
      createdAt: Date.now() + 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Aute Lorem elit eu consectetur occaecat ex consectetur excepteur proident labore magna laboris ex dolor.',
      status: 'finished',
      createdAt: Date.now() + 2000000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
