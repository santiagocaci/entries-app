import { DragEvent, FC, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { Entry, EntryStatus } from 'interfaces';
import { EntryCard } from './EntryCard';

import styles from './EntryList.module.css';

import { endDraggin, selectDraggin } from 'store/ui';
import { useAppDispatch, useAppSelector } from 'store';
import { selectEntries } from 'store/entries';
import { updateEntry } from 'store/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const entriesRedux = useAppSelector(selectEntries);

  const isDraggin = useAppSelector(selectDraggin);
  const dispatch = useAppDispatch();

  const entriesByStatus = useMemo(
    () => entriesRedux.filter(entry => entry.status === status),
    [entriesRedux, status]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('text');
    const entry: Entry = entriesRedux.find(entry => entry._id === id)!;

    if (status !== entry.status) {
      dispatch(
        updateEntry({
          entry,
          description: entry.description,
          status,
        })
      );
    }
    dispatch(endDraggin());
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDraggin ? styles.draggin : ''}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: 1.5,
        }}
      >
        <List
          sx={{
            opacity: isDraggin ? 0.3 : 1,
            padding: 0,
            transition: 'all .3s',
          }}
        >
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
