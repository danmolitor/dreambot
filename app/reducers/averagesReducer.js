import { combineReducers } from 'redux';
import moment from 'moment';

import { REQUEST_AVERAGES, RECEIVE_AVERAGES, CHANGE_DATE } from '../actions';

const initialState = {
  displayedDate: {
    year: 0,
    month: 0,
    day: 0
  },
  isFetching: false,
  available: {}
};

function byHour(state = initialState, action) {
  if (action.delimiter !== 'BY_HOUR') {
    return state;
  }

  switch (action.type) {
    case REQUEST_AVERAGES:
      return { ...state, isFetching: true };
    case RECEIVE_AVERAGES:
      // wrap this case in a block? see http://eslint.org/docs/rules/no-case-declarations
      const { year, month, day } = action.date;
      return {
        ...state,
        displayedDate: { ...action.date },
        isFetching: false,
        available: {
          ...state.available,
          [`${year}-${month}-${day}`]: {
            receivedAt: action.receivedAt,
            data: action.data
          }
        }
      };
    case CHANGE_DATE:
      return { ...state, displayedDate: { ...action.date } };
    default:
      return state;
  }
}

const averagesReducer = combineReducers({
  byHour
});

export default averagesReducer;
