import { DragEvent, FC, useContext, useMemo } from 'react';
import { useRouter } from 'next/router';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { Entry } from 'interfaces';
import { UiContext } from 'context/ui';
import { dateFunctions } from 'utils';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDraggin, endDraggin } = useContext(UiContext);

  const router = useRouter();

  const createdAtMemorize = useMemo(
    () => dateFunctions.getFormatDistance(entry.createdAt),
    [entry.createdAt]
  );

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);
    startDraggin();
  };

  const onDragEnd = (e: DragEvent<HTMLDivElement>) => {
    endDraggin();
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
