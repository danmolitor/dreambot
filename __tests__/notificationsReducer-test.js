/* global describe, it, expect, jest, beforeEach */

jest.unmock('../app/actions');
jest.unmock('../app/actions/notificationsActions');
jest.unmock('../app/actions/averagesActions');
jest.unmock('../app/reducers/notificationsReducer');
jest.unmock('redux');

import { addNotification, nextNotification } from '../app/actions';
import notifications from '../app/reducers/notificationsReducer';

describe('notifications', () => {
  it('should have the correct default state', () => {
    const initialState = {
      currentNotification: false,
      queue: [],
    };

    expect(notifications(undefined, {})).toEqual(initialState);
  });

  describe('ADD_NOTIFICATION', () => {
    it('should add a notification to the queue', () => {
      const initialState = {
        currentNotification: false,
        queue: [],
      };
      const expectedState = {
        currentNotification: false,
        queue: [
          { message: 'Hello world!', style: 'error' }
        ],
      };

      expect(
        notifications(initialState, addNotification('Hello world!', 'error'))
      ).toEqual(expectedState);
    });
  });

  describe('NEXT_NOTIFICATION', () => {
    it('it should remove a notification from the queue and make it the current notification', () => {
      const initialState = {
        currentNotification: false,
        queue: [
          { message: 'Hello world!', style: 'error' }
        ],
      };
      const expectedState = {
        currentNotification: { message: 'Hello world!', style: 'error' },
        queue: [],
      };

      expect(notifications(initialState, nextNotification())).toEqual(expectedState);
    });

    it('should remove the currentNotification if the queue is empty', () => {
      const initialState = {
        currentNotification: { message: 'Hello world!', style: 'error' },
        queue: [],
      };
      const expectedState = {
        currentNotification: false,
        queue: [],
      };

      expect(notifications(initialState, nextNotification())).toEqual(expectedState);
    });
  });
});
