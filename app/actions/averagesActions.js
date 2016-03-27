import { getAvgMessagesByHour } from './queries';

import { notify } from './notificationsActions';

export const REQUEST_AVERAGES = 'REQUEST_AVERAGES';
export const RECEIVE_AVERAGES = 'RECEIVE_AVERAGES';
export const CHANGE_DATE = 'CHANGE_DATE';

export const requestAverages = delimiter => ({ type: REQUEST_AVERAGES, delimiter });
export const receiveAverages = (data, delimiter, date) => (
  { type: RECEIVE_AVERAGES, data, delimiter, date, receivedAt: Date.now() }
);
export const changeDate = (delimiter, date) => ({ type: CHANGE_DATE, delimiter, date });

export const getHours = date => dispatch => {
  dispatch(requestAverages('BY_HOUR'));
  return getAvgMessagesByHour(date)
    .then(data => dispatch(receiveAverages(data, 'BY_HOUR', date)))
    .catch(err => dispatch(notify(err.msg, 'error')));
};

export const getHoursIfNeeded = date =>
  (dispatch, getState) => {
    if (shouldFetchHours(getState(), date)) {
      return dispatch(getHours(date));
    }
    return dispatch(changeDate('BY_HOUR', date));
  };

function shouldFetchHours(state, { year, month, day }) {
  const { available } = state.averages.byHour;
  if (!available[`${year}-${month}-${day}`]) {
    return true;
  }
  return false;
}

