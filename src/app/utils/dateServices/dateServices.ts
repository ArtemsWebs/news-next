import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

export function distanceDate(date: string) {
  return formatDistanceToNow(new Date(date), { locale: ru, addSuffix: true });
}
