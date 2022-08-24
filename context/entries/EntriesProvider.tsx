import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { entriesApi } from 'apis';
import { useSnackbar } from 'notistack';

import { Entry } from 'interfaces';
import { IEntry } from 'models';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });

    dispatch({ type: '[Entry] - Add-Entry', payload: data });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnack: boolean = false
  ) => {
    try {
      const { data: entry } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({
        type: '[Entry] - Entry-Updated',
        payload: entry,
      });
      if (showSnack) {
        enqueueSnackbar('updated entry', {
          variant: 'success',
          autoHideDuration: 2000,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const getEntries = async () => {
    const { data } = await entriesApi.get<IEntry[]>('/entries');
    dispatch({ type: '[Entry] - Refresh-Data', payload: data });
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
