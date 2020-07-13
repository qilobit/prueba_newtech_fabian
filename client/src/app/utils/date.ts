import * as moment from 'moment';

export const formatDate = (date) => {
  return moment(cleanDate(date)).format('DD-MM-YYYY');
}

export const editingDate = (date) => {
  return moment(cleanDate(date)).format('YYYY-MM-DD');
}

function cleanDate(date) {
  if (date) {
    return String(date).split('T')[0];
  }
  return date;
}