import { FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: 1.5,
        }}
      >
        <List sx={{ opacity: 1, padding: 0 }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
