import { ChangeEvent, FC, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import { Layout } from 'components/layouts';
import { Entry, EntryStatus } from 'interfaces';
import { dbEntries } from 'database';
import { dateFunctions } from 'utils';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'store';
import { deleteEntry, updateEntry } from 'store/entries';

const validStatus: EntryStatus[] = ['finished', 'in-progress', 'pending'];

interface Props {
  entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const createdAtMemorize = useMemo(
    () => dateFunctions.getFormatDistance(entry.createdAt),
    [entry.createdAt]
  );

  const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (touched) setTouched(false);
    setInputValue(e.target.value);
  };

  const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };

  const onClickSaveButton = () => {
    if (!inputValue.trim()) {
      setInputValue('');
      return setTouched(true);
    }

    dispatch(updateEntry({ entry, status, description: inputValue }));
  };

  const onClickDeleteButton = () => {
    dispatch(deleteEntry(entry._id));
    router.push('/');
  };

  return (
    <Layout title={inputValue.substring(0, 10) + '...'}>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6} sx={{ paddingX: { xs: 2, sm: 0 } }}>
          <Card sx={{ padding: 0 }}>
            <CardHeader
              sx={{ padding: 2, paddingBottom: 1 }}
              title={`Entry: ${inputValue}`}
              subheader={`created ${createdAtMemorize}`}
            />
            <CardContent sx={{ padding: 1, paddingTop: 1 }}>
              <TextField
                sx={{ marginBottom: 1 }}
                fullWidth
                placeholder='New Entry'
                autoFocus
                multiline
                label='New Entry'
                onChange={onInputValueChanged}
                error={touched}
                value={inputValue}
                helperText={touched && 'Entry empty'}
              />
              <FormControl>
                <FormLabel id='status-label'>Status:</FormLabel>
                <RadioGroup
                  onChange={onStatusChanged}
                  row
                  aria-labelledby='status-label'
                  value={status}
                >
                  {validStatus.map(value => (
                    <FormControlLabel
                      sx={{ textTransform: 'capitalize' }}
                      label={value}
                      key={value}
                      value={value}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                fullWidth
                startIcon={<SaveIcon />}
                onClick={onClickSaveButton}
                disabled={inputValue.trim().length <= 0 && touched}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        onClick={onClickDeleteButton}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'red',
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { entry: { ...entry, _id: entry._id.toString() } },
  };
};

export default EntryPage;
