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
  async ({
    entry,
    description,
    status,
  }: {
    entry: Entry;
    description: string;
    status: string;
  }) => {
    const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
      description,
      status,
    });
    return data;
  }
);

export const deleteEntry = createAsyncThunk(
  'entries/deleteEntry',
  async (id: string) => {
    const { data: entry } = await entriesApi.delete<Entry>(`entries/${id}`);
    return entry;
  }
);
