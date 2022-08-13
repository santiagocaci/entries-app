import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onToggleIsAdding = () => {
    setInputValue('');
    setIsAdding(!isAdding);
  };

  const onSaveEntry = () => {
    if (inputValue.trim().length === 0) return;

    console.log('anashe');
  };

  return (
    <Box marginBottom={2} paddingX={1}>
      {isAdding ? (
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
            onBlur={() => setTouched(true)}
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
              onClick={onToggleIsAdding}
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
          onClick={onToggleIsAdding}
          variant='contained'
          startIcon={<AddCircleIcon />}
        >
          Add new Entry
        </Button>
      )}
    </Box>
  );
};
