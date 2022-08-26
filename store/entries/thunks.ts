import { createAsyncThunk } from '@reduxjs/toolkit';
import { entriesApi } from 'apis';
import { Entry } from 'interfaces';

export const getEntries = createAsyncThunk('entries/getEntries', async () => {
  const { data: entries } = await entriesApi.get<Entry[]>('/entries');
  return entries;
});

export const addNewEntry = createAsyncThunk(
  'entries/addNewEntry',
  async (description: string) => {
    const { data: entry } = await entriesApi.post<Entry>('/entries', {
      description,
    });
    return entry;
  }
);

export const updateEntry = createAsyncThunk(
  'entries/updateEntry',
  async ({ _id, description, status }: Entry) => {
    const { data: entry } = await entriesApi.put<Entry>(`/entries/${_id}`, {
      description,
      status,
    });
    return entry;
  }
);

export const deleteEntry = createAsyncThunk(
  'entries/deleteEntry',
  async (id: string) => {
    const { data: entry } = await entriesApi.delete<Entry>(`entries/${id}`);
    return entry;
  }
);
