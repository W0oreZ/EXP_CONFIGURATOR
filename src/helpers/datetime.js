import moment from 'moment';

export function printDateTime(dt)
{
  return moment(dt).format('YYYY-MM-DD HH:MM:SS');
}