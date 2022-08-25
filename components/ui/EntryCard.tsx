import { DragEvent, FC, useMemo } from 'react';
import { useRouter } from 'next/router';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { Entry } from 'interfaces';
import { dateFunctions } from 'utils';
import { endDraggin, startDraggin } from 'store/ui';
import { useAppDispatch } from 'store';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const createdAtMemorize = useMemo(
    () => dateFunctions.getFormatDistance(entry.createdAt),
    [entry.createdAt]
  );

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);
    dispatch(startDraggin());
  };

  const onDragEnd = () => {
    dispatch(endDraggin());
  };

  const onClickCard = () => {
    router.push(`/entries/${entry._id}`);
  };

  return (
    <Card
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      sx={{ marginBottom: 1 }}
      onClick={onClickCard}
      draggable
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant='body2'>{createdAtMemorize}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
