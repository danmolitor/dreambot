/* global describe, it, expect, jest */

jest.unmock('../app/reducers/messages');
jest.unmock('redux');
jest.unmock('../app/actions/index');

import { addMessage } from '../app/actions/index';
import messages from '../app/reducers/messages';
import { createStore } from 'redux';

describe('messages', () => {
  let mockStore;
  beforeEach(() => {
    mockStore = createStore(messages);
  });


  it('should add messages', () => {
    mockStore.dispatch(addMessage('Hello'));
    expect(mockStore.getState().messages.length).toEqual(1);
  });

  it('should filter messages by username', () => {
    mockStore.dispatch(addMessage('Hello'));
    let mockAction = { type: 'FILTER_MESSAGES', username: 'BOB' };
    mockStore.dispatch(mockAction);
    expect(mockStore.getState().messages.length).toEqual(0);
  });

  it('should receive 2 messages rather than 3 in total', () => {
    mockStore.dispatch({ type: 'ADD_MESSAGE', id: '123', message: 'Hello' });
    mockStore.dispatch({ type: 'RECEIVE_MESSAGES', messages: [
      {
        id: '123',
        message: 'Hello'
      },
      {
        id: '456',
        message: 'See you tomorrow'
      }] });

    expect(mockStore.getState().messages.length).toEqual(2);
  });
});
