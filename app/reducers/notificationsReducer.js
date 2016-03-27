import { ADD_NOTIFICATION, NEXT_NOTIFICATION } from '../actions';

const initialState = {
  currentNotification: false,
  queue: []
};

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        queue: [...state.queue, action.notification]
      };
    case NEXT_NOTIFICATION:
      return {
        ...state,
        currentNotification: state.queue[0] || false,
        queue: state.queue.slice(0, state.queue.length - 1)
      };
    default:
      return state;
  }
}
