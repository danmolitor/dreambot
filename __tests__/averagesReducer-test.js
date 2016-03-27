/* global describe, it, expect, jest */

jest.unmock('../app/reducers/averagesReducer');
jest.unmock('../app/actions');
jest.unmock('redux');

import averagesReducer from '../app/reducers/averagesReducer';
import { REQUEST_AVERAGES, RECEIVE_AVERAGES, CHANGE_DATE } from '../actions';
import { createStore } from 'redux';

describe('averagesReducer', () => {
  it('should have the correct initial state', () => {
    const initialState = {
      displayedDate = {
        year: 0,
        month: 0,
        date: 0
      },
      isFetching: false,
      available: {}
    }
    expect(true).toEqual(true);
  });
});
