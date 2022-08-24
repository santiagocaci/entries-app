import { formatDistanceToNow } from 'date-fns';

export const getFormatDistance = (date: number) => {
  const fromNow = formatDistanceToNow(date);

  return fromNow;
};
