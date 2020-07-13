import * as moment from 'moment';

export const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
}

export const editingDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
}