import { useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useAppDispatch, useAppSelector } from 'store';
import { selectAddEntry, setIsAddingEntry } from 'store/ui';
import { addNewEntry } from 'store/entries';

export const NewEntry = () => {
  const isAddingEntry = useAppSelector(selectAddEntry);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const handleCancelButton = () => {
    dispatch(setIsAddingEntry(!isAddingEntry));
    setInputValue('');
  };

  const onSaveEntry = () => {
    if (inputValue.trim().length === 0) return setTouched(true);

    dispatch(addNewEntry(inputValue));

    setInputValue('');
    dispatch(setIsAddingEntry(false));
    setTouched(false);
  };

  return (
    <Box marginBottom={2} paddingX={1}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='New Entry'
            autoFocus
            multiline
            label='New Entry'
            helperText={
              inputValue.trim().length <= 0 && touched && 'Add a new Entry'
            }
            error={inputValue.trim().length <= 0 && touched}
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Box display='flex' justifyContent='space-between' marginX={2}>
            <Button
              variant='contained'
              color='secondary'
              endIcon={<SaveIcon />}
              onClick={onSaveEntry}
            >
              Save
            </Button>
            <Button
              onClick={handleCancelButton}
              variant='outlined'
              color='secondary'
              endIcon={<CancelIcon />}
            >
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <Button
          onClick={() => {
            if (touched) setTouched(false);
            dispatch(setIsAddingEntry(true));
          }}
          variant='contained'
          startIcon={<AddCircleIcon />}
        >
          Add new Entry
        </Button>
      )}
    </Box>
  );
};
